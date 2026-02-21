import React, { useState } from 'react'
import Header from '../../Components/Navbar/Header/Header'
import Explore from '../../Components/ExploreMenu/Explore'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

    const [category,setCategory] = useState("All")

  return (
    <div>
        <Header></Header>
        <Explore category = {category} setCategory = {setCategory}></Explore>
        <FoodDisplay category = {category}></FoodDisplay>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home