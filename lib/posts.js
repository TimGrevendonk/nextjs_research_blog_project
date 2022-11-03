// Lib contain any code that is not specific to pages or visual components.

import { readdir, readFile } from "fs/promises";
import { marked } from 'marked';

export async function getPosts() {
    const paths = await getPaths();
    const posts = [];
    for (const path of paths){
        const post = await getPost(path);
        posts.push({ path, ...post });
    }
    return posts;
};

export async function getPost(path) {
    // get the data from a file, or incomming json.
    const source = await readFile(`content/posts/${path}.json`, "utf8");
    // const html = marked(source);

    // parse that data into Json.
    return JSON.parse(source);
};

// Get all paths ending with .json from the content folder.
export async function getPaths() {
    // Define the used suffix.
    const suffix = ".json"
    const files = await readdir("content/posts");
    // Filter only the .json files and slice the suffix off.
    return files.filter((file) => file.endsWith(suffix))
        .map((file) => file.slice(0, -suffix.length));
};