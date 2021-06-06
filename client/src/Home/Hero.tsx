import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroSection: {
        color: theme.palette.primary.contrastText,
        backgroundColor:theme.palette.primary.main,
        padding:"2.5rem",
        borderRadius: "4px",
    },
  })
);


export const Hero = () => {

    const classes = useStyles();

    return (
          <Grid  
            className={`${classes.heroSection}`}
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap="wrap"
          >
            <Grid item>
              <Typography variant="h2" component="h1">
                  Профсоюз
              </Typography> 
            </Grid>
          </Grid>
    )
}