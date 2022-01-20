import { useState, useEffect } from 'react'
// import { usePreloader } from './hooks/usePreloader'

import Preloader from './Components/Preloader/Preloader'
import Header from './parts/Header/Header'
import Navbar from './parts/Navbar/Navbar'
import Content from './parts/Content/Content'

import './assets/scss/main.scss'
import './App.scss'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 700)
    })
  })

  return (
    <>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <div className='app'>
          <Header />
          <Content />
          <Navbar />
        </div>
      )}
    </>
  )
}
