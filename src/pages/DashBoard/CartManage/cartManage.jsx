import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {
    Autocomplete,
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";


import MyButton from "../../../component/Common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SnackBar from "../../../component/Common/snackBar";
import * as React from "react";
import DatePicker from "../../../component/Common/DatePicker";
import productManageService from "../../../services/productManageService";
import cartManageService from "../../../services/cartManageService";

class CartManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productTitle: '',
            formData: {
                userId: '',
                date: '',
                products: []
            }
        }

    }


    submitCart = async () => {

        let formData = this.state.formData;
        let res = await cartManageService.submitCart(formData);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadAllProducts();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    updateCart = async (data) => {

        let res = await cartManageService.putCart(data.id, data);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadAllUsers();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    deleteCart = async (data) => {

        let res = await cartManageService.deleteCart(data);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadAllUsers();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadAllCarts = async () => {

        let res = await cartManageService.fetchAllCarts();

        if (res.status === 200) {
            this.setState({
                allProducts: res.data.data,
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadCart = async () => {

        // let data = this.state.id;
        let res = await cartManageService.fetchASingleCart(/*data*/);

        if (res.status === 200) {
            let data = res.data.data;
            this.setState({

                formData: {
                    userId: data.user,
                    date: data.date,
                    products: data.products
                }
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadCartsLimit = async () => {

        // let data = this.state.limit;
        let res = await cartManageService.fetchAllCartsLimit(/*data*/);

        if (res.status === 200) {
            this.setState({
                allUsers: res.data.data,
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    componentDidMount() {
        this.loadAllCarts();
    }


    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid className={classes.container}>

                    <Box sx={{display: 'flex', flexWrap: 'wrap'}} justifyContent={'center'} alignItems={'center'}>

                        <Grid width="90vw" height={'80vh'} display={'flex'} justifyContent={'space-evenly'}
                              alignItems={'center'}
                              style={{backgroundColor: 'white', opacity: '93%'}}>

                            <Grid display={"flex"} width={'75vw'} height={"80vh"} justifyContent={'space-evenly'}
                                  flexDirection={'column'} alignItems={'center'}>

                                <Grid width={'92%'} display={'flex'} justifyContent={'start'}><Typography
                                    marginBottom={'2vh'} style={{fontSize: '35px',}}>Cart
                                    Manage</Typography></Grid>

                                <Grid display={"flex"} justifyContent={'center'} height={'75vh'}
                                      alignItems={'center'} marginTop={'10vh'}>

                                    <Grid display={'flex'} height={'100%'}>
                                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCart}>
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center'
                                            }}>

                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Username"
                                                    defaultValue=""
                                                    sx={{m: 1, width: '60ch'}}
                                                    size={"small"}
                                                    /*value={this.state.formData.name.firstName}
                                                    onChange={(e) => {
                                                        let formDataOb = this.state.formData
                                                        formDataOb.name.firstName = e.target.value
                                                        this.setState(formDataOb)
                                                    }}*/
                                                    validators={['required']}

                                                />

                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Price"
                                                    defaultValue=""
                                                    sx={{m: 1, width: '60ch'}}
                                                    size={"small"}
                                                    validators={['required']}

                                                />

                                                <Autocomplete

                                                    onChange={(e, value, r) => {

                                                    }}
                                                    getOptionLabel={
                                                        (option) => option.type
                                                    }
                                                    id="controllable-states-demo"
                                                    options={this.state.productTitle}
                                                    sx={{m: 1, width: '60ch'}}
                                                    size={"small"}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        label="Product Title"
                                                                                        margin={'1vh'}/>}
                                                />


                                                <DatePicker label={'Date'}/>

                                            </div>


                                            <Grid width={'97%'} marginTop={'15vh'} marginRight={'10vw'}
                                                  display={"flex"} justifyContent={"flex-end"}>

                                                <Grid width={'30%'} display={"flex"} alignItems={"center"}>

                                                    <MyButton label={"cancel"}
                                                              variant={'contained'} type={"submit"} style={{
                                                        backgroundColor: 'silver',
                                                        width: '45%',
                                                        margin: '1vh'
                                                    }}/>

                                                    <MyButton color={'success'} label={"Save"}
                                                              variant={'contained'} type={"submit"}
                                                              style={{width: '45%', margin: '1vh'}}/>


                                                </Grid>


                                            </Grid>

                                        </ValidatorForm>
                                    </Grid>


                                </Grid>


                            </Grid>


                        </Grid>


                    </Box>


                    <SnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({alert: false})
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />


                </Grid>

            </>
        )
    }
}

export default withStyles(styleSheet)(CartManage)