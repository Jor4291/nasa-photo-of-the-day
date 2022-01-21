import React from 'react';
import styled from 'styled-components';







export default function TopContent(props) {


return (
    <>
     <p>{props.data.date} </p>
     <h2>{props.data.title}</h2>
    </>
)
}