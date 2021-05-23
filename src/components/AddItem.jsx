import React,{useState} from 'react'
import {Card,TextField,CardContent,Grid,Container,Button,Typography} from '@material-ui/core';
import { Controller, useForm } from "react-hook-form";
import NavBar from "./NavBar";
import AppBar from "./AppBar";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import axios from 'axios';
import axios from './services/axiosInstance';

import { green,orange } from '@material-ui/core/colors';
import { Database } from 'react-feather';



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

export default function AddItem() {

    const {register,handleSubmit,control} = useForm({});
    const onSubmit = data => {console.log(data);
    }
    const[value,setValue] = useState({});

    const handleFormSubmit = async (data) =>{
      console.log(data)
      const obj={
        name:data.name,
        price:data.price

      }
      const res = await axios.post (
        '/items',obj)
        console.log(res);
      setValue(res.data);
     
      

			if (res === 200) {
			alert('Form submitted Successfully');
			} else {
				alert('Form Submitted UnSuccessfully');
			}
		}
      

    
    return (
        <div>
            <AppBar/>
            <NavBar/>
            
            <ThemeProvider theme={theme}>
            <Container style={{paddingTop:'100px'}}>
                <Grid container justify="center">
                    <Grid item sm={3}></Grid>
                    <Grid item sm={6}>
                    <Typography variant="h4" >
 Add Item
</Typography>
                        <Card>
                            <CardContent>

                            
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
            <Grid item sm={12}>
            </Grid>
                <Grid item sm={12}>
                       <Controller
												as={TextField}
												
												{...register('name', { required: true })}
												label="Item Name"
											id="name"
												
												name="name"
												defaultValue=""
												control={control}
												variant="outlined"
                      fullWidth
                                                
											
											/></Grid>
                    <Grid item sm={12}>
                        <Controller
												as={TextField}
												className=""
												{...register('price', { required: true })}
												label="Item Price"
												
												
												name="price"
												defaultValue=""
												control={control}
												variant="outlined"
                                                fullWidth
                                                
											
											/>
                                            </Grid>
                        <Grid item xs={12}>                
                  <Button
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#ff781f',
                      textTransform: 'capitalize',
                      borderRadius: '8px',
                      float: 'left',
                      position: 'relative',
                      bottom: '10px',
                      margin: '60px 0px 20px 0px',
                      width: "200px"
                    }}
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                </Button>
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

