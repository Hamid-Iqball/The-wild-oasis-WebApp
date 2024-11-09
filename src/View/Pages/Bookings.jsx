import Table from "../UI/Table";



function Bookings() {
  return (
   <div>
    Bookings
    <Table columns='0.6fr 2fr 2.4fr 1.4fr 1fr 3.2fr'>
    <Table.Header>
    <div>CABIN</div>
    <div>GUEST</div>
    <div>DATES</div>
    <div>STATUS</div>
    <div>AMOUNT</div>
    <div></div>
    </Table.Header>
    <Table.Body></Table.Body>
    </Table>
   </div>
  );
}

export default Bookings;
