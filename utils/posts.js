import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from "rehype-highlight"

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export function getPostFilePaths() {
    const postFilePaths = fs
        .readdirSync(POSTS_PATH)
        // Only include md(x) files
        .filter((path) => /\.mdx?$/.test(path))

    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))
    return paths
}

export async function getPostBySlug(slug) {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(postFilePath)
    const { content, data } = matter(source)
    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
            remarkPlugins: [],
            
        },
        scope: data,
    })
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export async function getAllTitles() {
    let res = [];
    const slugs = await getPostFilePaths()
    slugs.forEach((slug) => {
        const postFilePath = path.join(POSTS_PATH, `${slug.params.slug}.mdx`)
        const source = fs.readFileSync(postFilePath)
        const { data } = matter(source)
        res.push({...data, link: `/posts/${slug.params.slug}`})
    })
    
    res.sort((a, b) => {
        return (new Date(b.date) - new Date(a.date)) 
    })
    return {res}
}

function sortByDate(arr) {
    const res = arr.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
    return res
}
