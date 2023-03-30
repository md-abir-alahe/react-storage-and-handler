import React from 'react';
import { addToDb, deleteShoppingCartDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    const deleteShoppingCart = () => {
        deleteShoppingCartDb();
    }

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>only for : ${price}</p>
            <p><small>it has id : {id}</small></p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
            <button onClick={deleteShoppingCart}>Delete all data from local storage</button>
        </div>
    );
};

export default Cosmetic;