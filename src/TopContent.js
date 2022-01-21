import React from 'react';
import styled from 'styled-components';

const StyledTop = styled.h2`

display: flex;
    justify-content: center;
    align-item: center;
    font-family: Georgia, serif;
font-size: 16px;
letter-spacing: 2px;
word-spacing: 2px;
color: #2E2E2E;
font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: capitalize;
    `





export default function TopContent(props) {


return (
    <>
     <p>{props.data.date} </p>
     <StyledTop>{props.data.title}</StyledTop>
    </>
)
}