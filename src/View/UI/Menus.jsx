import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
const MenusContext = createContext()

function Menus({children}) {
  const [OpenId,setOpenId] = useState('')
  const [position , setPosition] = useState(null)
  const close = ()=> setOpenId("")
  const open = (id)=>setOpenId(id);
  return (
    <MenusContext.Provider value={{OpenId,close,open,position,setPosition}} >
    {children}
    </MenusContext.Provider>
  )
}

function Menu({children}){
  return <div className='flex justify-center items-center'>{children}</div>
}

function Toggle({id}){
  const {open,close,OpenId,setPosition} = useContext(MenusContext)

  function handleClick(e){
    OpenId === "" || OpenId !== id ? open(id) : close()
    const rect =  e.target.closest("button").getBoundingClientRect(); //We will be using this data in another component(sibling) so we will have to store it in the parent component inorder to pass it to another sibling component.
    setPosition({
      x:window.innerWidth-rect.width-rect.x,
      y:rect.y+rect.height+8
    })

  }
  return <button className='bg-none p-2 text-xl font-bold border rounded-sm translate-x-3 transition-all duration-200' 
  onClick={handleClick}>
  <HiEllipsisVertical/>
  </button>
}

function List({id,children }){
  const {OpenId,position} = useContext(MenusContext)
  if(OpenId !== id) return null 


  return createPortal( <ul className='fixed bg-gray-100 shadow-md rounded-sm '    style={{ top: `${position.x}px`, right: `${position.y}px` }} >
    {children}
  </ul>,document.body)
}


function Button({children}){
  return <li>
  <button className='w-full text-left bg-none border-none p-[1.2rem 2.4rem]  transition-all duration-200 hover:bg-customGray-300 '>{children}</button>
  </li>
}

Menus.Menu = Menu
Menus.Toggle =Toggle
Menus.List =List
Menus.Button=Button


export default Menus

