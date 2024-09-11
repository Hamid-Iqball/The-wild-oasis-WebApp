import supabase, { supabaseUrl } from "./supabase";


export async function getCabins(){
    let { data, error } = await supabase.from('cabins').select('*')
    if(error){
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }
    return data;
}

// Upload Image https://vgsfnabpxjclsbxtblzd.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg


export async function createCabin(newCabin){
    // Create a cabin
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/"," ");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    
    const { data, error } = await supabase
    .from('cabins')
    .insert([
    {...newCabin, image:imagePath }
    ])

    if(error){
        console.error(error)
        throw new Error ('Cabin could not be Created')
    }

    // File for Image Upload
    const {  error:storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName,newCabin.image)
        return data
    }

export async function deleteCabin(id){
    const {data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    if(error){
        console.error(error)
        throw new Error ('Cabin could not be deleted')
    }
    return data
}