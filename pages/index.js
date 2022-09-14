import Head from "next/head"
import { getAllTitles } from "../utils/posts"
import BaseLayout from "./components/BaseLayout"
import Card from "./components/Card"
import Tag from "./components/Tag"


export default function Home({res}) {
  const AllPosts = res.map((postData, index) => {
    return(
      <Card 
        data={postData}
        key={index}
        />
    )
  })

  const AllTags = [
    ['#', 'Minh'], 
    ['#', 'CSS'], 
    ['#', 'React'], 
    ['#', 'JS'],
    ['#', 'HTML'],
    ['#', 'NextJS'],
    ['#', 'Art'],
    ['#', 'Food'],
    ['#', 'Minh'], 
    ['#', 'CSS'], 
    ['#', 'React'], 
    ['#', 'JS'],
    ['#', 'HTML'],
    ['#', 'NextJS'],
    ['#', 'Art']
  ].map((data, index) => {
    return (
      <Tag
        key={index}
        href={data[0]}
      >
        {data[1]}
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
              <h3 className={sectionStyles}>Coming soon!!</h3>
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
  const res = await getAllTitles()
  
  return {props: res}
}

