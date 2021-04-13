import React, {useState} from 'react';
import {
    Grid,
    Typography,
    TextField,
    Button,
    FormHelperText,
    makeStyles,
    createStyles,
    InputAdornment, IconButton
} from "@material-ui/core";
import {useForm} from 'react-hook-form';
import {useAuthContext} from "../../context/context";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
    createStyles({
        buttonWrapper: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'center'
            }
        },
    })
)

const SignUp = ({history}) => {
    const classes = useStyles()
    const {register, errors, handleSubmit} = useForm();
    const {dispatch} = useAuthContext();
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (values) => {
        dispatch({type: 'SET_USER_DATA', payload: {name: `${values.firstName} ${values.lastName}`}});
        history.push('/insurance')
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const persianCharactersRegex = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\s]+$/;

    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={12}>
                <Typography variant="h6" component="h2">
                    <strong> ثبت نام</strong>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={7}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container alignItems='center' spacing={5}>
                        <Grid item xs={12} md={6}>
                            <TextField style={{display: "flex"}}
                                       fullWidth
                                       id="firstName"
                                       name="firstName"
                                       inputRef={register({
                                           required: "نام الزامی میباشد",
                                           pattern: {value: persianCharactersRegex, message: 'نام را فارسی وارد کنید'}
                                       })}
                                       label="نام"
                                       variant={"outlined"}
                                       error={errors.firstName}
                            />
                            <FormHelperText error focused>
                                {errors.firstName && errors.firstName.message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                style={{display: "flex"}}
                                id="lastName"
                                name="lastName"
                                inputRef={register({
                                    required: "نام خانوادگی الزامی میباشد",
                                    pattern: {value: persianCharactersRegex, message: 'نام خانوادگی را فارسی وارد کنید'}
                                })}
                                label="نام خانوادگی"
                                variant={"outlined"}
                                error={errors.lastName}
                            />
                            <FormHelperText error focused>
                                {errors.lastName && errors.lastName.message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                style={{display: "flex"}}
                                id="mobileNumber"
                                name="mobileNumber"
                                label="شماره موبایل"
                                inputRef={register({
                                    required: "شماره موبایل الزامی میباشد",
                                    pattern: {value: /^(\+98|0)?9\d{9}$/, message: 'فرمت شماره موبایل صحیح نیست'}
                                })}
                                variant={"outlined"}
                                error={errors.mobileNumber}

                            />
                            <FormHelperText error focused>
                                {errors.mobileNumber && errors.mobileNumber.message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                style={{display: "flex"}}
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                label="رمز عبور"
                                inputRef={register({
                                    required: "رمز عبور الزامی میباشد",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/,
                                        message: 'پسورد حداقل ۴ کارکتر و یک حروف بزرگ و کوچک لاتین'
                                    }
                                })}
                                variant={"outlined"}
                                error={errors.password}

                            />
                            <FormHelperText error focused>
                                {errors.password && errors.password.message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className={classes.buttonWrapper} container justify='flex-end' alignItems='center'>
                                <Button autoFocus variant="contained"
                                        color="secondary"
                                        size={"large"}
                                        disableElevation
                                        type='submit'>
                                    ثبت نام
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default SignUp;
