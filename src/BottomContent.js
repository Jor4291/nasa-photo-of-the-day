import React from 'react';
export default function BottomContent(props) {


return (
    <>
     <p>{props.data.explanation} </p>
     <h2>{props.data.copyright}</h2>
    </>
)
};