// Needed for typescript.
import type {AppProps} from "next/app"
// import a component, always starting from the pages folder.
import NavBar from "../components/navbar";

// Can template basic layout for pages.
export default function App({ Component, pageProps }:AppProps) {
    console.log("[App] rendered");
    return(
        <>
        <header>
          <NavBar /> 
        </header>
        {/* ... is a "object spread operator" which unpacks own enumerable object-properties of an object (like items form an array).  */}
        <Component {...pageProps}></Component>
        </>
    );
}