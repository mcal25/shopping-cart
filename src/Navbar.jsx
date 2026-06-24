import styles from './Navbar.module.css'
import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { Shop } from './components/Shop';

const Navbar = () => {


    return (
        <>
            <div className={styles.navbar}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='shop'><li>Shop</li></Link>
                    <Link to='cart'><li className={styles.cartListItem}>
                        <p>Cart</p>
                        <ShoppingCart size={32} strokeWidth={2.5} style={{ marginRight: '8px' }}/>
                    </li></Link>
                </ul>
            </div>
        </>
    );

}

export { Navbar }