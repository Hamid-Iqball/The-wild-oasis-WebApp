import Filter from "../../UI/Filter"

function DashboardFilter(){
    return <Filter filterField='last' filteringOptions={[
        {value:'7', label:'Last 7 days'},
        {value:'30', label:'Last 30 days'},
        {value:'90', label:'Last 90 days'},
    
      ]} />
}

export default DashboardFilter