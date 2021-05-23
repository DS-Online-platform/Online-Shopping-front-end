import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from "./StateProvider";

import Checkout from './Checkout';
import { CheckBoxOutlineBlankSharp } from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 160,
  },
  image:'100%'
});

export default function CardItem({name,price,id}) {
  const classes = useStyles();



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image="https://lifemobile.lk/wp-content/uploads/2020/10/Apple-iPhone-12-Blue.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
