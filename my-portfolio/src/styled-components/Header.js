import theme from "../json/theme.json"
import styled from "styled-components"

export const HeaderContainer = styled.header`
justify-content: center;
padding: 6px 0 30px 0;
max-width: 100%;
text-align: center;
background-color: ${theme.color4};
color: ${theme.color1}
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
max-width: 100%;
`

export const NavLinkWrapper = styled.a`
text-decoration: none;
color:${theme.color9};
&:hover{
    color:${theme.color7};
    font-weight: 800;
}
`
