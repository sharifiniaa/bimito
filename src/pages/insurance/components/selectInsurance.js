import React from 'react';
import {Grid} from "@material-ui/core";
import Card from "../../../components/ui/card";

const SelectInsurance = ({onSelect}) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Card image='images/insurance.svg' onClick={onSelect} title='شخص ثالث' />
            <Card disabled image='images/insurance.svg' title='بیمه بدنه' />
        </Grid>
    )
};

export default SelectInsurance;
