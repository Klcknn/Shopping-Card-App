import { useSelector } from "react-redux";
export default function CarValue() {
    const totalCost = useSelector(( {cars: { datas, searchTerm }} ) =>  
        datas.filter((data_cars) => 
            data_cars.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc, data_cars) => acc + data_cars.cost, 0)

        /* 
        const filteredCars = datas.filter((data_cars) => {
            return data_cars.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        let new_cost = 0;
        for(let data_cars of filteredCars){
            new_cost += data_cars.cost;
        }
        return new_cost; 
        */
    );

    return (
        <div className="car-value">
            Total Cost: ${totalCost} 
        </div>
    );
}