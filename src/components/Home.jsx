import React,{useEffect,useState} from 'react';
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
  import axiosInstance from './services/axiosInstance';
  
  import Autocomplete from '@material-ui/lab/Autocomplete';
import { Search as SearchIcon } from 'react-feather';
import AppBar from './AppBar';
import {httpPostwithToken} from './services/getAxios';
import {CartContextValue} from './ContextProvider';
import Card from './Card';
import Header from './Header';
import './Home.css';
import Checkout from './Checkout';


const items = [
    {name:'polo Tshirt',price:1999},
    {name:'louise Shirt',price:1999},
    {name:'Allion Tshirt',price:1999},
    {name:'Levis Jeans',price:1999}
  

]

export default function Home() {

const [data,setData] = useState([]);
const [categoryList,setCategoryList] = useState([]);
	const [productList,setProductList] = useState([]);
  const [cartData, dispatch] = CartContextValue();



  useEffect(()=>{
		//TODO check user login
		getCategory();
    getCartApi();
		
	},[])

  // const getItems = async () => {
  //   const res = await axiosInstance.get('/items');
  //   return res.data;
  // }



  // useEffect(() =>{
  //   const fetchItem = async () =>{
  //     const allItems = await getItems();
  //     setData(allItems);

  //   }
  //   fetchItem();
  // },[]);
  const getCartApi = () => {
    httpPostwithToken("addtocart/getCartsByUserId", {}).then(
      (res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            //alert("Successfully added..")
          } else {
            alert(data.message);
          }
        });
      },
      (error) => {
        alert(error.message);
      }
    );
  };
  const addCartApi = async (productObj) => {
    let obj = {
      productId: productObj.id,
      qty: "1",
      price: productObj.price,
    };
   await httpPostwithToken("addtocart/addProduct", obj)
      .then((res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            alert("Successfully added..");
          } else {
            alert(data.message);
          }
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);x
      });
  };

  const getCategory = async ()=>{
		await httpPostwithToken("product/getAllCategory",{}).
		then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					setCategoryList(response);
					getProductsByCategory(response[0].id);
				}else{
					alert("Error in category api..")
				}
			})
			
			
		})
	}

  const getProductsByCategory = (cat_id)=>{
		let obj = {
			"cat_id":cat_id
		}
		
		httpPostwithToken("product/getProductsByCategory",obj)
		.then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					if(response.length > 0){
						setProductList(response)
					}else{
						alert("No product found..");	
					}
				}else{
					setProductList([])
					alert("No product found..");
				}
			})
		},error=>{
			alert(error.message);
		}
		)
	}
    return (
        <div>
            <Header/>
            <Container>
            <div className="Home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        />
        </div>
        </div>
        </Container>
            <Container>
                <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
             
            </Grid>
                </Grid>
                <Grid container spacing={2}>
                 
                    {productList.map((row) =>{
                      return(
                      <Grid item xs={3} sm={3}>
                      <Card name={row.name} price={row.price}/>
                      <a
                            onClick={() => addCartApi(row)}
                            href="javascript:void(0)"
                          >
                            Add Cart
                          </a>
                      </Grid>
                     ) })}
                    
             </Grid>
            </Container>
            </div>
       
    )
}

