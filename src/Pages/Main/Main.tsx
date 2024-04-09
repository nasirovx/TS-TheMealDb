import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AlfavitInfo from '../../Components/AlfavitInfo/AlfavitInfo'
import InfoMeals from '../../Components/InfoMeals/InfoMeals'
import CountryInfo from '../../Components/CountryInfo/CountryInfo'
import InfoIngredients from '../../Components/InfoIngredients/InfoIngredients'

const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meals/:title' element={<CountryInfo/>}/>
        <Route path='/alfavit/:meals' element={<AlfavitInfo/>}/>
        <Route path='/ingredient/:title' element={<InfoMeals/>}/>
        <Route path='/meal/:id/:title' element={<InfoIngredients/>}/>
    </Routes>
  )
}

export default Main
