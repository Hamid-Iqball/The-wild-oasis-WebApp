import React from 'react'
import Table from '../../UI/Table'

import { useBookings } from '../../../ViewModal/Hooks/BookingHooks/useBookings'
import Spinner from '../../UI/Spinner'
import BookingsRow from './BookingsRow'
import Pagination from '../../UI/Pagination'




function BookingTable() {
const {bookings , isLoading , count} = useBookings()

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

    <Table.Footer>
      <Pagination count={count}/>
    </Table.Footer>
    </Table>
  )
}

export default BookingTable