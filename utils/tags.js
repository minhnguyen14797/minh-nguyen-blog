import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getPostFilePaths, getAllTitles } from './posts'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

export async function getAllTags() {
    let res = [];
    const slugs = await getPostFilePaths()
    slugs.forEach((slug) => {
        const postFilePath = path.join(POSTS_PATH, `${slug.params.slug}.mdx`)
        const source = fs.readFileSync(postFilePath)
        const { data } = matter(source)
        const tags = data.tags.split(', ')
        tags.forEach((tag) => {
            if (!res.includes(tag.toLowerCase())) {
                res.push(tag.toLowerCase())
            }
        })
    })
    return res
}

export async function getTagLinks() {
    const tagList = await getAllTags()
    const res = tagList.map((tag) => ({tag, link: `/tags/${tag}`}))
    return res
}

export async function findTitlesByTag(tag) {
    let res = [];
    const titles = await getAllTitles()
    titles.forEach((title) => {
        if (title.tags.split(', ').includes(tag)) {
            res.push(title)
        }
    })
    return res
}