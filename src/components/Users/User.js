import React from 'react'
import './users.scss'

 const User = ({name,position,phone,email,photo}) => {
    return (
        <div className="user">
            <div className="user__photoContainer">
            <img src={photo}  className="user__photo" alt=""/>
            </div>
            <div className="user__name">{name}</div>
            
            <div className='user__position'>{position}</div>
            <div className='user__email'>{email}</div>
            <div className="user__phone">{phone}</div>
        </div>
    )
}

export default User