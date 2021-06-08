import * as React from 'react';

import SEO from './SEO';

const Layout = ({children}) => {
  return (
    <>
    <SEO title="Default title" />
    <header>xd</header>
    {children}
    <footer>ekis de </footer>
    </>
  )
}

export default Layout;