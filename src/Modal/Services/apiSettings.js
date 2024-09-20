import supabase from "./supabase";


export async  function getSettings(){  
let {  data, error } = await supabase
.from('settings')
.select('*').single()

if(error){
    throw new Error("Settings could not be loaded")
}
return data
}


export async function updateSettigs(newSettings){
    
const { data, error } = await supabase
.from('settings')
.update(newSettings)
.eq('id', 1)
.single()

}