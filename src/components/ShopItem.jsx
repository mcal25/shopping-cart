import { useState, useContext } from "react";
import styles from './Shop.module.css'
import { StoreContext } from '../StoreContext';




const ShopItem = ({ item }) => {

    const { addToCart, cartItems } = useContext(StoreContext);

    const [quantity, setQuantity] = useState(cartItems.find((cartItem) => cartItem.id === item.id)?.count);

    return <div className={styles.shopItem} key={item.id}>
        <p>{item.title}</p>
        <img className={styles.shopItemImage} src={item.image} alt="give us your money" />
        <p>${item.price}</p>
        <input
            className={styles.shopItemInput}
            name="item-quantity"
            placeholder="0"
            type="number"
            value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button className={styles.addToCartBtn} onClick={() => addToCart(item.id, quantity)}>Add to cart</button>
    </div>
}

export { ShopItem };