import React, {useEffect, useState} from 'react';
import {Grid, Dialog, Typography, DialogActions, DialogContent, DialogTitle, Button} from "@material-ui/core";
import SelectCarInsuranceType from "./components/selectInsurance";
import carApis from "../../apis/cars";
import SelectCar from "./components/selectCar";
import BackBtn from "./components/BackBtn";
import SelectInsuranceCompany from "./components/SelectInsuranceCompany";
import DiscountInsurance from "./components/discountInsurance";
import {useAuthContext} from "../../context/context";

const Insurance = () => {
    const {state} = useAuthContext();
    const [step, setStep] = useState(1);
    const [companies, setCompanies] = useState(null);
    const [thirdCarTypes, setThirdCarTypes] = useState(null);
    const [carDiscount, setCarDiscount] = useState(null);
    const [userData, setUserData] = useState({
        carType: null,
        carBrand: null,
        companyId: null,
        carPercent: null,
        driverPercent: null
    })

    const [showModal, setShowModal] = useState(false);

    const handleSelectInsurance = () => {
        setStep(prevState => (prevState + 1))
    };

    useEffect(() => {
        fetchCompanies();
        fetchThirdCarTypes();
        fetchCarDiscount()
    }, []);


    const fetchCompanies = async () => {
        try {
            const {result} = await carApis.companies();
            setCompanies(result)
        } catch (err) {
            // handle Error
        }
    }

    const fetchThirdCarTypes = async () => {
        try {
            const {result} = await carApis.thirdCarTypes();
            setThirdCarTypes(result)
        } catch (err) {
            // handle Error
        }
    }

    const fetchCarDiscount = async () => {
        try {
            const {result} = await carApis.carThirdDiscount();
            setCarDiscount(result)
        } catch (err) {
            // handle Error
        }
    }

    const handleRackBtn = () => {
        setStep(prevState => (prevState - 1));
    }

    const handleNextStep = () => {
        setStep(prevState => (prevState + 1));
    }

    const handleSubmitForms = (values) => {
        setUserData(prevState => ({...prevState, ...values}));
        if (step === 4) {
            setShowModal(true)
            return;
        }
        handleNextStep()
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }


    const {carBrand, carType, companyId, carPercent, driverPercent} = userData;

    return (
        <>
            <Grid container spacing={3} alignItems='center'>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                        <strong>
                            {step === 1 ? 'انتخاب بیمه' : 'بیمه شخص ثالث'}
                        </strong>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                    {step === 1 && (
                        <SelectCarInsuranceType onSelect={handleSelectInsurance}/>
                    )}
                    {step === 2 && (
                        <SelectCar data={thirdCarTypes} formData={userData} submit={handleSubmitForms}>
                            <BackBtn onClick={handleRackBtn} title='بازگشت'/>
                        </SelectCar>
                    )}
                    {step === 3 && (
                        <SelectInsuranceCompany data={companies} submit={handleSubmitForms}>
                            <BackBtn onClick={handleRackBtn} title='مرحله قبل'/>
                        </SelectInsuranceCompany>
                    )}
                    {step === 4 && (
                        <DiscountInsurance data={carDiscount} submit={handleSubmitForms}/>
                    )}
                </Grid>
            </Grid>
            <Dialog
                maxWidth='sm'
                fullWidth
                onClose={handleCloseModal}
                aria-labelledby="customized-dialog-title"
                open={showModal}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
                    مشخصات بیمه گذار
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <strong>
                                {`نام بیمه کننده:   `}
                            </strong>
                            <span>{state.user.name}</span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <strong>
                                {`نوع خودرو:   `}
                            </strong>
                            <span>{step === 4 && thirdCarTypes?.find(el => el.carTypeID === carType)?.carType}</span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <strong>
                                {`مدل خودرو:   `}
                            </strong>
                            <span>{step === 4 && thirdCarTypes?.find(el => el.carTypeID === carType)?.brand?.find(el => el.id === carBrand)?.name}</span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <strong>
                                {`شرکت بیمه گر قبلی:   `}
                            </strong>
                            <span>{step === 4 && companies?.find(el => el.id === companyId)?.company}</span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <strong>
                                {`درصد تخفیف ثالث:   `}
                            </strong>
                            <span>{step === 4 && carDiscount?.find(el => el.id === carPercent)?.title}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <strong>
                                {`درصد تخفیف حوادث راننده:   `}
                            </strong>
                            <span>{step === 4 && carDiscount?.find(el => el.id === driverPercent)?.title}</span>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} size={"large"} onClick={handleCloseModal} color="secondary">
                        تایید میکنم
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default Insurance;
