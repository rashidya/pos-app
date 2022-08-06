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
                            <Grid width="90vw" height={'100vh'} display={'flex'} justifyContent={'space-evenly'}
                                  alignItems={'center'}
                                  style={{backgroundColor: 'white', opacity: '93%'}}>

                                <Grid display={"flex"} width={'75vw'} height={"80vh"} justifyContent={'space-evenly'}
                                      flexDirection={'column'}  alignItems={'center'}>

                                    <Grid width={'100%'} display={'flex'} justifyContent={'start'}><Typography marginBottom={'2vh'} style={{fontSize: '35px',}}>User Registration</Typography></Grid>

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

                                                <Grid width={'97%'}  marginTop={'2vh'} marginRight={'10vw'} display={"flex"} justifyContent={"flex-end"}>

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