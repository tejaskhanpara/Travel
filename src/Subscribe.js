import mycss from './mycss.module.css';
import {  Container,Row,Col,Button,Form } from 'react-bootstrap';

const Subscribe = () =>
{
    return(
        <div className={mycss.subscribe}>
            <Container>
                <Row>
                    <Col className={mycss.subscribecontect}>
                        <h1 >Subscirbe Now</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsam repellat nostrum esse officiis unde quisquam corporis doloremque adipisci similique!</p>
                        <Form>
                            <Form.Group >
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter Email" />
                            
                            </Form.Group>
                            <Button variant="outline-success" type="submit">Subscribe</Button>
                        </Form>
                        <h6>We'll never share your email with anyone else.</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subscribe