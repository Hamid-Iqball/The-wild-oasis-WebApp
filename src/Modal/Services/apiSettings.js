import supabase from "./supabase";


export async  function getSettings(){  
let { data: settings, error } = await supabase
.from('settings')
.select('*').single()

if(error){
    throw new Error("Settings could not be loaded")
}
return settings
}