import React from 'react';
import {createStyles, Grid, makeStyles, Icon, Typography} from "@material-ui/core";
import {useAuthContext} from "../../context/context";


//styles
const useStyles = makeStyles((theme) =>
    createStyles({
            toolbarWrapper: {
                display: 'flex',
                width: '100%',
                position: 'absolute'
            },
            toolbar: {
                padding: '0 40px',
                height: '80px'
            },
            imageIcon: {
                width: '1.5rem',
                height: '1.5rem',
            },
            iconRoot: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '1.5rem',
                '&:not(:first-child)': {
                    height: 'auto'
                }
            },
            user: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            userTitle: {
                marginLeft: '0.85rem'
            },
            title: {
                fontWeight: 'bold',
                [theme.breakpoints.down('xs')]: {
                    display: 'none'
                }
            }
        }
    )
)

const Toolbar = () => {
    const {state} = useAuthContext();
    const {user} = state;
    const classes = useStyles()
    return (
        <div className={classes.toolbarWrapper}>
            <Grid className={classes.toolbar} container direction='row' alignContent='center' justify='space-between'>
                <Icon className={classes.iconRoot}>
                    <img src="images/logo.svg" className={classes.imageIcon} alt="logo"/>
                </Icon>
                <Typography className={classes.title} component='h1' variant='h6'>
                    سامانه مقایسه و خرید آنلاین بیمه
                </Typography>
                <Grid item className={classes.user}>
                    {user.name && (
                        <Icon className={classes.iconRoot}>
                            <img src="images/user.svg" className={classes.imageIcon} alt="user"/>
                        </Icon>
                    )}
                    <Typography className={classes.userTitle} component='span' variant='body1'>
                        {user.name ? user.name : 'ثبت نام'}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default Toolbar;
