import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../UI/Item';

const ShowVehicles = () => {
     const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/vehicles');
            if(!res.ok) {
                throw res.error
            }

            const resData = await res.json();
            const data = await resData.data;
            setVehicles(data.vehicles)
            console.log(vehicles)
        }
        fetchData().catch((err) => {
            console.log(err.message)
        })
    }, []);

  return (
    <div>
        <h1>all vehcile</h1>
        {vehicles.map((vehicle) => {
            return (
                <Item key={vehicle._id} title={vehicle.type} summary={vehicle.summary} image={vehicle.images[0]}/>
            )
        })};
       <h1>all vehcile</h1>
    </div>
  )
}

export default ShowVehicles
