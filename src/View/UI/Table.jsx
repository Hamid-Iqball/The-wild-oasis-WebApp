import React, { createContext, useContext } from 'react'

const TableContext = createContext()
function Table({columns,children}) {
  return (
    <TableContext.Provider value={{columns}}>
    <div className={`border rounded-md mb-3 mt-3  `}  role='table'>
       {children}
    </div>
    </TableContext.Provider>
  )
}

function Header({children}){
    const {columns} = useContext(TableContext)
    return <header style={{display:'grid' , gridTemplateColumns:columns}} className ={ ` px-2 font-semibold gap-8 p-3  text-[1rem] text-customGray-800 border-b-[1px]`} role='row'>
    {children}
    </header>
}


function Row({children}){
    const {columns} = useContext(TableContext)
    return <div style={{display:'grid' , gridTemplateColumns:columns}} >
        {children}
    </div>
}

function Empty(){
    return <div className='flex justify-center items-center p-4 bg-white'> No Data is available to show at the moment.</div>
}
function Body({data ,render}){
    if (!data) return <Empty/>
    return <div className='p-[2px] bg-white'>
    {data.map(render)}
    </div>
}

function Footer({children}){
return <div className='bg-customGray-100 px-2 p-1'>
{children}
</div>
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer =Footer;
export default Table