import { useState, createContext, useEffect } from 'react';

export const StoreContext = createContext({
    products: [],
    cartItems: [],
    addToCart: () => { },
});

export function StoreContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function populateShop() {
            try {
                const data = await fetch('https://fakestoreapi.com/products');
                const shopData = await data.json();
                setProducts(shopData);
            } catch (err) {
                console.error(err);
            }
        }
        populateShop();
    }, []);

    function addToCart(productId, itemCount) {
        console.log('COUNT OF THE ITEMS', itemCount)
        console.log('ID OF THE PRODUCT', productId);
        const foundProduct = products.find((item) => item.id === productId);
        const productWithCount = { ...foundProduct, count: Number(itemCount) }
        if (cartItems.find((item) => item.id == productId)) {
            let targetIndex = cartItems.findIndex((thing) => thing.id == productId)
            setCartItems(cartItems.splice(targetIndex, 1))
        }
        if (productWithCount) {
            setCartItems([...cartItems, productWithCount])
        }
    }

    console.log('cartItems AFTER', cartItems);

    const contextValue = {
        products,
        cartItems,
        addToCart,
    };

    return (
        <>
            <StoreContext value={contextValue}>
                {children}
            </StoreContext>
        </>
    );
}