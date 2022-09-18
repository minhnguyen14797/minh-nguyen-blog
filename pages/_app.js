import '../styles/globals.css'
import '../styles/highlight.css'
import { ThemeProvider } from '../providers/ThemeProvider'


function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default MyApp