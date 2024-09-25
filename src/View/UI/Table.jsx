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
    return <div className={`grid grid-cols-[${columns}] px-2 font-semibold gap-8 p-4  text-[1rem] text-[#454546] border-b-[1px]`} role='row'>
    {children}
    </div>
}


function Row({children}){
    const {columns} = useContext(TableContext)
    return <div className={`${columns} `}>
        {children}
    </div>
}

function Body(){

}

function Footer(){

}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer =Footer;
export default Table