import React, { ReactNode } from 'react'
import ContactWidget from './components/ContactWidget/ContactWidget'

// Components 
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({children}: DefaultLayoutProps) {

  return (
    <>
      <Navbar />
      <ContactWidget />
        {children}
      <Footer />
    </>
  )
}
