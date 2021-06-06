import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react'
import { Counter } from './Counter';
import { Feature } from './Feature';
import { Hero } from './Hero';
import { Media } from './Media';
import photo from '../assets/pexels-photo-5276003.jpeg'
import photo1 from '../assets/pexels-photo-5695348.jpeg'
import  {v4} from 'uuid'



const countersData = [
    {
        id: "189023123123",
        title: "Количество участников",
        counter: 327
    },
    {
        id: "189023123123",
        title: "Количество решенных проблем",
        counter: 576
    }
]

const featuresData = [
    {
        id: "189023123123",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
    {
        id: "123456123123",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
    {
        id: "1231231987623",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
    {
        id: "123123423123",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
    {
        id: "126453123123",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
    {
        id: "123112323123",
        title: "Не выплата 13 пособия",
        text: "asjk,dhfglksjdbnfgkj hasdkjfgnkljashdfgk ;lakdsfjg;kljhasdf;g",
        icon: "bi bi-calendar-plus-fill"
    },
]

const  tileData = [
    {
        id: v4(),
        img: photo,
        title: "wertwert",
        author: "wertwert"
    },
    {
        id: v4(),
        img: photo1,
        title: "wertwert",
        author: "wertwert"
    },
    {
        id: v4(),   
        img: photo1,
        title: "wertwert",
        author: "wertwert"
    },
    {
        id: v4(),
        img: photo1,
        title: "wertwert",
        author: "wertwert"
    },
    {
        id: v4(),
        img: photo,
        title: "wertwert",
        author: "wertwert"
    },
    {
        id: v4(),
        img: photo1,
        title: "wertwert",
        author: "wertwert"
    }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "0.5rem"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      display:"block",
      backgroundColor:theme.palette.background.default
    },
    gridItem: {
        width:"100%"
    },
    heroSection: {
        color: theme.palette.primary.contrastText,
        backgroundColor:theme.palette.primary.main,
        height: "200px",
    },
    h3: {
        padding: theme.spacing(2)
    }
  }),
);


export const Home = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid className={classes.root}
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item className={classes.gridItem}>
                    <Hero />
                </Grid > 

                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper} color="primary">

                        <Typography className={classes.h3} variant="h4" align="center" color="textPrimary">
                            Преимущества вступления впрофсоюз
                        </Typography>

                        <Grid className={classes.root}
                              container
                              spacing={1}>

                            {featuresData.map(feature => (
                                <Grid item sm={4} xs={6}>
                                    <Feature key={feature.id} title={feature.title} text={feature.text} icon={feature.icon} />
                                </Grid>
                            ))}

                        </Grid>
                    </Paper>
                </Grid > 

                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <Grid className={classes.root}
                              container
                              spacing={1}>
                            {countersData.map((counter, index) => {
                                return (
                                    <Grid item sm={6} xs={12}>
                                        <Counter key={counter.id} title={counter.title} counter={counter.counter} />
                                    </Grid>
                                )}
                            )}
                        </Grid>
                    </Paper>
                </Grid > 

                <Grid item className={classes.gridItem}>
                    <Media tileData={tileData}/>
                </Grid > 
            </Grid> 
        </Container>
        
    )
}