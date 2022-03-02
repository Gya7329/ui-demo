import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { getProduct } from "../../omsClient/product";
import "./product.css";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
export const Product = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const useAuth = () => {
    const { user } = useContext(UserContext);
    return user && user.loggedIn;
  };

  useEffect(() => {
    let isSubscribed = true;
    getProduct((productItem, err) => {
      if (err) {
        setError(err);
        return;
      }
      if (isSubscribed) {
        setProduct(productItem);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  const isAuth = useAuth();

  return (
    <div className="box-styles">
      {product.map((prd) => (
        <Card key={prd.id} sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            className="card-image"
            component="img"
            image={prd.image}
            alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prd.title}
            </Typography>

            {isAuth && (
              <Typography variant="h2" color="text.secondary">
                ${prd.price}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button>+</Button>
            <TextField variant="outlined" />
            <Button>-</Button>
          </CardActions>
          <CardActions>
            {isAuth ? (
              <Button>
                <Link to="/">BUY ONLINE</Link>
              </Button>
            ) : (
              <Button>
                <Link to="/login">Please Login for See the price</Link>
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
