import Footer from './Footer'
import Navbar from './Navbar'

export default function BaseLayout({children}) {

  const baseDMS = 'dark:bg-darkBG dark:text-light transition duration-200 ease-in-out'
  const baseFlexStyles = `flex flex-col bg-beige text-dark h-100 ${baseDMS}`

  return (
    <div className={baseFlexStyles}>
        <header className="">
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
