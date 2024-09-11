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


export async function createCabin(newCabin , id){
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/"," ");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    
    // Create/Edit a cabin
    let query = supabase.from('cabins')

    // Create Cabin
    if(!id){
            query.insert([{...newCabin, image:imagePath}]).select().single()
    }

    // Edit Cabin
    if(id){
        query.update({...newCabin, image:imagePath}).eq('id', id).select()
    }
    
    const { data, error } = await query.insert([{...newCabin, image:imagePath }]).select().single()


    if(error){
        console.error(error)
        throw new Error ('Cabin could not be Created')
    }

    //Image Upload
    const {  error:storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName,newCabin.image)
    // Delete the cabin if there was an error regarding uploading the corresponding image 114,402.56
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