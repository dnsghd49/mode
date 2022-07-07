import "./style.css"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import SlideShow from "../../components/SlideShow"

function Main() {
    return (
        <div>
            <SlideShow />
            <h1>Fezzane<br />Fast & Sustainable <br /> Fashion </h1>
            <CardGroup className="cus-sty">
                <Card>
                    <Card.Img variant="top" src="https://github.com/dnsghd49/imgdump/blob/main/img/3.png?raw=true" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://github.com/dnsghd49/imgdump/blob/main/img/4.png?raw=true" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://github.com/dnsghd49/imgdump/blob/main/img/5.png?raw=true" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Main