import React from 'react'

export default function textContent(props) {
    


return (
    <>
    <p> {props.data.title}</p>
    <p>{props.data.date} </p>
    <p>{props.data.explanation} </p>
    <p>{props.data.copyright}</p>
    </>
)
}

// -- object element names --
// title
// date
// explanation
// copyright





