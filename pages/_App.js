import Head from "next/head";
// import a component, always starting from the pages folder.
import NavBar from "../components/navbar";
import "../styles/styles.scss";

// Can template basic layout for pages.
export default function App({ Component, pageProps }) {
    console.log("[App] rendered");
    return(
        <>
        <Head>
            {/* specifically mention from where the favicon should be loaded from relative from the public folder. */}
            <link rel="icon" href="/icons/favicon.ico" />
        </Head>
        <header>
            <NavBar /> 
        </header>
        {/* ... is a "object spread operator" which unpacks own enumerable object-properties of an object (like items form an array).  */}
        <Component {...pageProps}></Component>
        </>
    );
}