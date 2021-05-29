import { AppBar, IconButton, Toolbar, Button, Drawer, Divider, List, ListItem, ListItemText, ButtonGroup, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItemIcon from '@material-ui/icons/List'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import React from 'react'


const useStyles = makeStyles({
    root: {
        justifyContent: "space-between"
    }
})

export const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    
    const handleDrawerClose = () => {
        setOpen(false);
    }

    const classes = useStyles()

    return (
        <AppBar position="static" color="default">
            <Toolbar classes={{
                root: classes.root
            }}>
                    <IconButton color="primary" edge="start" aria-label="menu" onClick={handleDrawerOpen} >
                    <MenuIcon />
                    </IconButton>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group" component="div" >
                        <Button color="primary">News</Button>
                        <Button color="primary">Join</Button>
                        <Button color="primary">About</Button>
                    </ButtonGroup>
            </Toolbar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div >
                <IconButton edge="start" color="primary" onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List >
                {['News', 'Join', 'About'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} color="primary"  />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </AppBar>
    )
}