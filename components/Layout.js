import Navbar from './Navbar'
import Footer from './Footer'
import SearchBox from './SearchBox'
import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <> 
<ThemeProvider>
      <Navbar />
      <SearchBox/>
      <main >{children}</main>
      <Footer />
      </ThemeProvider>
    </>
  )
}