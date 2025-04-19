
import { BsMoon } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import useTheme from "../../ViewModal/Hooks/ThemeHooks/useTheme";
function ThemeButton (){
    const  {theme,toggleTheme} = useTheme()

    return <button onClick={toggleTheme}>
         {theme === "dark" ? <MdLightMode size={22} className="text-customOrange-300"/> : <BsMoon size={20} className="text-customOrange-800 dark:text-customOrange-400"/>}
    </button>
}

export default ThemeButton