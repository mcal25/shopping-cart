import { useContext } from "react";
import { Link } from "react-router";
import { StoreContext } from "../StoreContext";
import styles from './Cart.module.css';

const Cart = () => {
    const { cartItems, addToCart, setCartItems } = useContext(StoreContext);

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].count;
        }
        return total;
    }

    const calculateTotalCost = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += (cartItems[i].count * cartItems[i].price);
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
                        <p>${item.price}</p>
                        <label htmlFor="item-quantity">Quantity:</label>
                        <input name="item-quantity" className={styles.shopItemInput} value={item.count} type="number" onChange={(e) => addToCart(item.id, e.target.value)} />
                        <button className={styles.removeBtn} onClick={() => {
                            setCartItems((prev) => prev.filter((cartItem) => item.id !== cartItem.id));
                        }
                        }>Remove</button>
                    </div>
                ))}
            </div>
            <h2>Total Items: {calculateTotal()}</h2>
            <h2>Total Cost: {calculateTotalCost()} </h2>
        </>
    );
}

export { Cart };