import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

/* 
context api 
1. call createContext with a default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places
4. wrap you child context using ringContext.provider
5. Provide a value
6. to consume the context from child component 
7. useContext hook and you will you need to pass the  context name
8. make sure you take notes...
*/
export const RingContext = createContext('Diamond')
const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h2>Grand pa</h2>
                <button onClick={handleBuyAHouse}>Buy a House</button>
                <p>house: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;