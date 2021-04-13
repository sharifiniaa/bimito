import React from 'react';

import {useForm, Controller} from "react-hook-form";
import {Box, Button, FormHelperText, Grid, MenuItem, TextField, Typography} from "@material-ui/core";

const DiscountInsurance = ({data, submit}) => {const {control, errors, handleSubmit, watch} = useForm({
        defaultValues: {
            carPercent: '',
            driverPercent: ''
        }
    })
    const onSubmit = (values) => {
        submit(values)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container alignItems='center' spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant={"body2"} component={"span"}>
                            درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            style={{width: '100%'}}
                            control={control}
                            name='carPercent'
                            label="درصد تخفیف ثالث"
                            rules={{required: 'درصد تخفیف ثالث الزامی میباشد'}}
                            as={
                                <TextField
                                    select
                                    fullWidth
                                    variant={"outlined"}
                                    error={errors.carPercent && true}
                                >
                                    {data && data.map((el, i) => (
                                        <MenuItem key={i} value={el.id}>
                                            {el.title}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                        <FormHelperText error focused>
                            {errors.carPercent && errors.carPercent.message}
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            style={{width: '100%'}}
                            control={control}
                            name='driverPercent'
                            label="درصد تخفیف حوادث راننده"
                            rules={{required: 'درصد تخفیف حوادث راننده الزامی میباشد'}}
                            as={
                                <TextField
                                    select
                                    fullWidth
                                    variant={"outlined"}
                                    error={errors.driverPercent && true}
                                >
                                    {data && data.map((el, i) => (
                                        <MenuItem key={i} value={el.id}>
                                            {el.title}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                        <FormHelperText error focused>
                            {errors.driverPercent && errors.driverPercent.message}
                        </FormHelperText>
                    </Grid>
                </Grid>
                <Box mt={5} />
                <Grid item xs={12}>
                    <Grid container alignItems='center' justify="flex-end">
                        <Button variant="contained"
                                type={"submit"}
                                disabled={!(watch('driverPercent') && watch('carPercent'))}
                                color="secondary"
                                size={"large"}
                                disableElevation>
                            استعلام قیمت
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
};

export default DiscountInsurance;
