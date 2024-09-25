import React from 'react'
import CabinRow from './CabinRow'
import { useCabins } from '../../../ViewModal/Hooks/CabinHooks/useCabins'
import Spinner from '../../UI/Spinner'
import Error from '../../UI/Error'
import Table from '../../UI/Table'

function CabinTable() {
const {cabins, isLoading , isError} = useCabins()

if(isLoading){
  return  <Spinner/>
}
if(isError){
return <Error>Cabin could not be deleted</Error>
}
  return (
    <Table columns='0.7fr,1.5fr,1.8fr,1fr,1fr,1fr'>
    <Table.Header>
      <h2></h2>
      <h2 className='ml-2'>CABIN</h2>
      <h2 className='-ml-4'>CAPACITY</h2>
      <h2 className='-ml-2'>PRICE</h2>
      <h2>DISCOUNT</h2>
      <h2></h2>
    </Table.Header>
    
    <Table.Body data={cabins} render={(cabin=> <CabinRow cabin={cabin} key={cabin.id}/>)} />
       
    </Table>
  )
}

export default CabinTable