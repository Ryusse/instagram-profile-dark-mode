import { useState, useEffect } from 'react'
// import { usePreloader } from './hooks/usePreloader'

import Preloader from './Components/Preloader/Preloader'
import Header from './parts/Header/Header'
import Navbar from './parts/Navbar/Navbar'
import Content from './parts/Content/Content'

import './assets/scss/main.scss'
import './App.scss'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Navbar />
    </div>
  )
}
