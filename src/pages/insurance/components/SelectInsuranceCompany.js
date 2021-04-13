import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {Box, Button, FormHelperText, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import ArrowIcon from "../../../assets/icons/arrow";

const SelectInsuranceCompany = ({data, submit, children}) => {
    const {control, errors, handleSubmit, watch} = useForm({
        defaultValues: {
            companyId: ''
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
                            شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            style={{width: '100%'}}
                            control={control}
                            name='companyId'
                            label="شرکت بیمه‌گر قبلی"
                            rules={{required: 'شرکت بیمه‌گر قبلی الزامی میباشد'}}
                            as={
                                <TextField
                                    select
                                    fullWidth
                                    variant={"outlined"}
                                    error={errors.companyId && true}
                                >
                                    {data && data.map((el, i) => (
                                        <MenuItem key={i} value={el.id}>
                                            {el.company}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                        <FormHelperText error focused>
                            {errors.companyId && errors.companyId.message}
                        </FormHelperText>
                    </Grid>
                </Grid>
                <Box mt={5} />
                <Grid item xs={12}>
                    <Grid container alignItems='center' justify="space-between">
                        {children}
                        <Button variant="outlined"
                                type={"submit"}
                                disabled={!watch('companyId')}
                                endIcon={<ArrowIcon disabled={!watch('companyId')} />}
                                color="secondary"
                                size={"large"}
                                disableElevation>
                            مرحله بعد
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
};

export default SelectInsuranceCompany;
