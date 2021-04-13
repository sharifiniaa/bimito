import React from 'react';
import {Grid, Typography} from "@material-ui/core";

const Main = () => {
    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={12}>
                <Typography variant="h6" component="h2">
                    <strong> ثبت نام</strong>
                </Typography>
            </Grid>

        </Grid>
    )
};

export default Main;
