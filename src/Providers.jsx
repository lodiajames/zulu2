
import React from 'react'


import { ThemeProvider } from 'next-themes'
export default function Providers({children}) {
  return (
   <ThemeProvider enableSystem={true} attribute="class" themes={['pink']}>

     {children}
      
   </ThemeProvider>
  )
}
