import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: { 
        searchTerm: '',
        datas : [],
    },
    reducers : {
        changeSearchTerm(state, action) { 
            state.searchTerm = action.payload;
        },
        // Assumption (Varsayım) :
        // action.payload === { name: 'aaba', cost: 120 }
        addCar(state, action) { 
            state.datas.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id : nanoid(),
            });
        },
        removeCar(state, action) { 
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.datas.filter((car) => {
                return car.id !== action.payload;
            });
            state.datas = updated;
        },
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;