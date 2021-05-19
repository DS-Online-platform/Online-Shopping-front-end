import React,{useState,useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Grid,Container} from '@material-ui/core';
import NavBar from '../NavBar';
import AppBAr from '../AppBar';
// import axios from 'axios';
import axiosInstance from '../services/axiosInstance';
import ItemRows from './ItemRows';

const columns = [
  { id: 'itemID', label: 'Item Id', minWidth: 170},
  { id: 'itemName', label: 'Item Name', minWidth: 170 },
  {
    id: 'ItemPrice',
    label: 'Price',
    minWidth: 170,
  
 
  },
  {
      id:'actions',
      label:'Actions',
      align:'left',
      minWidth:200
      
  }

];

function createData(itemID,itemName,ItemPrice) {

  return {itemID,itemName,ItemPrice };
}

const rows = [
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),
  createData('IT101','Polo Tshirt',1999),

];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[data,setData] = useState([]);


  const getItems = async () => {
    const res = await axiosInstance.get('/items');
    return res.data;
  }
  useEffect(() =>{
    const fetchItem = async () =>{
      const allItems = await getItems();
      setData(allItems);
     
      

    }
    fetchItem();
  },[]);

  

 

 

  return (
      <>
      <AppBAr/>
      <NavBar/>
      <Container>
          <Grid container justify="center" spacing={2}>
              <Grid item sm={2}></Grid>
              <Grid style={{paddingTop:'30px'}} item sm={10}>
              <Paper className={classes.root}>
             
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table"> 
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
							{data.map(row => {
								return <ItemRows key={row.id} {...row} />;
							})}
						</TableBody>
        </Table>
      </TableContainer>
     
    </Paper>
              </Grid>

          </Grid>
      </Container>

   
    </>
  );
}

