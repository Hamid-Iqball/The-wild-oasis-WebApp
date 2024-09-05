import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCabins } from '../../../Modal/Services/apiCabins'
import Spinner from '../../Spinner'
import Error from '../../Error'
import CabinRow from './CabinRow'

function CabinTable() {
const {isLoading ,data:cabins,isError} = useQuery(
    {
        queryKey:['cabins'],
        queryFn: getCabins
    }
)
if(isLoading){
    return  <Spinner/>
}
if(isError){
  return <Error/>
}
  return (
    <div className='border   text-sm max-w-[100%] mx-12 my-4 rounded-md' role='table'>
<div className='grid grid-cols-[0.6fr,1fr,1fr,1fr,1fr,1fr] px-2 font-semibold gap-8 p-4  text-[1rem] text-[#626263] border-b-[1px] '>
 <h2></h2>
  <h2>CABIN</h2>
  <h2>CAPACITY</h2>
  <h2>PRICE</h2>
  <h2>DISCOUNT</h2>
  <h2></h2>
</div>
<CabinRow/>
    </div>
  )
}

export default CabinTable