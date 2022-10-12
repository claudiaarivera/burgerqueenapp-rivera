import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext();
const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addItem = ({count, item})=>{
    if(isItemInCart(item)) {
      const newCart = cart.map((cartItem)=>{
        const {id, price }= cartItem;
        const newCount = id === item.id ? cartItem.count + count : cartItem.count;
        return {
          ...cartItem,
          count: newCount,
          amount: Math.round(price * newCount * 100) / 100
        };
      });
      setCart(newCart);
      return;
    }
    const newItem = {...item, count, amount:  Math.round(item.price * count * 100) / 100};
    setCart([...cart, newItem]);
    
  }
  const getTotalItems = ()=> cart.reduce((acc, {count})=> acc + count, 0);
  const getTotalPrice = ()=> {
    const total = cart.reduce((acc, { amount }) => (acc + amount), 0);
    return Math.round(total * 100) /100;
  };

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
 
    <cartContext.Provider value={{cart, addItem, getTotalItems, removeItem, clearCart, getTotalPrice}}>
      {children}
    </cartContext.Provider>
  )
}
export {
  cartContext,
  CartContextProvider as default
}