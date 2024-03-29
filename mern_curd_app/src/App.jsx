import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import User from './assets/User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
