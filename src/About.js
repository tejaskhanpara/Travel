import mycss from './mycss.module.css';
import {  Container,Row,Col,Button } from 'react-bootstrap';


const About = () =>
{
    return(
        <div className={mycss.about}>
            <Container>
                <Row>
                    <Col>
                    <div className={mycss.pic}>
                        <img src={require('./image/about-img.jpg')}/>
                    </div>
                    </Col>
                    <Col>
                        <div className={mycss.content}>
                            <h3>Memorable Outdoor Experiences</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                            <Button variant="success">Read More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default About