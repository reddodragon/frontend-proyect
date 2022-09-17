import {Routes, Route} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import RequireAuth from './Components/RequireAuth'
import Cards from './routes/Cards'
import CRUDCard from './routes/CRUDCard'
import DeckCards from './routes/DeckCards'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'

function App() {


  return (

    <>
      <Navbar/>
     <Routes>
     
      <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
      <Route path='/Cards' element={<RequireAuth><Cards/></RequireAuth>}/>
      <Route path='/CRUDCard' element={<RequireAuth><CRUDCard/></RequireAuth>}/>
      <Route path='/DeckCards' element={<RequireAuth><DeckCards/></RequireAuth>}/>

      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
        
     </Routes>
    </>
  )
}

export default App
