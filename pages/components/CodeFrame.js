import { useState, useRef } from "react"
import fadeInStyles from '../../styles/FadeInAnimation.module.css'

const MAINCOLOR = 'bg-darkBeige'
const BARCOLOR = 'bg-stone-300'

export default function CodeFrame({children, titles}) {
  // Separate titles like this:
  // titles = "file1.js, file2.html" 

  const [copyState, setCopyState] = useState(false)
  const [currentCode, setCurrentCode] = useState(0)
  const codeRef = useRef()
  const multiCodes = (children.constructor === Array)
  const eachTitles = titles ? titles.split(', ') : undefined
  const handleSwitchLanguage = (index) => {
    setCurrentCode(index)
  }

  const langStyles = `w-fit px-2 py-1 items-center rounded-t-md`

  const handleClick = () => {
    navigator.clipboard.writeText(codeRef.current.innerText)
    if (copyState == false) {
      setCopyState(true)
      setTimeout(() => {
        setCopyState(false)
      }, 2000)
    }
  }

  let DisplayLanguages;
  if (multiCodes) {
    DisplayLanguages = () => {
      return ( 
          children.map((each, index) => {
          
          const eachLanguage = eachTitles ? eachTitles[index] : each.props.children.props.className.split("-")[1]
          let activeStyles;
          if (currentCode == index) {
            activeStyles = `${MAINCOLOR}`
          } else {
            activeStyles = `text-gray-600/50 hover:text-gray-700/75`
          }
          
          return (
            <button 
              onClick={() => handleSwitchLanguage(index)} 
              className={`${langStyles} ${activeStyles} `}
              key={index}>
              {eachLanguage}
            </button>
                
          )
        })
      )
  }

  } else {
      DisplayLanguages = () => {
        const lang = eachTitles ? eachTitles : children.props.children.props.className.split("-")[1]
        return (
          <div className={`${MAINCOLOR} ${langStyles}`}>
            {lang}
          </div>
        )
      }
    }

  const DisplayChildren = () => {
    return (
      <div ref={codeRef} className={`${MAINCOLOR} text-sm rounded-b-md`}>
        {multiCodes ? children[currentCode] : children}
        
      </div>
    )
  }

  const CopyButton = () => {
    return (
      <button 
        className={`bg-none absolute bottom-2 right-2 z-10 w-fit px-2 py-1 transition duration-100 ease-in-out select-none`}
        onClick={() => handleClick()}
      >
        {
          copyState ? 
          <div className={`w-6 text-md text-green-600/75 ${fadeInStyles.fadeInAnimation} transition duration-200 ease-in-out`}>
            ✓
          </div> : 
          <img className={`opacity-50 w-6 px-0.5 hover:opacity-80 ${fadeInStyles.zoomInAnimation}`} src="/copy-icon.svg" />
        }
      </button>
    )
  }

  return (
    <div className="flex justify-center my-2">
      <div className={`${BARCOLOR} pt-2 rounded-md flex-col flex w-full`}>
        <div className="flex flex-row justify-between h-fit">
          <div className="ml-2">
            <DisplayLanguages />
          </div>
          
        </div>
        <div className="relative">
          <DisplayChildren />
          {CopyButton()}
        </div>
        
      </div>
    </div>
  )
  
}
