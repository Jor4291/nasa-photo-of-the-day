
import React from 'react'


export default function Images(props) {
    

console.log(props.data.date)

    return (
    <div>
        
        <img src = {props.data.url} alt = "Nasa daily space" />     
    </div>
    )
};