import React from 'react'
import Table from '../../UI/Table'

import { useBookings } from '../../../ViewModal/Hooks/BookingHooks/useBookings'
import Spinner from '../../UI/Spinner'
import BookingsRow from './BookingsRow'


function BookingTable() {

const {bookings , isLoading} = useBookings()

if(isLoading) return <Spinner/>
  return (
    <Table columns='0.6fr 2fr 3fr 1.4fr 1fr 1fr'>
    <Table.Header >
    <h2>CABIN</h2>
    <h2>GUEST</h2>
    <h2>DATES</h2>
    <h2>STATUS</h2>
    <h2>AMOUNT</h2>
    <h2></h2>
    </Table.Header>
    <Table.Body 
/>
    </Table>
  )
}

export default BookingTable