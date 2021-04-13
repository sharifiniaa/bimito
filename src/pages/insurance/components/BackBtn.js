import React from 'react';
import {Button} from "@material-ui/core";
import ArrowIcon from "../../../assets/icons/arrow";

const BackBtn = (rest) => {
    const {title} = rest
    return (
        <Button {...rest}  startIcon={<ArrowIcon right />} variant="outlined"
                color="secondary"
                size={"large"}
                disableElevation>
            {title}
        </Button>
    )
};

export default BackBtn;
