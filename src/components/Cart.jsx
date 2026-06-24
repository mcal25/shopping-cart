import { useContext } from "react";
import { Link } from "react-router";
import { StoreContext } from "../StoreContext";
import styles from './Cart.module.css';

const Cart = () => {

    const { products, cartItems} = useContext(StoreContext);

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].count;
        }
        return total;
    }



    return (
        <>
            <h1>YOUR CART'S CONTENTS:</h1>
            <div className={styles.shopItemsContainer}>
                {cartItems.map(item => (
                    <div className={styles.shopItem} key={item.id}>
                        <p>{item.title}</p>
                        <img className={styles.shopItemImage} src={item.image} alt="give us your money" />
                        <p>$3.50</p>
                        <p className={styles.cartQuantityText}>Quantity: {item.count}</p>
                    </div>
                ))}
            </div>
            <h2>Total: {calculateTotal()}</h2>
            <Link to='/'><button>Go home?</button></Link>
        </>
    );
}


export { Cart };