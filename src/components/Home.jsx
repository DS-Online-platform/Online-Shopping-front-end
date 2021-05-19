import React from 'react';
import {
    Button,
    TextField,
    makeStyles,
    Grid,
    InputAdornment,
    Typography,
    SvgIcon,
    Box,
    Container,
    withStyles
  } from '@material-ui/core';
  import Autocomplete from '@material-ui/lab/Autocomplete';
import { Search as SearchIcon } from 'react-feather';
import AppBar from './AppBar';
import Card from './Card';


const items = [
    {name:'polo Tshirt',price:1999},
    {name:'louise Shirt',price:1999},
    {name:'Allion Tshirt',price:1999},
    {name:'Levis Jeans',price:1999}
  

]

export default function Home() {
    return (
        <div>
            <AppBar/>
            <Container>
                <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
              <Autocomplete
                size="medium"
                noOptionsText={'No search result found'}
                 options={items}
                getOptionLabel={(option) => option.name}
                // onChange={(event, value) => { onSearchItemClick(event, value) }}
                key={(option) => option.email}
                renderInput={params => (
                  <TextField
                    style={{ backgroundColor: '#EDEFF5' }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon fontSize="small" color="action">
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    {...params}
                    variant="outlined"
                    placeholder="Search by Name / Email"
                    margin="normal"
                    // onChange={onSearchChange}
                    fullWidth
                  />
                )}
              />
            </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid xs={12} item sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid xs={12} item sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card Name="Polo Tshirt" price="Rs1999"/>
                  </Grid>
                  
                </Grid>
            </Container>
        </div>
    )
}

