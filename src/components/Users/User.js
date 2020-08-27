import React from 'react'
import './users.scss'

 const User = ({name,position,phone,email}) => {
    return (
        <div className="user">
            <div className="user__name">{name}</div>
            <div>{position}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
    )
}

export default User