import React,{useState} from 'react'
import {Card,TextField,CardContent,Grid,Container,Button,Typography} from '@material-ui/core';
import { Controller, useForm } from "react-hook-form";
import NavBar from "./NavBar";
import AppBar from "./AppBar";
import {Link} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { green,orange } from '@material-ui/core/colors';
import {httpPost} from './services/getAxios';


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
    const[mobile,setMobile] = useState('');
    const[password,setPassword] = useState('');
    const [signin,setSignIn] = useState('');


    const loginApi = async ()=>{
      if(mobile == ""){
        alert("Mobile should not be empty");
        return;
      }else if(password == ""){
        alert("password should not be empty");
        return;
      }
      let jsonOBj = {"mobile":mobile,"password":password }
      
     await httpPost("login/user",jsonOBj)
      .then(res => res.json())
      .then((res)=>{
        if(res['token'] != null){
          localStorage.setItem("token",res['token']);//token
          localStorage.setItem("user_id",res['user_profile_details']['user_id']);//user_id
        
          setTimeout(() => {
            window.location.href = `${window.location.origin}/home`;
          }, 1000);
          //getCategory();
        }else{
          alert(res['message']);	
        }
        
        //console.log(res);
        
      },error=>{
        alert(error.message);
      }
      )
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
            <form style={{paddingTop:'30px'}} onSubmit={handleSubmit(loginApi)}>
            <Grid container spacing={2}>
            <Grid item sm={12}>
                         {/* <Controller
												as={TextField}
                                                size="small"
												className=""
												{...register('Mobile', { required: true })}
												label="Mobile"
												autoFocus
												
												name="Mobile"
												defaultValue=""
												control={control}
												variant="outlined"
                                                fullWidth
                                                
											
											/> */}

<input onChange={(e)=>setMobile(e.target.value)} name="Mobile" placeholder="Enter Mobile" type="text" required=""/>						

                      
                      </Grid>
                <Grid item sm={12}>
                       {/* <Controller
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
                                                
											
											/> */}
              	<input onChange={(e)=>setPassword(e.target.value)} name="Password" placeholder="Enter Password" type="password" required=""/>						

                      
                      </Grid>
                                        
                        <Grid item xs={12}>                
                  <Button
                
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
                </Button>
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
