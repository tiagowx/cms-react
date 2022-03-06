import { ThemeProvider } from '@emotion/react'
import { style } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

import theme from '@/assets/theme'

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
