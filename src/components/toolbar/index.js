import React from 'react';
import {createStyles, Grid, makeStyles, Icon, Typography} from "@material-ui/core";


//styles
const useStyles = makeStyles(() =>
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
                fontWeight: 'bold'
            }
        }
    )
)

const Toolbar = ({login = true}) => {
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
                    {login && (
                        <Icon className={classes.iconRoot}>
                            <img src="images/user.svg" className={classes.imageIcon} alt="user"/>
                        </Icon>
                    )}
                    <Typography className={classes.userTitle} component='span' variant='body1'>
                        {login ? 'رضا صادقی' : 'ثبت نام'}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default Toolbar;
