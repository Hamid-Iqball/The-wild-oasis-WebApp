import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logOutApi } from "../../../Modal/Services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout(){
const navigate = useNavigate()
const queryClient = useQueryClient()
    const {mutate:logOut , isLoading:isLoginOut} = useMutation({
        mutationFn:logOutApi,
        onSuccess:()=>{
            queryClient.removeQueries()
            navigate('/login' ,{replace:true})
        }
    })

    return {logOut , isLoginOut}
}