import React, { Fragment } from 'react'
import HeaderNav from './HeaderNav'
import Footer from './Footer'

import './Layout.css'

const Layout = ({ children }) => {
  return (
    <Fragment>
        <HeaderNav />          
        <main className='main'>
            {children}
        </main>
        <Footer />
    </Fragment>

  )
}

export default Layout
