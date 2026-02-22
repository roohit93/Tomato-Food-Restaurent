import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/Place order/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Signin from './Components/Sign-in/Signin'


const App = () => {

  const[showsignin,setShowsignin] = useState(false)
  return (
    <>
    {showsignin?<Signin setShowsignin={setShowsignin}></Signin >:<></>}    {/*Pop-up*/}
    <div className='app'>
      <Navbar setShowsignin={setShowsignin}></Navbar>

      <Routes>
        <Route path='/Tomato-Food-Restaurent/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/order' element = {<PlaceOrder/>}/>
      </Routes>
    </div>

    <Footer></Footer>
    
    console.log("hello");
    
    </>
  )
}

export default App