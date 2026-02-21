import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='place-order'>
        <div className="place-order-left">
          <p className="title">Delievery Information</p>

          <div className="multi-fields">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
          </div>
          <input type="email" name="" id="" placeholder='email address'/>
          <input type="text" name="" id="" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" name="" id="" placeholder='City' />
            <input type="text" name="" id="" placeholder='State'/>
          </div>

          <div className="multi-fields">
            <input type="text" name="" id="" placeholder='Zip code' />
            <input type="text" name="" id="" placeholder='Country'/>
          </div>
          <input type="text" name="" id="" placeholder='Phone'/>

        </div>
        <br></br>
        <div className="place-order-right">

          <div className="cart-total">
          <h2>Total:</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delievery fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+4}</b>
            </div>
          </div>
          <button>PROCEED TO CHEKOUT</button>
        </div>


        </div>
    </div>
  )
}

export default PlaceOrder