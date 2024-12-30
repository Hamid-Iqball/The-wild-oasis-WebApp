import supabase, { supabaseUrl } from "./supabase";

//Here in this funciton we are sending form data of signUp form to the backend to create a user.
export async function signUp({fullName,email,password}){
const {data,error}= await supabase.auth.signUp({
  email,
  password,
  options:{
    data:{
      fullName,
      avatar:''
    }
  }
})


if (error){
  throw new Error(error.message)
}

return data
}


export async function login ({email,password}){

let { data, error } = await supabase.auth.signInWithPassword({email,password})
  if (error){
    throw new Error(error.message)
  }
  console.log(data)
  return data;
}

//Why we need a function from supabase to load the user again, The thing is the user might want to access this page a bit later, In the web Application if you a logged in a day ago and then reload the page you will have to be logged in. So here we will check if that user exists in our supabase then we will fetch that user.

export async function getCurrentUser (){
    //This will get the data from the local storage
    const {data:session} = await supabase.auth.getSession()
    if(!session.session) return null;
    
    const {data , error} = await supabase.auth.getUser()
    
    if (error){
        throw new Error(error.message)
      }
    
      return data?.user;
}


// userLogout function 
export async function logout(){
 const {error} =  await supabase.auth.signOut()
 if(error) throw new Error(error.message)
}

export async function updateCurrentUser({password,fullName,avatar}){

//1. Update the password or the fullName (Cannot do it the same time because both are located in different forms)
let updateData;

if(password) updateData = {password};
if(fullName) updateData = {data:{fullName}}
const {data,error} = await supabase.auth.updateUser(updateData)
if(error) throw new Error(error.message)

if(!avatar) return data;

//2. Upload the avatar image
const fileName = `avatars-${data.user.id}-${Math.random()}`
const {error:storageError} = await supabase.storage.from('avatars').upload(fileName,avatar)
if(storageError) throw new Error(storageError.message)


//3. Update the avatar image. 
const {data:updateUser,error:error2} = await supabase.auth.updateUser({
  data:{
    avatar:`${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
  }
})


if(error2){
  throw new Error(error2.message);
}

return updateUser

}
