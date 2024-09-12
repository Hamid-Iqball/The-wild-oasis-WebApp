import CabinRow from "../../View/features/cabins/CabinRow";
import supabase, { supabaseUrl } from "./supabase";


export async function getCabins(){
    let { data, error } = await supabase.from('cabins').select('*')
    if(error){
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }
    return data;
}

// Create/Edit Cabin
export async function createEditCabin(newCabin , id){
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    // Upload Image https://vgsfnabpxjclsbxtblzd.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg
    console.log(newCabin , id)
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(/[^\w.-]/g, '_');
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
    
    // Create/Edit a cabin
    let query = supabase.from('cabins')

    // Create new Cabin
    if(!id){
        query = query.insert([{...newCabin, image:imagePath}])
    }
    // Edit existing Cabin
    if(id){
        query = query.update({...newCabin, image:imagePath}).eq('id', id)
    }
    
    const { data, error } = await query.select()
    if(error){
        console.error(error)
        throw new Error ('Cabin could not be Created')
    }

    //Image Upload
    const {  error:storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName,newCabin.image)
    // Delete the cabin if there was an error regarding uploading the corresponding image 
    if(storageError){
        await supabase
        .from('cabins')
        .delete()
        .eq('id', data.id)
        throw new Error ("Cabin image could not be uploaded and Cabin could not  be created")
    }
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