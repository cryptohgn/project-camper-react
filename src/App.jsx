import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/components/Home/Home"
import Login from "../src/components/Login/Login"
import ProtectedRoutes from "./components/ProtectedRoutes"
import users from "../src/data/users.json"
import { AppContext } from "./components/context/AppContext"
import {useState} from "react";
const App = () => {

  const [user, setUser] = useState()

  const changeUser = (value)=>{
    setUser(value)
    
  }

  return (
    
    <BrowserRouter>
    <h1>Hola  mundo</h1>
    <div className="container mt-5">
    <AppContext.Provider value={{users}}>git
        <Routes>
            <Route element={<ProtectedRoutes caActivate={user} redirectPath="/login"/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login changeUser={changeUser}/>}/>  
        </Routes>
        </AppContext.Provider>
    </div>
</BrowserRouter>
  )
}

export default App
