import './scss/main.scss'
import './App.scss'

import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'

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
