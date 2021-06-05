import { AppBar, IconButton, Toolbar, Button, Drawer, List, ListItem, makeStyles, Hidden, Typography, ButtonGroup, ListItemText, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import clsx from 'clsx'
import {BrowserRouter, Link} from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        justifyContent: "space-between",

    } , 
    list: {
       padding : "1rem",
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
                role="presentation"
                >
                        <List className={clsx(classes.list) }>
                            <ListItem  color="primary" button>
                                <ListItemText disableTypography
                                    primary={<Typography color="primary">Новости</Typography>}  
                                    />
                            </ListItem>
                            <ListItem  color="primary" button>
                                <ListItemText disableTypography
                                    primary={<Typography color="primary">Вступить</Typography>}  
                                    />
                            </ListItem>
                            <ListItem  color="primary" button>
                                <ListItemText disableTypography
                                    primary={<Typography color="primary">О нас</Typography>}  
                                    />
                            </ListItem>
                        </List>

            </div>
        )
    }

    return (
        <AppBar position="static" color="default" >
            <Container>
                <BrowserRouter>
                    <Toolbar classes={{
                        root: classes.root
                    }}>
                            <Button color="primary" variant="contained" component={Link} to={"/"}>
                                Профсоюз
                            </Button>
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
                                    <Button color="primary" component={Link} to={"/news"}>Новости</Button>
                                    <Button color="primary" component={Link} to={"/join"}>Вступить</Button>
                                    <Button color="primary" component={Link} to={"/about"}>О нас</Button>
                                </ButtonGroup>
                            </Hidden>
                            
                    </Toolbar>
                </BrowserRouter>
            </Container>
            
            
        </AppBar>
    )
}