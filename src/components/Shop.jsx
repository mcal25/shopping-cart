import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router";
import styles from './Shop.module.css'
import { StoreContext } from '../StoreContext';
import { ShopItem } from './ShopItem';


const Shop = () => {

    const { products, addToCart, cartItems } = useContext(StoreContext);



    return (
        <>
            <h1>It's ya boy, da shop.</h1>
            <div className={styles.shopItemsContainer}>
                {products.map(item => {
                    return <ShopItem item={item} key={item.id}/>
                })}
            </div>
            <Link to='/'><button>Go home?</button></Link>
        </>
    );
}

export { Shop };


/*
- decided it's probably ok for api to get called on every reload of shop, but still need to make sure we have a usestate for the arr



*/