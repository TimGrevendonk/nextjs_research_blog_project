import type { AppProps } from "next/app";
import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            post: {
                title: "first post",
                body: "my first post, as static props",
            }
        }
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
  