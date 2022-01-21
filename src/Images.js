import styled from 'styled-components';
import React from 'react'

const StyledImages = styled.image`

display: flex;
  /* height: 250px; */
  align-items: center;
  justify-content: center;
  border: 2px red solid;
`
export default function Images(props) {
    



    return (
    <StyledImages>
        <img src = {props.data.url} alt = "Nasa daily space" />     
    </StyledImages>
    )
};