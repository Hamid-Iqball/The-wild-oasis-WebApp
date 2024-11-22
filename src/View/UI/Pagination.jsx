import React from 'react'
import {HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useSearchParams } from 'react-router-dom'


const Page_Size = 10
function Pagination({count}) {
//The value of nextpage and the previous page will depends on the current page and we will get it from URl with the help of useSearchParams
const [searchParams , setSearchParams] = useSearchParams()
const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
const pageCount = Math.ceil(count/Page_Size)


function NextPage (){
    const next = currentPage === pageCount ? currentPage : currentPage+1
    searchParams.set("page" , next)
    setSearchParams(searchParams)
} 

function prevPage(){
    const prev = currentPage===1? currentPage :currentPage-1
    searchParams.set('page' , prev)
    setSearchParams(searchParams) 
}

// if (count <= Page_Size) return ;
if(pageCount <=1) return ;
  return (
    <div className='text-black flex justify-between items-center gap-3' >
        <div>
        Showing <span className='font-semibold text-orange-950'>{(currentPage-1)*Page_Size+1}</span> to <span className='font-semibold text-orange-950'>{currentPage===pageCount ? count :currentPage*Page_Size}</span> of <span className='font-semibold text-orange-950'>{count}</span> results
        </div>

        <div className='flex justify-between items-center gap-4'>
          <button className='flex justify-center items-center px-1 rounded hover:bg-orange-700 hover:text-white' onClick={prevPage} disabled={currentPage===1}>
                <HiChevronLeft size={24}/>
                <span>Previous</span>
          </button>
          <button className='flex justify-center items-center px-1 rounded hover:bg-orange-700 hover:text-white' onClick={NextPage} disabled={currentPage===pageCount}>
            <span>Next</span>
            <HiChevronRight size={24}/>
          </button>
        </div>
    </div>
  )
}

export default Pagination