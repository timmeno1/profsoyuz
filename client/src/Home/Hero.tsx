import { Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      display:"block",
      backgroundColor:theme.palette.background.default
    },
    heroSection: {
        color: theme.palette.primary.contrastText,
        backgroundColor:theme.palette.primary.main,
        height: "200px",
    },
  })
);


export const Hero = () => {

    const classes = useStyles();

    return (
        <Paper className={`${classes.paper} ${classes.heroSection}`}>
            <Typography variant="h2" component="h1">
                Профсоюз
            </Typography> 
        </Paper>
    )
}