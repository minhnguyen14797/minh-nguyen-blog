import Footer from './Footer'
import Navbar from './Navbar'

export default function BaseLayout({children}) {

    const baseFlexStyles = 'flex flex-col bg-beige h-100'

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
