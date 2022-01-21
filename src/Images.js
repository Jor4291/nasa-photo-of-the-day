import styled from 'styled-components';
import React from 'react'

const StyledImages = styled.div`

margin-top: 20px;
margin-bottom: 10px;
margin-left: 200px;
margin-right:200px;

display: flex;
  align-items: center;
  justify-content: center;
  
`
export default function Images(props) {
    



    return (
    <StyledImages>
        <img src = {props.data.url} alt = "Nasa daily space" />     
    </StyledImages>
    )
};