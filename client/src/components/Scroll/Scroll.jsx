import React from 'react'
import { Link } from 'react-scroll'

export default function Scroll(props) {

    let fx = props.fx

    if (!fx) fx = () => {}

    return (
        <Link
        
            to={props.to}
            spy={props.spy}
            smooth={props.smooth}
            offset={props.offset}
            duration={props.duration}
            onClick={() => { fx() }}
        >
            {props.text}
        </Link>
    )
}
