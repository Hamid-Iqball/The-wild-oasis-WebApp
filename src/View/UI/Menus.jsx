import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
const MenusContext = createContext()

function Menus({children}) {
  const [OpenId,setOpenId] = useState('')
  const close = ()=> setOpenId("")
  const open = (id)=>setOpenId(id);
  return (
    <MenusContext.Provider value={{OpenId,close,open}} >
    {children}
    </MenusContext.Provider>
  )
}

function Menu({children}){
  return <div className='flex justify-center items-center'>{children}</div>
}

function Toggle({id}){
  const {open,close,OpenId} = useContext(MenusContext)

  function handleClick(){
    OpenId === "" || OpenId !== id ? open(id) : close()
    console.log(OpenId)
  }
  return <button className='bg-none p-2 text-xl font-bold border rounded-sm translate-x-3 transition-all duration-200' 
  onClick={handleClick}>
  <HiEllipsisVertical/>
  </button>
}

function List({id,children , position={x:20,y:20}}){
  const {OpenId} = useContext(MenusContext)
  if(OpenId !== id) return null 


  return createPortal( <ul className='fixed bg-gray-600 shadow-md rounded-md'    style={{ bottom: `${position.x}px`, right: `${position.y}px` }} >
    {children}
  </ul>,document.body)
}


function Button({children}){
  return <li>
  <button className='w-full text-left bg-none border-none p-[1.2rem 2.4rem] text-xl transition-all duration-200 hover:bg-gray-100  '>{children}</button>
  </li>
}

Menus.Menu = Menu
Menus.Toggle =Toggle
Menus.List =List
Menus.Button=Button


export default Menus

