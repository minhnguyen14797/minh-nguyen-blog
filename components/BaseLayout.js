import Footer from './Footer'
import Navbar from './Navbar'


export default function BaseLayout({children}) {

  const baseDMS = 'dark:bg-darkBG dark:text-light transition duration-200 ease-in-out'
  const baseFlexStyles = `flex flex-col bg-beige text-dark h-100 ${baseDMS}`
  
  

  return (
    <div className={baseFlexStyles}>
        <header className="sticky top-0 backdrop-blur-[15px] z-[1000]">
          <Navbar />
        </header>

        <div className='min-h-screen'>
            {children}
        </div>
        

        <footer>
          <Footer />
        </footer>
    </div>
  )
}
