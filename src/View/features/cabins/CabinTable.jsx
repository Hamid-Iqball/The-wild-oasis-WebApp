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
const [searchParams] = useSearchParams()   //Here we need the data that we have stored in the URL and we get that with the help of useSearchParams hook

if(isLoading){
  return  <Spinner/>
}

// Filtering the cabins by the amount of discount the hotel has provided.
const filterValue = searchParams.get('discount') || 'all'
let filteredCabins;
if(filterValue==='all') filteredCabins=cabins
if(filterValue==='no-discount'){
 filteredCabins = cabins.filter((cabin)=>cabin.discount===0)
}
if(filterValue==='with-discount'){
 filteredCabins = cabins.filter((cabin)=>cabin.discount>0)
}

 
// Sorting the cabins
// get the value of the selected option using searchParams
let sortBy = searchParams.get("sortBy") || 'name-asc'
const [field , direction] = sortBy.split('-')
// Here we jusr split the value of an option and destructure it in field and direction, direction will either be asc or desc , with the help of that we creat modifier.
const modifier = direction==='asc' ? 1 : -1


const sortedCabins = filteredCabins.sort((a,b)=>{
  if(typeof a[field] === 'string'){

    return (a[field].localeCompare(b[field])*-1)*modifier  // multiplied it with -1 because of the behaviour of the localeCompare
    // if the result of the local c
  }
  return (a[field]-b[field])*modifier
})


console.log(field,direction,sortedCabins)
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
    
    <Table.Body data={sortedCabins} render={(cabin=> <CabinRow cabin={cabin} key={cabin.id}/>)} />
       
    </Table>
  </Menus>
  )
}

export default CabinTable