import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function AppLayout() {
  return (
    <div className="flex h-screen">

    <aside className="w-56 bg-gray-800 text-white fixed top-0 bottom-0 overflow-y-auto">
      <SideBar />
    </aside>



      <main  className="ml-56 flex flex-col flex-1">
          <header className='h-14  flex items-center justify-between p-4'>
          <Header />
          </header>

          <section className="flex-1 bg-gray-100 p-4 overflow-auto">
            <Outlet/>
          </section>
      </main>
      </div>
  )
}

export default AppLayout