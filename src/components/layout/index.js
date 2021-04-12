import React from 'react';
import {createStyles, Grid, makeStyles} from "@material-ui/core";
import Toolbar from "../toolbar";


// styles
const useStyles = makeStyles((theme) =>
    createStyles({
        layout: {
            borderRadius: '23px',
            position: 'relative',
            height: '100%',
            boxShadow: '0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%)'
        },
        leftSide: {
            borderTopRightRadius: '23px',
            borderBottomRightRadius: '23px',
            padding: theme.spacing(3),
            backgroundColor: '#fffbeb'
        },
        rightSide: {
            padding: '24px 24px 0 100px !important',
            marginTop: theme.spacing(10)
        },
        backgroundImage: {
            backgroundImage: "url('images/car-green.svg')",
            width: '100%',
            height: '500px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            position: 'absolute',
            transform: 'scale(0.5)',
            right: '100px',
            bottom: '40px',
            transformOrigin: 'bottom right'
        }
    })
);

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.layout}>
            <Toolbar/>
            <Grid item xs={12} md={8} className={classes.rightSide}>
                {children}
            </Grid>
            <Grid item xs={12} md={4} className={classes.leftSide} />
            <div className={classes.backgroundImage}/>
        </Grid>
    )
};


export default Layout;
