import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <h2>Home page Content</h2>
      <p>this is Home Page</p>
      <div className="imgBox">
        <StaticImage src="../images/icon.png" alt="gatsby icon png" />
      </div>
    </>
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
