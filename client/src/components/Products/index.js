import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

function Products() {
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
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    });

}

export default Products;