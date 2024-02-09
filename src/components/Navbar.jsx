import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>Employee</Typography>

                <Button variant='error'><Link style={{textDecoration:"none"}} to ={'/'}>view data</Link></Button>&nbsp;
                <Button variant='success'><Link style={{textDecoration:"none"}} to ={'/add'}>Add data</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar