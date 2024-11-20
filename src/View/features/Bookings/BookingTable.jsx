import React from 'react'
import Table from '../../UI/Table'

import { useBookings } from '../../../ViewModal/Hooks/BookingHooks/useBookings'
import Spinner from '../../UI/Spinner'
import BookingsRow from './BookingsRow'




function BookingTable() {
const {bookings , isLoading} = useBookings()

if(isLoading) return <Spinner/>

  return (
    <Table columns='0.8fr 2fr 3fr 1.4fr 1fr 1fr'>
    <Table.Header >
    <div>CABIN</div>
    <div>GUEST</div>
    <div>DATES</div>
    <div>STATUS</div>
    <div>AMOUNT</div>
    <div></div>
    </Table.Header>
    <Table.Body 
data={bookings}
render = {(booking)=> <BookingsRow booking={booking} key={booking.id}/>}

/>
    </Table>
  )
}

export default BookingTable