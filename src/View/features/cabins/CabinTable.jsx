import React from 'react'
import CabinRow from './CabinRow'
import { useCabins } from '../../../ViewModal/Hooks/CabinHooks/useCabins'
import Spinner from '../../UI/Spinner'
import Error from '../../UI/Error'
import Table from '../../UI/Table'
import Menus from '../../UI/Menus'
import { useSearchParams } from 'react-router-dom'

function CabinTable() {
const {cabins, isLoading , isError} = useCabins()
const [searchParam] = useSearchParams()   //Here we need the data that we have stored in the URL and we get that with the help of useSearchParams hook

if(isLoading){
  return  <Spinner/>
}

// Filtering the cabins by the amount of discount the hotel has provided.
const filterValue = searchParam.get('discount') || 'all'
let filteredCabins;
if(filterValue==='all') filteredCabins=cabins
if(filterValue==='no-discount'){
 filteredCabins = cabins.filter((cabin)=>cabin.discount===0)
}
if(filterValue==='with-discount'){
 filteredCabins = cabins.filter((cabin)=>cabin.discount>0)
}

if(isError){
return <Error>Cabin could not be deleted</Error>
}

return ( <Menus>

    <Table columns='0.7fr,1.5fr,1.8fr,1fr,1fr,1fr'>
    <Table.Header>
      <h2></h2>
      <h2 className='ml-2'>CABIN</h2>
      <h2 className='-ml-4'>CAPACITY</h2>
      <h2 className='-ml-2'>PRICE</h2>
      <h2>DISCOUNT</h2>
      <h2></h2>
    </Table.Header>
    
    <Table.Body data={filteredCabins} render={(cabin=> <CabinRow cabin={cabin} key={cabin.id}/>)} />
       
    </Table>
  </Menus>
  )
}

export default CabinTable