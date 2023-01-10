import { useSelector, useDispatch} from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { datas, searchTerm } }) => {
        const filteredCars = datas.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return {
            cars: filteredCars,
            name: form.name,
        };

        //return state.cars.datas;
        //return state.cars.searchTerm;  // show us the searchTerm value inside the carSlice.js file 
    
    }); 

    //console.log(cars_list);

    const handleDelete = (get_car_value) => { 
        dispatch(removeCar(get_car_value.id));
    };

    const renderedCarList = cars.map((car) => {
        // Decide if this name should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
                <p>{car.name} - ${car.cost}</p>
                <button className="button is-danger" onClick={ () => handleDelete(car) }>Delete</button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCarList}
            <hr/>
        </div>
    );

}
export default CarList;