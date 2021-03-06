import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>house: {house}</p>
            <button onClick={handleHouseIncrease}>aunty</button>
        </div>
    );
};

export default Aunty;