import React from 'react'
import './alert.css'

export default function Alert(props) {
    

    return (
        <div className={`${props.class} hidden alert`}>
            <p>{props.text}</p>
        </div>
    )
}
