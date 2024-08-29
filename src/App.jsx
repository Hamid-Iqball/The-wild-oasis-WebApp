import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './View/Pages/Dashboard'
import Bookings from './View/Pages/Bookings'
import Cabins from './View/Pages/Cabins'
import NewUsers from './View/Pages/Users'
import Settings from "./View/Pages/Settings"
import Account from "./View/Pages/Account"
import Login from "./View/Pages/Login"
import PageNotFound from './View/Pages/PageNotFound'
import AppLayout from "./View/AppLayout" 

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>} >
    <Route index element={<Navigate replace to="dashboard" />}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='bookings' element={<Bookings/>}/>
    <Route path='cabins' element={<Cabins/>}/>
    <Route path='users' element={<NewUsers/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='account' element={<Account/>}/>
    </Route>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<PageNotFound/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App