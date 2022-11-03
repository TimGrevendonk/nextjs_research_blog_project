// Used to change the head of the document.
import Head from "next/head"
import Link from "next/link";
import { getPosts } from "../lib/posts";

// getStaticProps runs only on the server so it can use full nodeJS functionality.
export async function getStaticProps() {
  console.log("[getstaticProps] render");
  // Call the function and await the promise to be returned.
  const posts = await getPosts();

  return {
      props: { posts },
  }
}

// export default is that tis function will be the default function to load the page.
export default function HomePage({ posts }) {
  console.log("[HomePage] rendered: ", posts);
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
      <ul>
        {/* map the posts array and extract each posts (like a foreach) */}
        {posts.map((post) => (
        /* every item in an array must have a Key (the path should be unique here) */
        <li key={post.path}>
          <Link href={`/posts/${post.path}`}>{post.title}</Link>
        </li>
        ))}
      </ul>
    </main>
    </>
  );
}
