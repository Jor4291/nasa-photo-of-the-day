import React from 'react';
export default function TopContent(props) {


return (
    <>
     <p>{props.data.date} </p>
     <h2>{props.data.title}</h2>
    </>
)
}