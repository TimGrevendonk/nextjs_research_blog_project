// link is used for client side navigation, the Link tag replaces the <a> tags.
import Link from 'next/link';
// import a component, always starting from the pages folder.
import NavBar from "../components/navbar";


// export default is that tis function will be the default function to load the page.
export default function HomePage() {
  console.log("[HomePage] rendered");
  return (
    // react needs single JSX root element to contain everything in.
    // the <> </> wrapper is called a "fragment" (special empty tag).
    <>
    <header>
      <NavBar />
    </header>
    <main>
      <h1>Tims nextJS blog</h1>
    </main>
    </>
  );
}
