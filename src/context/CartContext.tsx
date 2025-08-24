import React, { createContext, useContext, useState } from "react";
import type { Product } from "../types/Product";
import type { CartItem } from "@/types/CartItem";

// Context type definition
export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

// Create context with initial null value
const CartContext = createContext<CartContextType | null>(null);

// Hook to consume cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider component wrapping the app
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Add product to cart (or increase quantity if exists)
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Open sidebar immediately when adding to cart
    setIsSidebarOpen(true);
  };

  // Remove product from cart or decrease quantity by 1
  const removeFromCart = (productId: number) => { //productId is a type declaration for Typescript
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId); // This checks if the product already exists in the cart or not
      if (!existingItem) return prevItems; // If the existing item is false then the followiing previous value of the cart should be reflected and not get updated with anything

      if (existingItem.quantity > 1) { //This checks if the product's quantity is greater than 1 or not 
        // Decrease quantity by 1
        return prevItems.map((item) => // This goes through each and every item of the Product object of the cart value and checks if the product exists or not and if it does and it's more than 1 then extend the item object into a new object of the item by Spread operator and then update the quantiy by -1
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove item completely
        return prevItems.filter((item) => item.id !== productId); // The filter method creates a new array with only the elements which satisfies the condition which is if the item id is not matching with the product id then the following condition appears true which means the filter method will create a new array and then only keep the items whose item.id (the one we are trying to remove) is matching with the productId
      }
    });
  };

  // Update quantity to a specific value (minimum 1)
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 }
          : item
      )
    );
  };

  // Toggle cart sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
