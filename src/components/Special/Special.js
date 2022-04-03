import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ornament }) => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Add Buy a House</button>
        </div>
    );
};

export default Special;