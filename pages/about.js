import Head from "next/head";

// export default is that tis function will be the default function to load the page.
export default function AboutPage() {
    console.log("[AboutPage] rendered");
    return (
      <>
    <Head>
      <title>About - Tims blog</title>
      <meta name="description" content="this is my test project in nextJS"></meta>
    </Head>
        <main className="general">
            <h1>about</h1>
        </main>
      </>
    );
  }
  