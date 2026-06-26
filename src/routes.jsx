import App from './App';
import { Cart } from './components/Cart';
import { Shop } from './components/Shop';
import { NiceLayout } from './NiceLayout';

const routes = [
    {
        element: <NiceLayout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'cart',
                element: <Cart />,
            }
        ]
    },

];

export default routes