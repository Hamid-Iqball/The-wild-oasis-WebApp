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
    <div className='border text-sm max-w-[100%] mx-6 my-4 rounded-md' role='table'>
<div className='grid grid-cols-[0.7fr,1.5fr,1.8fr,1fr,1fr,1fr] px-2 font-semibold gap-8 p-4  text-[1rem] text-[#454546] border-b-[1px] '>
 <h2></h2>
  <h2 className='ml-2'>Cabin</h2>
  <h2 className='-ml-4'>CAPACITY</h2>
  <h2 className='-ml-2'>PRICE</h2>
  <h2>DISCOUNT</h2>
  <h2></h2>
</div>
{cabins.map(cabin=> <CabinRow cabin={cabin} key={cabin.id}/>)}
    </div>
  )
}

export default CabinTable