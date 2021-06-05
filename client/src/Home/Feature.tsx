import { Card, CardContent, CardHeader, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from "react"

type FeatureType = {
    title: string,
    text: string,
    icon: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    redTextColor: {
        color:theme.palette.primary.main
    },
  }),
);


export const Feature = (props:FeatureType) => {

    const classes = useStyles();

    return (

        <Card>
            <CardContent>
                <Typography color="primary" variant="h2" ><i className={`${props.icon}`}></i></Typography>
            </CardContent>
            <CardHeader className={classes.redTextColor}
                title={`${props.title}`}
            />
            <CardContent>
                <Typography  variant="body1" color="textPrimary" component="p">
                    {`${props.text}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

