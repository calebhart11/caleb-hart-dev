import styled from "styled-components";
import theme from "../json/theme.json"

export const BioContainer = styled.section`
text-align: center;
background-color: ${theme.color8};
color: ${theme.color7};
background-image: linear-gradient(-50deg  , #7C9EB2,#799496 , #231123 );
    background-size:  400% 400%;
    animation: gradient 15s ease infinite;
    height: 100%
    @keyframes gradient { 
        0%{background-position:10% 0%}
        50%{background-position:91% 100%}
        100%{background-position:10% 0%}
    }
width: 92%;
max-width:80vw;
margin: 0 auto;
border: 2px solid ${theme.color7};
border-radius: 20px;
display: flex;
flex-direction: column;
// flex-flow: wrap;
max-width: 100%;
// max-height: 50rem;
`
export const BioImg = styled.img`
  height: 250px;
  max-height: 80%;
  width: 22%;
  max-width:80%;
  border-radius: 80px;
  margin: 0 auto;
  margin-bottom: 20px;

`
