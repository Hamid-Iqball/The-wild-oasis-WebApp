import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Dashboard from './View/Pages/Dashboard'
import Bookings from './View/Pages/Bookings'
import Cabins from './View/Pages/Cabins'
import NewUsers from './View/Pages/Users'
import Settings from "./View/Pages/Settings"
import Account from "./View/Pages/Account"
import Login from "./View/Pages/Login"
import PageNotFound from './View/Pages/PageNotFound'
import AppLayout from "./View/UI/AppLayout" 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Booking from './View/Pages/Booking'
import Checkin from './View/Pages/Checkin'

const queryClient  = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
})


function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>} >
    <Route index element={<Navigate replace to="dashboard" />}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='bookings' element={<Bookings/>}/>
    <Route path='bookings/:bookingId' element={<Booking/>}/>  
    <Route path='/checkin/:bookingId' element={<Checkin/>}/>  
    <Route path='cabins' element={<Cabins/>}/>
    <Route path='users' element={<NewUsers/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='account' element={<Account/>}/>
    </Route>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<PageNotFound/>} />
   </Routes>
   </BrowserRouter>
   <Toaster position='top-center' gutter={12} 
   containerStyle={{margin:"8px"}}
   toastOptions={{
    success:{
      duration:3000,
    },
    error:{
      duration:5000,
    },
    style:{
      fontSize:'16px',
      maxWidth:'500px',
      padding:"16px 24px",
      backgroundColor:'#F9FAFB',
      color:'#454546'
    }
   }}/>
    </QueryClientProvider>
  )
}

export default App