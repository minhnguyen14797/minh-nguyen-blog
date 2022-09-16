import Head from 'next/head'
import BaseLayout from './BaseLayout'
import formattedDate from '../utils/dateFormat'
import { useRef, useEffect, useState } from 'react'
import { tocParse } from '../utils/tocParse'




export default function ArticleLayout({frontMatter, children}) {
  // 
  const mainStyles = 'flex flex-col py-12 lg:py-24 md:py-24 sm:py-12 col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3  '
  const authorStyles = 'text-muted'
  const titleStyles = 'font-bold mb-4 tracking-wide'
  const frontMatterStyles = 'pb-6 text-start'

  const markdownRef = useRef()
  const tableOfContentRef = useRef()
  const [content, setContent] = useState()
  const [dataList, setDataList] = useState([])

  

  useEffect(() => {
    let tocLinks = tableOfContentRef.current.querySelectorAll('#toc')
    if (content & content != []) {
      tableOfContentRef.current.querySelector('[name="introduction"]').classList.add('tocActive')
    }
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const entryName = entry.target.name
            
            tocLinks = tableOfContentRef.current.querySelectorAll('#toc')
            tocLinks.forEach((link) => {
              link.classList.remove('tocActive')
            })
            
            const activeLink = tableOfContentRef.current.querySelector(`[name="${entryName}"]`)
            activeLink & activeLink.classList.add('tocActive')
            
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    dataList.forEach((a) => {
      observer.observe(a)
    })
    
  }, [dataList, content])

  useEffect(() => {
    const tocData = markdownRef.current.querySelectorAll('.markdownFormat>h1, .markdownFormat>h2, .markdownFormat>h3, .markdownFormat>h4')
    setDataList(markdownRef.current.querySelectorAll('.markdownFormat>h1>a, .markdownFormat>h2>a, .markdownFormat>h3>a, .markdownFormat>h4>a'))
    const parsedTocData = tocParse(tocData)
 
    setContent(parsedTocData.map((data, index) => {
      let indentStyling = ''
      if (data.tag == "h2") {
        indentStyling = 'pl-5'
      } else if (data.tag == "h3") {
        indentStyling = 'pl-10'
      }
      return (
          <a 
            key={index}
            href={`#${data.link}`}
            name={`${data.link}`}
            id='toc'
            className={`hover:text-primary transition duration-100 ease-in-out ${indentStyling}`}
          >
            {data.title}
          </a>
        )
      })
    )
    
  }, [])
  
  const TableOfContents = () => {
      return (
        <div className="pl-20 mt-24 lg:block md:hidden sm:hidden hidden">
            <div className='sticky top-[10%]'>
                <div className='h-fit'>
                    <h1 className='text-[19px] text-start font-bold'>TABLE OF CONTENTS</h1>
                    <div className='flex flex-col text-sm mt-5 leading-7' ref={tableOfContentRef}>
                      {content ? content : ""}
                    </div>
                      
                </div>
            </div>
        </div>
      )
  }
  
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <BaseLayout>
      <div className='flex flex-row justify-center'>

      
        <div className='grid grid-cols-3 max-w-[1200px] xl:px-12 lg:px-12 md:px-12 sm:px-4 px-4'>
          <div className={mainStyles}>
            <div className={frontMatterStyles}>
              <h1 className={titleStyles}>{frontMatter.title}</h1>
              <span className={authorStyles}>
                Last Updated - {formattedDate(frontMatter.date)}
              </span>
            </div>
      
            <div className='markdownFormat' ref={markdownRef}>
              {children}
            </div>
          </div>
          <TableOfContents />
        </div>
      </div>
        

      </BaseLayout>
      
        
        
      
      

    </>
    
  )
}
