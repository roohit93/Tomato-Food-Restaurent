import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId)=>{
        !cartItems[itemId] 
        ? setCartItems((prev)=>({...prev,[itemId]:1}))
        :setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    } 


    const removeToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

const getTotalCartAmount = ()=>{
    let totalamount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
           let iteminfo = food_list.find((product)=>{return product._id === item})
           totalamount += iteminfo.price*cartItems[item];
        }

    }

    return totalamount


}

    const contextValue = {food_list,cartItems,addToCart,removeToCart,setCartItems,getTotalCartAmount}

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

  )
}

export default StoreContextProvider