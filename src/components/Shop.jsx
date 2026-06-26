import { useContext } from 'react';
import { Link } from "react-router";
import styles from './Shop.module.css'
import { StoreContext } from '../StoreContext';
import { ShopItem } from './ShopItem';

const Shop = () => {
    const { products } = useContext(StoreContext);

    return (
        <>
            <h1>My MEOWRVELOUS Wares</h1>
            <div className={styles.shopItemsContainer}>
                {products.map(item => {
                    return <ShopItem item={item} key={item.id} />
                })}
            </div>
        </>
    );
}

export { Shop };