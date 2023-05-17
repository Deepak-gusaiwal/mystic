import styled, { createGlobalStyle, css } from "styled-components";

export const theme = {
    color: {
        bg: 'red',
        bodyBg: '#f8fdff',
        whatsappLight: '	#25D366',
        whatsappDark: '	#075E54',

        white: '#ebeeff',
        text: "#060e19",
        background: "",
        primaryColor: "#ffb988",
        secondaryColor: "#ff9f6a",
        grayColor: "#787878",
        primaryGradiant: `linear-gradient( to bottom, rgb(255,159,106,0.8) 10%, rgba(255,255,255,0.9) 100%);`
    },
};

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    color: inherit;
    text-decoration: none;
    body{
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
}
body{
    background: black;
}
a{
    color: inherit;
    text-decoration: none;
}
ul{
    list-style-type: none;
    margin: 0;
}
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
}
`
export const Button = styled.button`
padding: 0.5rem 1rem;
display: flex;
gap: 0.5rem;
justify-content: center;
align-items: center;
border: none;
font-weight: bold;
text-transform: capitalize;
position: relative;
isolation: isolate;
background-color: transparent;
max-width: fit-content;
font-size: max(1.3vw,1rem);
text-transform:uppercase;
${({ whatsaap }) => whatsaap && css`
    color: black;
  `}

::before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    background-color: ${({ theme }) => theme.color.primaryColor};
    width: 100%;
    height: 100%;
    transform: skew(-15deg);
    z-index: -1;
    border: 2px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: 0% .6rem;
    transition: 200ms ease-in-out;
    ${({ whatsaap }) => whatsaap && css`
  background-color:${({ theme }) => theme.color.whatsappLight};
  `}
}
:hover{
    color: black;
    ${({ whatsaap }) => whatsaap && css`
    color: white;
  `}
  }

  :hover::before{
    background-color: ${({ theme }) => theme.color.secondaryColor};
    border: 2px solid white;
    transform: skew(15deg);
${({ whatsaap }) => whatsaap && css`
background-color:${({ theme }) => theme.color.whatsappDark};
`}
    
  }


`
