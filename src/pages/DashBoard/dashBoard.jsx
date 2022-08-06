import {Component} from "react";
import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Avatar, Button, Tab, Tabs} from "@mui/material";


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

                <Grid style={{
                    backgroundColor: '#529471',
                    width: '95%',
                    height: '10vh',
                    marginTop: '4vh',
                    display: 'flex',
                    justifyContent: 'end',
                    overflowX: "hidden"
                }}>

                    <Grid style={{
                        width: '100%',
                        height: '9vh',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>


                        <Grid margin={'3vh'} height={"30%"} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px',fontWeight:'bold'}}>Dashboard</Typography>
                        </Grid>

                        <Grid>
                            <Tabs
                                value={this.state.value}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                indicatorColor={'secondary'}
                                onChange={this.handleChange}
                            >

                                <Tab value={'Product'} label=" Product" style={{color: 'white'}}/>
                                <Tab value=" Cart" label=" Cart" style={{color: 'white'}}/>

                            </Tabs>
                        </Grid>

                        <Grid  margin={'3vh'} width={'10vw'} display={'flex'} height={'9vh'} alignItems={"center"} justifyContent={'space-evenly'}>
                            <Avatar src="/broken-image.jpg"/>
                            <Typography style={{color: 'white',fontSize:'20px',}}>Danu</Typography>
                        </Grid>


                    </Grid>

                </Grid>

                <Grid width={'90vw'} display={"flex"} height={"90vh"} alignItems={"center"} justifyContent={'space-evenly'} flexWrap={"wrap"}>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>PRODUCTS</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'}
                              justifyContent={'center'}>
                            <Typography
                                style={{fontSize: '60px'}}>{this.state.dashBoardSummery.noOfRegisteredUsers}</Typography>
                        </Grid>


                    </Grid>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>CART</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'}
                              justifyContent={'center'}>
                            <Typography
                                style={{fontSize: '60px'}}>{this.state.dashBoardSummery.noOfBookingsForToday}</Typography>
                        </Grid>


                    </Grid>

                    <Grid width={'28%'} height={'50%'} display={"flex"} justifyContent={'center'}
                          flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"}
                              alignItems={'center'} justifyContent={'center'}>
                            <Typography style={{color: 'white',fontSize:'25px'}}>USERS</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'}
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