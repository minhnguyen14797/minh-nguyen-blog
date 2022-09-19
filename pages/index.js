import Head from "next/head"
import { getAllTitles } from "../utils/posts"
import BaseLayout from "../components/BaseLayout"
import Card from "../components/Card"
import Tag from "../components/Tag"
import { getTagLinks } from "../utils/tags"


export default function Home({ allTitles, allTagLinks }) {
  const AllPosts = allTitles.map((postData, index) => {
    return(
      <Card 
        data={postData}
        key={index}
        />
    )
  })

  const AllTags = allTagLinks.map((data, index) => {
    return (
      <Tag
        key={index}
        href={data.link}
      >
        {data.tag.toUpperCase()}
      </Tag>
    )
  })

  const mainStyles = 'lg:py-24 md:py-24 sm:py-12 py-12'
  const sectionStyles = "text-primary font-bold uppercase text-base"

  return (
    <BaseLayout>
      <Head>
        <title>Minh Nguyen</title>
      </Head>
      <div className={mainStyles}>
          
          <div className="max-w-[1000px] mx-auto px-5 flex">
            
            <div className="w-full xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-full xs:w-full pr-5">
              <h3 className={sectionStyles}>Lastest blogs</h3>
              {AllPosts}
            </div>

            <div className="w-[40%] pl-5 hidden flex-col xl:flex lg:flex md:flex sm:hidden xs:hidden">
              <h3 className={sectionStyles}>Tags</h3>
              <div className="flex flex-wrap">
                {AllTags}
              </div>
              
            </div>

          </div>
          
          
      </div>
    </BaseLayout>
  )
}



export const getStaticProps = async () => {
  const allTitles = await getAllTitles()
  const allTagLinks = await getTagLinks()
  
  return {
    props: {
        allTitles, 
        allTagLinks
      }
  }
}

