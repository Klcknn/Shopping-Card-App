import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    /*     
    const name = useSelector((state) => { 
        return state.form.name;
    });

    const cost = useSelector((state) => { 
        return state.form.cost;
    }); 
    */
    // This is the too practical method. 
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        };
    });

    const handleChangeName = (event) => {
        const new_value_name = event.target.value; //event.target.value
        dispatch(changeName(new_value_name));
    };

    const handleChangeCost = (event) => { 
        const new_value_cost = parseInt(event.target.value) || 0 ; // event.target.value return a string value which convert to Integer with parseInt(event.target.value) 
        dispatch(changeCost(new_value_cost));
    };

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        dispatch(addCar({name, cost}));
        //dispatch(changeCost(0));
        //dispatch(changeName(""));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Shopping App</h4>
            <form action="" onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor="">Product Name :</label>
                        <input className="input is-expanded" value={name} onChange={handleChangeName} type="text" />
                    </div>    
                    <div className="field">
                        <label className="label" htmlFor="">Product Cost :</label>
                        <input className="input is-expanded" value={cost || ""} onChange={handleChangeCost} type="number" />
                    </div>
                    <div className="field">
                        <button className="button is-success">Add</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default CarForm;