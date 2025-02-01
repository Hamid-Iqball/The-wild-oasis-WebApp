import { useTheme } from "../../ViewModal/Hooks/ThemeHooks/useTheme"
import { BsMoon } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
function ThemeButton (){
    const  {theme,toggleTheme} = useTheme()

    return <button onClick={toggleTheme}>
         {theme === "dark" ? <MdLightMode size={22}/> : <BsMoon size={20}/>}
    </button>
}

export default ThemeButton