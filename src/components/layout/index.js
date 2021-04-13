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
            boxShadow: '0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%)',
            [theme.breakpoints.down('xs')]: {
                height: 'unset'
            }
        },
        leftSide: {
            borderTopRightRadius: '23px',
            borderBottomRightRadius: '23px',
            padding: theme.spacing(3),
            backgroundColor: '#fffbeb',
            [theme.breakpoints.down('xs')]: {
                marginTop: "90px",
               borderRadius: '0 0 23px 23px'
            }
        },
        rightSide: {
            padding: '24px 24px 0 100px ',
            marginTop: theme.spacing(8),
            [theme.breakpoints.down('xs')]: {
                padding: '24px',
                marginTop: theme.spacing(10)
            }
        },
        backgroundImage: {
            backgroundImage: "url('images/car-green.svg')",
            width: '100%',
            height: '600px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            position: 'absolute',
            transform: 'scale(0.45)',
            backgroundSize: 'contain',
            right: '9%',
            bottom: '40px',
            transformOrigin: 'bottom right',
            [theme.breakpoints.down('sm')]: {
                height: '260px'
            }
        }
    })
);

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <Grid container  className={classes.layout}>
            <Toolbar/>
            <Grid item xs={12} sm={8} md={8} className={classes.rightSide}>
                {children}
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.leftSide} />
            <div className={classes.backgroundImage}/>
        </Grid>
    )
};


export default Layout;
