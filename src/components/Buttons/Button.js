import React from 'react'
import './buttons.scss'

const Button = ({text, onClick, additionalClass}) => {
    return (
        <button className={`button ${additionalClass}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
