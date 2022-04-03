import React from 'react';
import Brother from '../Brother/Brother';
import Friends from '../Friends/Friends';
import MySelf from '../MySelf/MySelf';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house: {house}</p>
            <div style={{ display: 'flex' }}>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Friends house={house}></Friends>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;