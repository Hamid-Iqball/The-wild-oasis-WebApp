import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../Modal/Services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp (){
 const {mutate:signUp, isLoading ,error} =   useMutation({
    mutationFn:signUpApi,
    onSuccess:(user)=>{
        console.log(user)
        toast.success('Account successfully created! please verify the new account from the user\'s email address')
    },
    
    onError:(error)=>{
        console.log(error)
    }
 })

 if (error) throw new Error(error.message)
 return {signUp, isLoading}
}