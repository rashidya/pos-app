import {Component} from "react";
import {stylesheet} from "./style";
import {withStyles} from "@mui/styles";
import {Box, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import MyButton from "../../component/Common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SnackBar from "../../component/Common/snackBar";
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

class UserRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {


            formData: {
                id: '',
                userNIC: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                email:'',
                drivingLicenseNo: '',
                address: '',
                contactNo: '',
                user: {
                    userId:'',
                    userName: '',
                    password: '',
                    role: 'REGISTERED_USER'
                }

            }
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid className={classes.container}>

                    <Box sx={{display: 'flex', flexWrap: 'wrap'}} justifyContent={'center'}>
                        <ValidatorForm ref="form" className="pt-2" >
                            <Grid width="90vw" height={'80vh'} display={'flex'} justifyContent={'space-evenly'}
                                  alignItems={'center'}
                                  style={{backgroundColor: 'white', opacity: '93%'}}>

                                <Grid display={"flex"} width={'75vw'} height={"80vh"} justifyContent={'space-evenly'}
                                      flexDirection={'column'}  alignItems={'center'}>

                                    <Grid width={'92%'} display={'flex'} justifyContent={'start'}><Typography marginBottom={'2vh'} style={{fontSize: '35px',}}>User Registration</Typography></Grid>

                                    <Grid display={"flex"} justifyContent={'center'} height={'75vh'}  alignItems={'center'} marginTop={'5vh'}>

                                        <Grid display={'flex'} height={'100%'}>
                                            <ValidatorForm ref="form" className="pt-2" >
                                                <div style={{display: 'flex', flexWrap: 'wrap',justifyContent:'center'}}>

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="First Name"
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
                                                        label="Last Name"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Email"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Username"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <FormControl sx={{m: 1, width: '60ch'}}
                                                                 size={"small"} variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={this.state.showPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={(e) => {
                                                                            let formDataOb = this.state.formData
                                                                            formDataOb.showPassword = !formDataOb.showPassword
                                                                            this.setState(formDataOb)
                                                                        }}
                                                                        onMouseDown={(event) => {
                                                                            event.preventDefault();
                                                                        }}
                                                                        edge="end"
                                                                    >
                                                                        {this.state.showPassword ? <VisibilityOff/> :
                                                                            <Visibility/>}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                            label="Password"

                                                            value={this.state.formData.user.password}
                                                            onChange={(e) => {
                                                                let formDataOb = this.state.formData
                                                                this.state.formData.user.password = e.target.value
                                                                this.setState(formDataOb)
                                                            }}
                                                            validators={['required']}
                                                        />
                                                    </FormControl>


                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="City"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Street"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Street No"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Zip Code"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />


                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Lat Value"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Long Value"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Mobile No"
                                                        defaultValue=""
                                                        sx={{m: 1, width: '60ch'}}
                                                        size={"small"}
                                                        validators={['required']}

                                                    />


                                                </div>

                                                <Grid width={'97%'}  marginTop={'5vh'} marginRight={'10vw'} display={"flex"} justifyContent={"flex-end"}>

                                                    <Grid width={'30%'}   display={"flex"} alignItems={"center"}>

                                                        <MyButton label={"cancel"}
                                                                  variant={'contained'} type={"submit"} style={{backgroundColor:'silver',width:'45%',margin:'1vh'}} />

                                                        <MyButton color={'success'} label={"Save"}
                                                                  variant={'contained'} type={"submit"} style={{width:'45%',margin:'1vh'}} />


                                                    </Grid>


                                                </Grid>

                                            </ValidatorForm>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>

                        </ValidatorForm>

                    </Box>



                    <Grid>
                        <TableContainer component={Paper} style={{ width:'90vw', backgroundColor: '#eeeff1' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">First Name</TableCell>
                                        <TableCell align="left">Last Name</TableCell>
                                        <TableCell align="left">Email</TableCell>
                                        <TableCell align="left">Username</TableCell>
                                        <TableCell align="left">Password</TableCell>
                                        <TableCell align="left">City</TableCell>
                                        <TableCell align="left">Street</TableCell>
                                        <TableCell align="left">Street No</TableCell>
                                        <TableCell align="left">Zip Code</TableCell>
                                        <TableCell align="left">Lat Value</TableCell>
                                        <TableCell align="left">Long Value</TableCell>
                                        <TableCell align="left">Mobile No</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                  {/*  {
                                        this.state.data.map((row) => (
                                            <TableRow onClick={() => {
                                                this.loadVehicleData(row);
                                            }}>
                                                <TableCell align="left">{row.vehicleId}</TableCell>
                                                <TableCell align="left">{row.registrationNo}</TableCell>
                                                <TableCell align="left">{row.color}</TableCell>
                                                <TableCell align="left">{row.brand}</TableCell>
                                                <TableCell align="left">{row.noOfPassengers}</TableCell>
                                                <TableCell align="left">{row.color}</TableCell>
                                                <TableCell align="left">{row.vehicleType}</TableCell>
                                                <TableCell align="left">{row.transmissionType}</TableCell>
                                                <TableCell align="left">{row.pricePerExtraKM}</TableCell>
                                                <TableCell align="left">{row.vehicleAvailability}</TableCell>
                                                <TableCell align="left">{row.refundableDamageFee}</TableCell>
                                                <TableCell align="left">{row.mileage}</TableCell>
                                                <TableCell align="left">{row.lastServiceMileage}</TableCell>
                                                <TableCell align="left">{row.priceRate.dailyRate}</TableCell>
                                                <TableCell align="left">{row.priceRate.monthlyRate}</TableCell>
                                                <TableCell align="left">{row.freeMileage.dailyFreeMileage}</TableCell>
                                                <TableCell align="left">{row.freeMileage.monthlyFreeMileage}</TableCell>





                                                <TableCell align="left">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                //this.updateVehicle(row);
                                                            }}
                                                        >
                                                            <EditIcon color="primary" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteVehicle(row.vehicleId)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }*/}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>


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

export default withStyles(stylesheet)(UserRegistration)