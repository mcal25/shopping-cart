import React, { useEffect, useState } from 'react';
import { Link } from "react-router";
import styles from './Shop.module.css'


const Shop = () => {


    const [shopArr, setShopArr] = useState([]);

    async function populateShop() {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const shopData = await data.json();
            setShopArr(shopData);
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        populateShop();
    }, []);

    console.log(shopArr);

    return (
        <>
            <h1>It's ya boy, da shop.</h1>
            <div className={styles.shopItemsContainer}>
                {shopArr.map(item => (
                    <div className={styles.shopItem}>
                        <p>{item.title}</p>
                        <img className={styles.shopItemImage} src={item.image} alt="give us your money" />
                        <p>$3.50</p>
                        <input className={styles.shopItemInput} placeholder="0" type="number" />
                        <button className={styles.addToCartBtn}>Add to cart</button>
                    </div>
                ))}
            </div>
            <Link to='/'><button>Go home?</button></Link>
        </>
    );
}

export { Shop };


/*
- decided it's probably ok for api to get called on every reload of shop, but still need to make sure we have a usestate for the arr



*/