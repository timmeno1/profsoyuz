import React from 'react'
import {Button, ButtonGroup} from '@material-ui/core'


export const Navbar = () => {


    return (
        <nav className="container flex justify-end py-4" >
            <div className="logo">

            </div>
            <ButtonGroup className="buttons" variant="text" color="primary" aria-label="text primary button group">
                <Button >Home</Button>
                <Button >News</Button>
                <Button >Join</Button>
                <Button >About</Button>
            </ButtonGroup>
        </nav>
    )
}