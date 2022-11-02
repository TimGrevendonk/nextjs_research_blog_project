// Used to change the head of the document.
import Head from "next/head"

// export default is that tis function will be the default function to load the page.
export default function HomePage() {
  console.log("[HomePage] rendered");
  return (
    // react needs single JSX root element to contain everything in.
    // the <> </> wrapper is called a "fragment" (special empty tag).
    <>
    <Head>
      <title>Home - Tims blog</title>
      <meta name="description" content="this is my test project in nextJS"></meta>
    </Head>
    <main>
      <h1>Tims nextJS blog</h1>
    </main>
    </>
  );
}
