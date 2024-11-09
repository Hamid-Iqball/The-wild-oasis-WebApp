import React, { createContext, useContext } from 'react'

const TableContext = createContext()
function Table({columns,children}) {
  return (
    <TableContext.Provider value={{columns}}>
    <div className={`border rounded-md mb-4  `}  role='table'>
       {children}
    </div>
    </TableContext.Provider>
  )
}

function Header({children}){
    const {columns} = useContext(TableContext)
    return <header className={`px-2 font-semibold gap-8 p-4  text-[1rem] text-[#454546] border-b-[1px]`}
    role='row'
    style={{display:'grid' , gridTemplateColumns:columns}}
    >
    {children}
    </header>
}


function Row({children}){
    const {columns} = useContext(TableContext)
    return <div style={{display:'grid' , gridTemplateColumns:columns}}>
        {children}
    </div>
}

function Empty(){
    return <div> No Data Availabale.</div>
}
function Body({data ,render}){
    if (!data) return <Empty/>
    return <div className='p-[2px]'>

{data.map(render)}
    </div>
}

function Footer(){

}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer =Footer;
export default Table