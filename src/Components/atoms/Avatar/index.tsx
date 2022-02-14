import { Avatar } from '@mui/material'
import React from 'react'

function AvatarComp({name}:any) {
    return (
        
        <Avatar sx={{ bgcolor: '#69A6E3', width:'40px', Height:'40px' }} data-testid="avatar">{name}</Avatar>
        
    )
}

export default AvatarComp
