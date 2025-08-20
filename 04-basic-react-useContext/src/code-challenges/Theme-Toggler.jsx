import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


function Toolbar(){ //children
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <>
        <div style={{background: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff", padding: 10 }}></div>
        <h3>Theme is: {theme}</h3>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}


export {ThemeProvider, Toolbar};
