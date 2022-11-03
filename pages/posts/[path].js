import Head from "next/head";
import { getPaths, getPost } from "../../lib/posts";

export async function getStaticPaths() {
  // Get all possible paths to posts.
  const paths = await getPaths();
  return {
    // Map all paths Strings into Objects.
    paths: paths.map((path) => ({
      // the path String becomes the { params: { path }} Object.
      params: { path },
    })),
    fallback: false,
  }
}

// getStaticProps runs only on the server so it can use full nodeJS functionality.
export async function getStaticProps({params: { path }}) {
  console.log("[getstaticProps] render: ", path);
  // Call the function and await the promise to be returned.
  const post = await getPost(path);
  return {
      props: { post },
  }
}

export default function PostPage({ post }) {
    console.log("[PostPage] rendered: ", post);
    return (
      <>
      <Head>
        <title>{post.title}- Tims blog</title>
      </Head>
      <main>
        <h1>Tims nextJS {post.title}</h1>
        <article>{post.body}</article>
        <p>{post.extra}</p>
      </main>
      </>
    );
  }
  