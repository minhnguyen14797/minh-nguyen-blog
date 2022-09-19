import BaseLayout from "../../components/BaseLayout"
import Card from "../../components/Card"
import Head from "next/head"
import { getAllTags, findTitlesByTag } from "../../utils/tags"
import Link from "next/link"

export default function TagPage({res, slug}) {

  const AllPosts = res.map((postData, index) => {
    return(
      <Card 
        data={postData}
        key={index}
        />
    )
  })

  return (
    <BaseLayout>
        <Head>
            <title>{slug.toUpperCase()}</title>
        </Head>

        <div className="lg:py-24 md:py-24 sm:py-12 py-12">
            

            <div className="max-w-[1000px] mx-auto px-5 flex">
            
              <div className="w-full xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-full xs:w-full pr-5">
                <h3 className="font-bold text-primary text-base uppercase">
                    Tag:
                    <span className="ml-1 px-2 rounded-xl  text-beige bg-primary">
                      {slug}
                    </span>
                </h3>
                {AllPosts}
              </div>
              
              

            </div>
        </div>
        
        
    </BaseLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const res = await findTitlesByTag(slug)
  return  {
    props: {
      res,
      slug
    }
  }
}


export const getStaticPaths = async () => {
  const tagList = await getAllTags()
  
  const paths = tagList.map((slug) => ({params: { slug }}))
  return {
    paths,
    fallback: false,
  }
}