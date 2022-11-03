import { useState } from "react";
import DarkTheme from "./darktheme";

function loadDarkMode(){
    // Check if the code is running on the server (localstorage not available on server) then return default false.
    if (typeof localStorage === "undefined") {
        return false;
    }
    // This code will run in the browser, where localstorage is available.
    const value = localStorage.getItem('darkMode');
    // JSON.parse will convert the string to a boolean value.
    return (value === null) ? false : JSON.parse(value);
}

export default function ThemeSwitch() {
    // usestate hook (react) wil return an array:
    // darkmode variable is first value, second value is function called to change the state. 
    const [darkMode, setDarkMode] = useState(loadDarkMode);

    const handleClick = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    }

    console.log("[themeswitch] darkmode: ", darkMode);
    const text = darkMode ? "light mode" : "Dark mode";

    return (
    <>
        {/* onClick wil change bool value of darkmode. 
        Server and client may have different settings of "darkMode" (which is normal here) so errors must be suppresed. */}
        <button className="themeswitch" onClick={handleClick} suppressHydrationWarning>
            {text}
        </button>
        {/* if darkmode is true load in the style component. */}
        {darkMode && (<DarkTheme />)}
    </>
    );
}