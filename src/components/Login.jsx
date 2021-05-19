import React from 'react'
import {Card,TextField,CardContent,Grid,Container,Button,Typography} from '@material-ui/core';
import { Controller, useForm } from "react-hook-form";
import NavBar from "./NavBar";
import AppBar from "./AppBar";
import {Link} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { green,orange } from '@material-ui/core/colors';



const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

export default function Login() {

    const {register,handleSubmit,control} = useForm({});
    const onSubmit = data => {console.log(data);
    }
    return (
        <div>
            
            
            <ThemeProvider theme={theme}>
            <Container style={{paddingTop:'150px'}}>
                <Grid container justify="center">
                    <Grid item sm={3}></Grid>
                    <Grid item sm={3}>
            
                        <Card>
                            <CardContent>

                            <Typography   style={{fontWeight:'bold',textAlign:'center'}} variant="h6" >
 Login
</Typography>
            <form style={{paddingTop:'30px'}} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
            <Grid item sm={12}>
                                                <Controller
												as={TextField}
                                                size="small"
												className=""
												{...register('UserName', { required: true })}
												label="Username"
												autoFocus
												
												name="Username"
												defaultValue=""
												control={control}
												variant="outlined"
                                                fullWidth
                                                
											
											/></Grid>
                <Grid item sm={12}>
                                                <Controller
												as={TextField}
												size='small'
												{...register('Password', { required: true })}
												label="Password"
											id="name"
												
												name="Password"
												defaultValue=""
												control={control}
												variant="outlined"
                                                fullWidth
                                                
											
											/></Grid>
                                        
                        <Grid item xs={12}>                
                 <Link to ='/items'> <Button
                
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#ff781f',
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      alignItems:'center',
                      position: 'relative',
                      
                      margin: '20px 0px 20px 0px',
                     
                      
                    }}
                    color="primary"
                    size="medium"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Submit
                </Button></Link>
                <Typography
                color="#ff781f"
                variant="body1"
                >
                Haven't Registered yet?<a style={{color:'#ff781f'}} href="/">Register here</a> 
                </Typography>
                </Grid>
               
               

        </Grid>
            </form>
</CardContent>
            </Card>
            </Grid>
            <Grid item sm={3}></Grid>
            </Grid>
            
            </Container>
            </ThemeProvider>
        </div>
    )
}
