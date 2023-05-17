import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (

<FooterWrapper>
<footer>
<TopFooter>
<div className="footerLogo">
  <h2>Get Your Cricket ID</h2>
</div>

</TopFooter>
</footer>
</FooterWrapper>
  )
}
const FooterWrapper = styled.footer`
background-color: black;
color:white;
padding: 1rem;

footer{
  max-width: 1200px;
  margin-inline: auto;
}
`
const TopFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
`

export default Footer