import { readFile } from "fs/promises";
import Head from "next/head";

// getStaticProps runs only on the server so it can use full nodeJS functionality.
export async function getStaticProps() {
    // get the data from a file, or incomming json.
    const data = await readFile("content/posts/first-post.json", "utf8");
    // parse that data into Json.
    const post = JSON.parse(data);
    return {
        props: { post },
    }
}

export default function FirstPostPage({ post } :any) {
    console.log("[FirstPostPage] rendered: ", post);
    return (
      <>
      <Head>
        <title>{post.title}- Tims blog</title>
      </Head>
      <main className="general">
        <h1>Tims nextJS {post.title}</h1>
        <p>{post.body}</p>
      </main>
      </>
    );
  }
  