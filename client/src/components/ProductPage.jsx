import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Product.css';
import DataService from '../service/dataservice';
import { Link } from 'react-router-dom';

function ProductPage  () {

  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await DataService.getProducts("/api/products");
      setBackendData(data);
    }catch(error) {
      console.log("Error fetching data:", error);
    }

  }

  return (
    <div className="container product-margin">
        <div className="prodrow row">
        <div>
            <h1>
            <i className="fa-solid fa-box-open tracking-in-expand-fwd"></i>
            <div className='tracking-in-expand-fwd'>
            ALL PRODUCTS
            </div></h1>
        </div>
            {backendData.map ((product) => (
              
            <div key={product.id} className="prodcol col">
              <Card className='card ' sx={{ maxWidth: 345 }}>
                <CardMedia
                  className='cardmedia'
                  component="img"
                  alt={product.title}
                  height="300"
                  image={product.filepath}
                />
                <CardContent className='cardcontent'>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions className='btncontainer'>
                  <Button className='btn' size="small">
                    <Link className='btndetails' to={`/details/${product.id}`}>Details</Link>
                  </Button>
                </CardActions>
              </Card>
            </div>
            ))}
        </div>
    </div>
    )
  }

export default ProductPage;







