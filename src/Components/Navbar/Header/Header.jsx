import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className="Header-content">
        <h1>Order your favorite food here</h1>
        <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with in the fintest
            ingredients and culinary expertise. Our mission is satisfy your cravings and evelate your dining
            experience, one delicious meal a time. 
        </p>
        <a href="#explore-menu"><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header