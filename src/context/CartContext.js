import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
// Create context with initial null value
const CartContext = createContext(null);
// Hook to consume cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
// Provider component wrapping the app
export const CartProvider = ({ children, }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // Add product to cart (or increase quantity if exists)
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }
            else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        // Open sidebar immediately when adding to cart
        setIsSidebarOpen(true);
    };
    // Remove product from cart or decrease quantity by 1
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === productId);
            if (!existingItem)
                return prevItems;
            if (existingItem.quantity > 1) {
                // Decrease quantity by 1
                return prevItems.map((item) => item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item);
            }
            else {
                // Remove item completely
                return prevItems.filter((item) => item.id !== productId);
            }
        });
    };
    // Update quantity to a specific value (minimum 1)
    const updateQuantity = (productId, newQuantity) => {
        setCartItems((prevItems) => prevItems.map((item) => item.id === productId
            ? { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 }
            : item));
    };
    // Toggle cart sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (_jsx(CartContext.Provider, { value: {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            isSidebarOpen,
            toggleSidebar,
        }, children: children }));
};
