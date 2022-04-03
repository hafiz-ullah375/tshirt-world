import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator
    // 3. && operator (shorthand)
    // 4. ||
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one Item</p>
    }
    else if (cart.length === 1) {
        command = <p>please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY You are buying</p>}
            {
                cart.length === 3 && <div className='orange'>
                    <h3>Trigonal</h3>
                    <p>tin jon ke diba</p>
                </div>
            }
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>remove all</button>}
        </div>
    );
};

export default Cart;