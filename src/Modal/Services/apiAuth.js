import supabase from "./supabase";

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

//Why we need a function from supabase to load the user again, The thing is the user might want to access this page a bit later, In the web Application if you a logged in a day ago and then reload the page you will have to be logged in. So here we will check if that user exists in our supabase then we will fetch that user .
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

