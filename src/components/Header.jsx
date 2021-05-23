import React,{useState} from "react";
import "./Header.css";
import {Button} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import {Grid,Container} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {httpPost} from './services/getAxios';
import Checkout from './Checkout';

import {CartContextValue} from './ContextProvider';
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width:300
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function Header() {
  
  const[showCartPopup,setShowCartPopup] = useState(false);
  const [cartData,dispatch]= CartContextValue();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const getTotalAmount=()=>{
		return cartData.cartItems.reduce((prevValue,currentValue)=>prevValue+currentValue.price,0);
	}



  return (
    <>
    <div className="header">
    <span className="headerlinename">
    Albito
    </span>
   
     

      <div className="header_option">
        <span className="headerlineonefirst">Deliver to</span>
        <span className="headerlinetwo">Sri Lanka</span>
      </div>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="headerlineone">Hello</span>
          <span className="headerlinetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="headerlineone">Returns</span>
          <span className="headerlinetwo">Order</span>
        </div>
       
    
          <div className="header_optionBasket">
            <Button  onClick={handleClickOpen} type="submit">
            <ShoppingCartIcon />
            <span className="headerlinetwo header_basketCount">
            {cartData.cartItems.length}
            </span>
</Button>
<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Your Cart
        </DialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography> */}
{
  	cartData.cartItems.map(cartObj=>(
     <>
        <div>
        <Typography gutterBottom>{cartObj.name}</Typography>
        <Typography>{cartObj.price}</Typography>
        </div>
     
    </>

    
    ))
    
} 
<div>
      <span>Total: </span>
      
       <span>Rs.{	getTotalAmount()}</span>
    </div>
          
        </DialogContent>
        <DialogActions>
        <Checkout amount={getTotalAmount}/>
        </DialogActions>
      </Dialog>
     



          </div>
        
      </div>
    </div>
   

       </>
  );
}

export default Header;
