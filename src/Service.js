import mycss from './mycss.module.css';
import {  Container,Row,Col,Button } from 'react-bootstrap';


const Service = () =>
{
    return(
        <div className={mycss.service}>
            <Container>
                <h1>What We Offer</h1>
                <Row className={mycss.allboxs}>
                    <Col className={mycss.card}>
                        <img src={require('./image/serv-1.png')} alt=""/>
                        <h3>complete guide</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>
                    </Col>
                    <Col className={mycss.card}>
                    <img src={require('./image/serv-2.png')} alt=""/>
                        <h3>Custom Packages</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>

                    </Col>
                    <Col className={mycss.card}>
                    <img src={require('./image/serv-3.png')} alt=""/>
                        <h3>Family Trips</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>

                    </Col>
                    </Row>
                    <Row className={mycss.allboxs}>
                    <Col className={mycss.card}>
                    <img src={require('./image/serv-4.png')} alt=""/>
                        <h3>Train Guides</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>

                    </Col>
                    <Col className={mycss.card}>
                    <img src={require('./image/serv-5.png')} alt=""/>
                        <h3>Adventure Trail</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>

                    </Col>
                    <Col className={mycss.card}>
                    <img src={require('./image/serv-6.png')} alt=""/>
                        <h3>Various Adventures</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                        <Button variant="success">Read More</Button>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Service