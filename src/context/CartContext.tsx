import React, { createContext, useContext, useState } from "react";
import type { Product } from "../types/Product";

// Type for cart item: extends Product and adds quantity
export type CartItem = Product & {
  quantity: number;
};

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
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (!existingItem) return prevItems;

      if (existingItem.quantity > 1) {
        // Decrease quantity by 1
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove item completely
        return prevItems.filter((item) => item.id !== productId);
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
