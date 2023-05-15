import * as React from "react"
import Layout from "./components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Home page Content</h2>
      <p>this is Home Page</p>
      <nav>
        <Link to="/about">About Page</Link>
      </nav>
<div className="imgBox">
      <StaticImage src="../images/icon.png" alt="gatsby icon png"/>
</div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Gatsby Project</title>
      <meta name="description" content="Gatsby Project Description"></meta>
      <meta name="keywords" content="Gatsby Project Kewywords"></meta>
    </>
  )
}
