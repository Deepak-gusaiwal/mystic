import React,{useState} from 'react'
import {Link} from "gatsby"
import styled ,{css} from 'styled-components'
import { Button } from './GlobalStyle'
import { FaBars, FaWindowClose,FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [mobileNav,setMobileNav]=useState(false);

  const mobileNavFun=()=>{
setMobileNav(!mobileNav)
  }
  return (
   <Nav>
    <LogoBox>
      <a href='/'>Get Your Cricket ID</a>
    </LogoBox>

   <NavMenu showNav={mobileNav}>
   <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">services</Link>
    <Link to="/contact">contact</Link>
    <Button whatsaap as="a" href="/about">Whatsapp Us <FaWhatsapp/></Button>
   </NavMenu>
   <NavToggler onClick={mobileNavFun}>
    {mobileNav ?   <FaWindowClose />:<FaBars/> }
   </NavToggler>
   </Nav>
  )
}
const Nav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem max(4vw,1rem);
  color:${({theme})=>theme.color.white};
  position: sticky;
  top:0;
  z-index: 99;
`
const LogoBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 150px;
text-align: center;
a{
  font-size: max(2vw,1rem);
font-weight: bold;
}
`
const  NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  

  a:not(:last-child){
    color: white;
    transition: 200ms;
  }
  a:hover:not(:last-child){
    color:${({theme})=>theme.color.primaryColor}
  
  }
  @media(max-width:768px){
    position: absolute;
    flex-direction: column;
    padding: 1rem;
    min-width: 250px;
    height: 99vh;
    z-index: 999;
    justify-content: flex-start;
    align-items: flex-start;
    top: 100%;
    right: 0;
    transition: 200ms ease-in-out;
    transform: translateX(100%) scaleX(0);
    transform-origin: right;
    background-color: ${({theme})=>theme.color.secondaryColor};
    a{
      border-bottom: 2px solid white;
      width: 100%;
      padding-bottom: 0.5rem;
    }
    ${({showNav})=>showNav && css`
      transform: translateX(0%) scaleX(1);
    `}
  }
`
const NavToggler = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({theme})=>theme.color.secondaryColor};
  border: 2px solid white;
  flex-direction: column;
  gap:0.5rem;
  justify-content: center;
  align-items: center;
  display: none;
 svg{
  font-size: 1.5rem;
 }
 @media (max-width:768px){
  display: flex;
 }
`
export default Navbar