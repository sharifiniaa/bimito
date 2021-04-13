import React, {useEffect, useState} from 'react';
import {useForm, Controller} from "react-hook-form";
import {Grid, TextField, MenuItem, FormHelperText, Button, Box, Typography} from "@material-ui/core";
import ArrowIcon from "../../../assets/icons/arrow";

const SelectCar = ({data, submit, children, formData}) => {
    const {control, errors, getValues, handleSubmit, watch, setValue} = useForm({
        defaultValues: {
            carType: formData.carType ? formData.carType : null,
            carBrand: formData.carBrand ? formData.carBrand : null
        }
    });
    const [brandList, setBrandList] = useState(null);

    const onSubmit = (values) => {
        submit(values)
    }

    useEffect(() => {
        if (watch('carType') && !formData.carBrand) {
            setValue('carBrand', '')
        }
    }, [watch('carType')])

    useEffect(() => {
        if (watch('carType')) {
            const {brand} = data.find(el => el.carTypeID === +getValues('carType'));
            if (brand) {
                setBrandList(brand)
            }
        }
    }, [watch('carType')])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container alignItems='center' spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant={"body2"} component={"span"}>
                            نوع و مدل خودروی خود را انتخاب کنید.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Controller
                            style={{width: '100%'}}
                            control={control}
                            name='carType'
                            label="نوع خودرو"
                            rules={{required: 'نوع خودرو الزامی میباشد'}}
                            as={
                                <TextField
                                    select
                                    fullWidth
                                    variant={"outlined"}
                                    error={errors.carType && true}
                                >
                                    {data && data.map((el, i) => (
                                        <MenuItem key={i} value={el.carTypeID}>
                                            {el.carType}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                        <FormHelperText error focused>
                            {errors.carType && errors.carType.message}
                        </FormHelperText>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Controller
                            style={{width: '100%'}}
                            control={control}
                            name='carBrand'
                            label="مدل خودرو"
                            rules={{required: 'مدل خودرو الزامی میباشد'}}
                            as={
                                <TextField
                                    disabled={!watch('carType')}
                                    select
                                    fullWidth
                                    variant={"outlined"}
                                    error={errors.carBrand && true}
                                    SelectProps={{
                                        multiple: false,
                                    }}
                                >
                                    {brandList ? brandList.map(el => (
                                        <MenuItem key={el.id} value={el.id}>
                                            {el.name}
                                        </MenuItem>
                                    )) : (
                                        <MenuItem value=''>
                                            در حال بارگذاری
                                        </MenuItem>
                                    )}
                                </TextField>
                            }
                        />
                        <FormHelperText error focused>
                            {errors.carBrand && errors.carBrand.message}
                        </FormHelperText>
                    </Grid>
                </Grid>
                <Box mt={5}/>
                <Grid item xs={12}>
                    <Grid container alignItems='center' justify="space-between">
                        {children}
                        <Button variant="outlined"
                                type={"submit"}
                                disabled={!(watch('carType') && watch('carBrand'))}
                                endIcon={<ArrowIcon disabled={!(watch('carType') && watch('carBrand'))}/>}
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

export default SelectCar;
