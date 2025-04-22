export const getTheme = async()=>{
    return localStorage.getItem("theme") || "dark"
}

export const setTheme = async (newTheme) =>{
    localStorage.setItem("theme",newTheme)
    return newTheme
} 