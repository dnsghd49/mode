import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

function Products() {
    const [githubData, setgithubData] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/dnsghd49')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setgithubData(data)
            })
    }, [])

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Products;