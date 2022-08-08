import {Component} from "react";
import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import ResponsiveAppBar from "../../../component/Common/AppBar/appbar";


class DashBoard extends Component {


    constructor(props) {
        super(props);

        this.state = {
            value:'Product',
            dashBoardSummery: {
                noOfRegisteredUsers: '',
                noOfBookingsForToday: '',
                noOfAvailableCars: '',
                noOfReservedCars: '',
                noOfActiveBookings: '',
                noOfAvailableDrivers: '',
                noOfOccupiedDrivers: '',
                noOfCarsNeedMaintenance: '',
                noOfCarsNeedToBeRepaired: ''
            },


        }
    }



    handleChange = (event,newValue) => {
        this.setState({
            value:newValue
        })
    }

    render() {
        return (
            <Grid component={'main'} width={'100vw'} height={'100vh'} display={"flex"} flexDirection={"column"}
                  alignItems={"center"}>

                <Grid width={'98%'} margin={'4vh'}>
                    <ResponsiveAppBar/>
                </Grid>



                <Grid width={'90vw'} display={"flex"} height={"90vh"} alignItems={"center"} justifyContent={'space-evenly'} flexWrap={"wrap"}>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: '#74B49B'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>PRODUCTS</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: '#F8F8F8'}} display={"flex"} alignItems={'center'}
                              justifyContent={'center'}>
                            <Typography
                                style={{fontSize: '60px'}}>{this.state.dashBoardSummery.noOfRegisteredUsers}</Typography>
                        </Grid>


                    </Grid>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: '#74B49B'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>CART</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: '#F8F8F8'}} display={"flex"} alignItems={'center'}
                              justifyContent={'center'}>
                            <Typography
                                style={{fontSize: '60px'}}>{this.state.dashBoardSummery.noOfBookingsForToday}</Typography>
                        </Grid>


                    </Grid>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: '#74B49B'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>USERS</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: '#F8F8F8'}} display={"flex"} alignItems={'center'}
                              justifyContent={'center'}>
                            <Typography
                                style={{fontSize: '60px'}}>{this.state.dashBoardSummery.noOfAvailableCars}</Typography>
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>
        )
    }

}


export default DashBoard