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
      console.log(newCart)
      setCart(newCart);
      return;
    }
    const newItem = {...item, count};
    setCart([...cart, newItem]);
    
  }
  const getTotalItems = ()=>{
    let counter = 0;
    cart.forEach(({count})=> counter = counter + count);
    return counter;
  }
  const isItemInCart = (item)=> cart.some(({id})=> item.id === id);
  useEffect(() => {
    //getTotalItems();
    console.log(cart)
  },[cart]);
  return (
 
    <cartContext.Provider value={{cart, addItem, getTotalItems}}>
      {children}
    </cartContext.Provider>
  )
}
export {
  cartContext,
  CartContextProvider as default
}