import { Card, CardActionArea, Dialog, GridList, GridListTile, ListSubheader } from '@material-ui/core'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react'

type TileType = {
    id: string
    img: string
    title: string
    author: string
}
type TileDataType = {
    tileData: Array<TileType>
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    img: {
        maxWidth: "100%",
        height:"auto"
    }
  }),
);


const MyTile = (props: TileType) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        
        <Card raised={true}>
            <CardActionArea onClick={handleClickOpen}>
                <img className={classes.img}  src={props.img} alt={props.title} />
            </CardActionArea>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                                        
                    <img src={props.img} alt={props.title} />
                    
                </Dialog>
        </Card>
    )
}

export const Media = (props:TileDataType) => {


    const classes = useStyles();

    return (
        <GridList className={classes.root}  cols={3} cellHeight={"auto"}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div">Фотоотчеты</ListSubheader>
            </GridListTile>
            {props.tileData.map((tile) => (
                <GridListTile key={tile.id}>
                    <MyTile img={tile.img}  id={tile.id} title={tile.title} author={tile.author}/>
                </GridListTile>
            ))}
        </GridList>
    )
}