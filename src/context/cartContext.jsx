import { useEffect, useState } from "react";
import { createContext } from "react";

const cartContext = createContext();
const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addItem = ({count, item})=>{
    if(isItemInCart(item)) {
      const newCart = cart.map((cartItem)=>{
        if (cartItem.id === item.id) cartItem.count += count;
        return cartItem;
      });
      setCart(newCart);
      return;
    }
    const newItem = {...item, count};
    setCart([...cart, newItem]);
    
  }
  const getTotalItems = ()=> cart.reduce((acc, {count})=> acc + count, 0);

  const removeItem = (itemId)=>{
    const newCart = cart.filter(({id})=> id !== itemId);
    setCart(newCart);
  }
  const clearCart = ()=>{
    setCart([]);
  }
  const isItemInCart = (item)=> cart.some(({id})=> item.id === id);
  /* useEffect(() => {
    //getTotalItems();
    console.log(cart)
  }); */
  return (
 
    <cartContext.Provider value={{cart, addItem, getTotalItems, removeItem, clearCart}}>
      {children}
    </cartContext.Provider>
  )
}
export {
  cartContext,
  CartContextProvider as default
}