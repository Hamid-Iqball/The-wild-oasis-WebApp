import React, { cloneElement, createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import { useOutsideClick } from '../../ViewModal/useOutsideClick'

// The Pattren used here is known as Compound component pattren to enhance reuseability. This is done in four steps which are the fol
// 1) Create Context
const ModalContext = createContext()

// 2) Create Parent component and wrap all its children in Context Provider
function Modal({children}){
  const [openName,setOpenName] = useState(" ")
  const close = ()=>{setOpenName(" ")}
  const open = setOpenName
  return (
  <ModalContext.Provider value={{openName,open,close}} >
  {children}
  </ModalContext.Provider>
  )
}

// Create Child components
function Open({children,opens:openWindowsName}){
const {open} = useContext(ModalContext)
return cloneElement(children, {onClick : ()=>open(openWindowsName)}) 
}


function Window({children,name}) {
  const {openName,close} = useContext(ModalContext)    
  const {ref} = useOutsideClick(close)



  if(name !== openName) return null;

  return createPortal (
    <div className='fixed top-0 left-0 w-full h-screen z-50 bg-customGray-50 bg-opacity-20  backdrop-blur transition duration-1000'>
    <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] dark:bg-Dark-100 py-4 px-4 transition ease-in-out duration-[0.5s] rounded-lg shadow-md shadow-customGray-500 w-2/3 border' ref={ref}>
    <div >
    <button className='absolute top-2 right-3 border text-3xl hover:bg-customGray-100 rounded-md text-orange-900' 
    onClick={close}><HiXMark/></button>
    {cloneElement(children,{onCloseModal : close}) }
    </div>
    </div>
    </div>,
    document.body
  )
}

// Add Child Components as properties to parent component.
Modal.Open = Open
Modal.Window = Window
export default Modal

// React Portal : React portal is a feature that allows us to render an element outside of the parent component's DOM structure while still keeping the child element in the original position of the component tree. With a portal we can render a component in any place inside the DOM tree but still leave the component at the same place in the react component tree.

// cloneElement:: cloneElement let us create a new React element using another element as a strting point.It allows us to clone an existing React Element and modify it's props conditionally.