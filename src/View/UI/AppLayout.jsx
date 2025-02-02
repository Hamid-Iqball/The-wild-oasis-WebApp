import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function AppLayout() {
  return (
    <div className="flex h-screen">

    <aside className="w-56  text-white fixed top-0 bottom-0 border-r dark:bg-Dark-100 dark:border-customGray-700 ">
      <SideBar />
    </aside>
    <main  className="ml-56 flex flex-col flex-1 dark:bg-Dark-100">
      
      <header className='border-b dark:border-customGray-700  '>
      <Header />
      </header>
      <section className="flex-1 bg-gray-100 dark:bg-Dark-200 dark:text-gray-50 p-4 dark:border-customGray-700 overflow-auto">
        <Outlet/>
      </section>
        
    </main>
      </div>
  )
}

export default AppLayout 