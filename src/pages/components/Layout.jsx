import React from 'react'
import { Link } from 'gatsby'
import "../styles/layout.css"
import {container} from './layout.module.css'

const Layout = ({pageTitle,children}) => {
  return (
    <>
<nav>
    <Link to="/">Home Layout</Link>
    <Link to="/about">About Layout</Link>
</nav>
<div className={container}>
<h2>{pageTitle}</h2> 

</div>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout