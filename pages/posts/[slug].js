import ArticleLayout from '../components/ArticleLayout'
import { MDXRemote } from 'next-mdx-remote'
import CodeFrame from '../components/CodeFrame'
import DisplayCode from '../components/DisplayCode'
import BlockQuote from '../components/BlockQuote'
import { getPostFilePaths, getPostBySlug } from '../../utils/posts'
import Heading, { Introduction } from '../components/MarkdownComponents'


export default function PostPage({ source, frontMatter }) {

  const components = { CodeFrame, DisplayCode, BlockQuote, Heading, Introduction }

  return (
    <ArticleLayout frontMatter={frontMatter}>
        <MDXRemote {...source} components={components} />
    </ArticleLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await getPostBySlug(params.slug)
//  res = {
//      props: {
//          source: mdxSource,
//          frontMatter: data,
//      }
//  }
  return res
}

export const getStaticPaths = async () => {
  const paths = await getPostFilePaths()
  return {
    paths,
    fallback: false,
  }
}