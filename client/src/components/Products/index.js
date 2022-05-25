import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";
import { addToCart } from '../../slices/cartSlice';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    const [getData, setGetData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/products`)
            const resData = await response.json()
            setGetData(resData)
        }
        fetchData()
    }, [])

    console.log(getData)
    return getData.map((product) => {
        console.log(product)
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image_url} />
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.product_description}</Card.Text>
                    <Button variant="primary" onClick={() => handleAddToCart(product)}>Buy Now</Button>
                </Card.Body>
            </Card>
        )
    });

}

export default Products;