import NavBar from "../components/navbar";

// export default is that tis function will be the default function to load the page.
export default function AboutPage() {
    console.log("[AboutPage] rendered");
    return (
      <>
      <header>
        <NavBar /> 
      </header>
        <main>
            <h1>about</h1>
        </main>
      </>
    );
  }
  