import styled from "styled-components";
import theme from "../json/theme.json"

export const FormContainer = styled.section`
text-align: center;
background-color: ${theme.color8};
width: 55%;
    // padding: 10px;
margin:  0 auto;
margin-bottom: 40px;
border-radius: 20px;
display: flex;
flex-flow: row-wrap;
flex-wrap: wrap;
max-width: 100%;
justify-content: center;
background-image: linear-gradient(-50deg  , #7C9EB2,#799496 , #231123 );
    background-size:  400% 400%;
    animation: gradient 15s ease infinite;
    height: 100%;
    @keyframes gradient { 
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
border: 2px solid ${theme.color7};
// max-height: 50rem;
`   

export const FormSend = styled.a`
// width: 20%;
// display: inline;
padding: 6px;
font-weight:800;
background-color: ${theme.color6};
color: ${theme.color7};
&:hover {
    background-color: ${theme.color7};
    color: ${theme.color6};
}
// text-decoration: none;
// text-align: center;
// margin-bottom: 20px;
// margin: 10px;
// border-radius: 20px;
`