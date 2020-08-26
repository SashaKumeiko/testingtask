import React from 'react'

 const User = ({name,position,phone,email}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{position}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
    )
}

export default User