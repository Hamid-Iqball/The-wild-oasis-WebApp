import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getTheme, setTheme } from "../../../Modal/Services/themeService,"

export const useTheme = ()=>{
    const queryClient  = useQueryClient()

    const {data:theme='light'} = useQuery({
    queryKey:['theme'],
    queryFn:getTheme,
    staleTime:Infinity
    })
    
    
    const {mutate:toggleTheme}  = useMutation({
        mutationFn:()=>setTheme(theme==="dark"?"light" :'dark'),
        onSuccess:(newTheme)=>{
            queryClient.setQueryData(["theme"],newTheme)

            document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
    })


    return {theme, toggleTheme}




}