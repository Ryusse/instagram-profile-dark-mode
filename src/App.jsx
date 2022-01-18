import './assets/scss/main.scss'
import './App.scss'

import Header from './parts/Header/Header'
import Navbar from './parts/Navbar/Navbar'
import Content from './parts/Content/Content'

function App() {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Navbar />
    </div>
  )
}

export default App
