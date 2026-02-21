import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {

  const{cartItems,addToCart,removeToCart} = useContext(StoreContext)

  return (
    <div className="FoodItem-List">

      <div className="food-item-menu-list">

        <img className='food-item-image' src={image} alt="" />
        {
          !cartItems[id] 
          ?<img className = "add" onClick ={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
          : <div className="food-item-counter">
            <img onClick = {()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick = {()=>removeToCart(id)} src={assets.remove_icon_red} alt="" />
          </div>
        }
      
      </div>
      
      <div className="food-item-info">
        <div className="food-item-name-rating">
          
          <p>{name}</p>
          <img src= {assets.rating_starts} alt="" />
        
        </div>
        <p className='food-item-desc'>
          {description}
        </p>
        <p className='food-item-price'>
           ₹{price}
        </p>

      </div>

    </div>
  )
}

export default FoodItem