import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCabins } from '../../../Modal/Services/apiCabins'
import Spinner from '../../Spinner'

function CabinTable() {
const {isLoading ,data:cabins,isError} = useQuery(
    {
        queryKey:['cabins'],
        queryFn: getCabins
    }
)

if(isLoading){
    return <Spinner/>
}

  return (
    <div>CabinTable</div>
  )
}

export default CabinTable