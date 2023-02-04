import Navbar from './navbar'
import Footer from './footer'
import { ThemeProvider } from 'next-themes'

export default function Layout({ children }) {
  return (
    <> 
<ThemeProvider>
      <Navbar />
      <main >{children}</main>
      <Footer />
      </ThemeProvider>
    </>
  )
}