import React from 'react';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
