import theme from "../json/theme.json"
import styled from "styled-components"

export const ProjectsContainer= styled.section`
display: flex;
justify-content:center;
flex-wrap: wrap;
// overflow: row-wrap;
flex-flow: row-wrap;
padding: 2%;
justify-content: space-around;
background-color: ${theme.color8}

text-align: center;
margin: 10px;
// width: 25rem;
// flex-basis: center;

`

export const ProjectCard = styled.div`
box-sizing: border-box;
width: 20rem;
max-width: 100vw;
text-align: center;
margin: 10px;
border: 2px solid ${theme.color7};
background-color: ${theme.color8};
background-image: linear-gradient(-50deg  ,#7C9EB2,#799496 , #231123 );
    background-size:  400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    @keyframes gradient { 
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
padding: 6px;
height: 30rem;
border-radius: 12px; 
justify-content: center;
`

export const ProjectImage = styled.img`
width:38%;
min-width: 100%;
height:40%;
border-radius: 30px;
`
export const ProjectLink = styled.a`
width: 20%;
display: inline;
padding: 6px;
font-weight:800;
background-color: ${theme.color9};
color: ${theme.color7};
&:hover {
    background-color: ${theme.color7};
    color: ${theme.color9};
}
text-decoration: none;
text-align: center;
margin-bottom: 20px;
margin: 10px;
border-radius: 20px;
`