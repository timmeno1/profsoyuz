import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import React from 'react'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    redTextColor: {
        color:theme.palette.primary.main
    },
  }),
);

type CounterType = {
    title: string,
    counter: number
}

export const Counter = (props: CounterType) => {

    const classes = useStyles();

    return (
        <Card>
            <CardHeader className={classes.redTextColor}
                title={`${props.title}`}
            />
            <CardContent>
                <Typography  variant="h2" color="textPrimary" component="p">
                    {`${props.counter}`}
                </Typography>
            </CardContent>
        </Card>
    )
}