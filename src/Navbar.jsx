import styles from './Navbar.module.css'
import { Link } from 'react-router';
import { ShoppingCart, Store } from 'lucide-react';
import { Shop } from './components/Shop';
import { useContext } from 'react';
import { StoreContext } from './StoreContext';

const Navbar = () => {

    const { cartItems } = useContext(StoreContext);

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].count;
        }
        return total > 0 ? total : 0;
    }

    return (
        <>
            <div className={styles.navbar}>
                <ul>
                    <div>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='shop'><li>Shop</li></Link>
                        <Link to='cart'><li className={styles.cartListItem}>
                            <ShoppingCart size={32} strokeWidth={2.5} style={{ marginRight: '8px' }} />
                            <span>{calculateTotal()}</span>
                        </li></Link>
                    </div>
                </ul>
            </div>
        </>
    );

}

export { Navbar }