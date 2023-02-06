import Navbar from './navbar'
import Footer from './footer'
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