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
import {Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import MyButton from "../../../component/Common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SnackBar from "../../../component/Common/snackBar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableCell} from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import * as React from "react";
import UploadButton from "../../../component/Common/UploadButton";
import userRegistrationService from "../../../services/userRegistrationService";
import productManageService from "../../../services/productManageService";

class ProductManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                title: "test product",
                price: 13.5,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: "electronic"
            },

            allProducts:[]
        }
    }



    submitProduct= async() =>{

        let formData = this.state.formData;
        let res = await productManageService.submitProduct(formData);

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

    updateProduct= async(data) =>{

        let res = await productManageService.putProduct(data.id,data);

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

    deleteProduct= async(data) =>{

        let res = await productManageService.deleteProduct(data);

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

    loadAllProducts= async() =>{

        let res = await productManageService.fetchAllProducts();

        if (res.status === 200) {
            this.setState({
                allProducts:res.data.data,
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadAllProductsCategories= async() =>{

        let res = await productManageService.fetchAllProductsCategories();

        if (res.status === 200) {
            this.setState({
                allProducts:res.data.data,
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadProduct= async() =>{

        // let data = this.state.id;
        let res = await productManageService.fetchASingleProduct(/*data*/);

        if (res.status === 200) {
            let data = res.data.data;
            this.setState({

                formData: {
                    title: data.title,
                    price: data.price,
                    description:data.description,
                    image:data.image,
                    category: data.category
                },
            });

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    loadUsersLimit= async() =>{

        // let data = this.state.limit;
        let res = await productManageService.fetchAllProductsLimit(/*data*/);

        if (res.status === 200) {
            this.setState({
                allUsers:res.data.data,
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
        this.loadAllProducts();
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
                                        marginBottom={'2vh'} style={{fontSize: '35px',}}>Product
                                        Manage</Typography></Grid>

                                    <Grid display={"flex"} justifyContent={'center'} height={'75vh'}
                                          alignItems={'center'} marginTop={'5vh'}>

                                        <Grid display={'flex'} height={'100%'}>
                                            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitProduct}>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center'
                                                }}>

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Titlle"
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

                                                            let formData = this.state.formData

                                                            formData.user.role = value.type

                                                            this.setState({formData})

                                                        }}
                                                        getOptionLabel={
                                                            (option) => option.type
                                                        }
                                                        id="controllable-states-demo"
                                                        options={this.state.category}
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        renderInput={(params) => <TextField {...params} label="Category"/>}
                                                    />




                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="City"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        multiline
                                                        rows={4}
                                                        validators={['required']}

                                                    />

                                                </div>


                                                <Grid width={'100%'} height={'40%'} >
                                                    <Grid style={{
                                                        width: '40ch',
                                                        height:'30ch',
                                                        margin: '1vh',
                                                        marginLeft:'10vw',
                                                        border: '1px solid silver',

                                                        backgroundImage:"url(" +this.state.nicView+ ")",
                                                        backgroundSize: 'cover'

                                                    }}>
                                                        <div style={{backgroundColor:'silver',display:'flex',justifyContent:'center'}}><input

                                                            style={{display: 'none'}}
                                                            accept="image/*"
                                                            //className={classes.input}
                                                            id="contained-button-file01"
                                                            multiple
                                                            type="file"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    nicImage: e.target.files[0],
                                                                    nicView : URL.createObjectURL(e.target.files[0])
                                                                })
                                                            }}
                                                        />
                                                            <label htmlFor="contained-button-file01">
                                                                <Button variant="text" color="primary" size="small" component="span">
                                                                    <UploadButton/> Upload Image
                                                                </Button>
                                                            </label>

                                                        </div>
                                                    </Grid>


                                                </Grid>


                                                <Grid width={'97%'} marginTop={'5vh'} marginRight={'10vw'}
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

export default withStyles(styleSheet)(ProductManage)