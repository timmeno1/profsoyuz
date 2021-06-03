import { AppBar, IconButton, Toolbar, Button, Drawer, List, ListItem, makeStyles, Hidden, Typography, ButtonGroup, ListItemText, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import clsx from 'clsx'


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
                <Toolbar classes={{
                    root: classes.root
                }}>
                        <Button color="primary" variant="contained" >
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
                                <Button color="primary">Новости</Button>
                                <Button color="primary">Вступить</Button>
                                <Button color="primary">О нас</Button>
                            </ButtonGroup>
                        </Hidden>
                        
                </Toolbar>
            </Container>
            
            
        </AppBar>
    )
}