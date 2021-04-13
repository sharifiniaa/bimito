import {createStyles, Icon, makeStyles} from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles(() =>
    createStyles({
        iconWrapper: {
            display: 'inline-flex',
            fontSize: '14px !important'
        },
        right: {
            transform: 'rotate(180deg)'
        },
        disabled: {
            opacity: '0.2'
        }
    })
)

function ArrowIcon({right = false, disabled}) {
    const classes = useStyles();
    return (
        <Icon className={classes.iconWrapper}>
            <img className={clsx({
                [classes.right] : right,
                [classes.disabled]: disabled
            })} src="images/arrow.svg" alt="arrow"/>
        </Icon>
    );
}

export default ArrowIcon;
