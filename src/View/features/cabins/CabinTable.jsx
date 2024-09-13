import React from 'react'
import CabinRow from './CabinRow'
import { useCabins } from '../../../ViewModal/Hooks/CabinHooks/useCabins'
import Spinner from '../../Spinner'
import Error from '../../Error'

function CabinTable() {
const {cabins, isLoading , isError} = useCabins()

if(isLoading){
  return  <Spinner/>
}
if(isError){
return <Error>Cabin could not be deleted</Error>
}
  return (
    <div className='border text-sm max-w-[100%] rounded-md mb-4' role='table'>
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