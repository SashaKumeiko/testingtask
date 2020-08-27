import React from 'react'
import './buttons.scss'

const FlatButton = ({text}) => {
    return (
        <button className='flatButton'>
            {text}
        </button>
    )
}

export default FlatButton
