import React from 'react';
import styled from 'styled-components';


export default function BottomContent(props) {

const StyledExp = styled.p`
display: flex;
    text-align:center;
    justify-contents: center;
    font-family: Georgia, serif;
font-size: 16px;
letter-spacing: 2px;
word-spacing: 2px;
line-spacing: 8px;
color: #2E2E2E;
font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: capitalize;
background-color: #C7C7C7;
padding-left: 200px;
padding-right: 200px;
padding-top: 100px;
padding-bottom: 100px;
`


const StyledCR = styled.h2`
display: flex;
    justify-content: center;
    bottom-margin:20px;
    top-margin: 20px;
    font-style: italic;
   

`


return (
    <>
     <StyledExp>{props.data.explanation} </StyledExp>
     <StyledCR>{props.data.copyright}</StyledCR>
    </>
)
};