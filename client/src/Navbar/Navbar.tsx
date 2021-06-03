import { AppBar, IconButton, Toolbar, Button, Drawer, Divider, List, ListItem, ListItemText, ButtonGroup, makeStyles, Hidden, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import React from 'react'
import clsx from 'clsx'


const useStyles = makeStyles({
    root: {
        justifyContent: "space-between"
    } , 
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
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


    const MyList = () => {
        return (
            <div
                className={clsx(classes.list) }
                role="presentation"
                // onClick={handleDrawerClose}
                // onKeyDown={handleDrawerClose}
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

            </div>
        )
    }

    return (
        <AppBar position="static" color="default" >
            <Toolbar classes={{
                root: classes.root
            }}>
                    <Typography color="primary" variant="h6" >
                        Профсоюз
                    </Typography>
                    <Hidden  only={['sm', 'md', 'lg', 'xl']} >
                        <IconButton color="primary" edge="start" aria-label="menu" onClick={handleDrawerOpen} >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={'left'} open={open} onClose={handleDrawerClose}>
                            <MyList />
                        </Drawer>
                    </Hidden>  
                    <Hidden  only={['xs']}>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" component="div" >
                            <Button color="primary">News</Button>
                            <Button color="primary">Join</Button>
                            <Button color="primary">About</Button>
                        </ButtonGroup>
                    </Hidden>
                    
            </Toolbar>
            
        </AppBar>
    )
}