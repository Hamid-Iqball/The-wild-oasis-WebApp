import { useMutation, useQueryClient,} from "@tanstack/react-query";
import { login as loginApi} from "../../../Modal/Services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin (){
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {mutate:login, isLoading} = useMutation({

    mutationFn: ({email,password})=>loginApi({email,password}),

    onSuccess: (user) => {
      console.log('User', user)
      queryClient.setQueryData(["user"],user.user) // Manually seting data in react query cashe
      navigate('/dashboard',{replace:true}); // Redirect to dashboard
  },
  

  onError:(error)=>{
      console.log(error)
      toast.error('The provided email or password is incorrect')
  }
  })

  return {login, isLoading}
}