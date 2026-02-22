import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowsignin}) => {

    const[menu,setMenu] = useState("MOBILE-APP")


    const{getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='Navbar'>
      <Link to= '/Tomato-Food-Restaurent/'><img src={assets.logo} alt="" className="Logo" /></Link>
      <ul className="Navbar-menu">
        <Link  to ='/Tomato-Food-Restaurent/' onClick={()=>{setMenu("HOME")}} className={menu==="HOME"?"active":" "} >HOME</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("MENU")}} className={menu==="MENU"?"active":" "} >MENU</a>
        <a href='#app-download' onClick={()=>{setMenu("MOBILE-APP")}} className={menu==="MOBILE-APP"?"active":" "} >MOBILE-APP</a>
        <a href='#footer' onClick={()=>{setMenu("CONTACT-US")}} className={menu==="CONTACT-US"?"active":" "} >CONTACT-US</a>
      </ul>
    
    <div className="Navbar-right">
      <img src={assets.search_icon} alt="" className="Search-icon"/>
      <div className="Navbar-icon">
        <Link to='/Cart'>< img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0?" ":"dot"}></div>
      </div>
      <button onClick={()=>setShowsignin(true)}>SIGN-IN</button>
    </div>

    console.log("Hello")

    </div>

    
  )
}

export default Navbar