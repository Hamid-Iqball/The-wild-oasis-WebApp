export const getTheme = async()=>{
    return localStorage.getItem("theme") || "light"
}

export const setTheme = async (newTheme) =>{
    localStorage.setItem("theme",newTheme)
    return newTheme
}