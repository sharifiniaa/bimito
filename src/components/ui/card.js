import React from 'react';
import {createStyles, Icon, makeStyles} from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles(() =>
    createStyles({
        card: {
            borderRadius: '20px',
            boxShadow: '0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '110px',
            height: '110px',
            cursor: 'pointer',
            margin: '10px 20px',
            '&:hover': {
                border: '2px solid #000'
            },
        },
        cardDisabled: {
            backgroundColor: '#e2e2e2',
            '&:hover': {
                border: 'none',
                cursor: 'not-allowed'
            }
        },
        imageIcon: {
            width: '2.5rem',
            height: '2.5rem',
        },
        iconRoot: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: '2.5rem',
            '&:not(:first-child)': {
                height: 'auto'
            }
        },
        title: {
            fontWeight: 600,
            marginTop: '10px'
        }
    })
)

const Card = ({title, image, disabled = false, ...rest}) => {
    const classes = useStyles();
    return (
        <div {...rest} className={clsx({
            [classes.card]: true,
            [classes.cardDisabled]: disabled
        })}>
            <Icon className={classes.iconRoot}>
                <img src={image} alt={title} className={classes.imageIcon}/>
            </Icon>
            <span className={classes.title}>
                {title}
            </span>
        </div>
    )
};

export default Card;
