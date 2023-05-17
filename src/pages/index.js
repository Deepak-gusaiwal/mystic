import * as React from "react"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
  return (
    <>
      <HeroSection/>
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
