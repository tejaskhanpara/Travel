import mycss from './mycss.module.css';
import {  Container,Row,Col,Button } from 'react-bootstrap';


const Footer = () =>
{
    return(
        <div className={mycss.footer}>
            <Container>
                <Row>
                    <Col>
                        <h3>Quick links</h3>
                        <Row><a href="Slider.js">Home</a></Row>
                        <Row><a href="Adventure.js">Adventure</a></Row>
                        <Row><a href="About.js">About</a></Row>
                        <Row><a href="Offer.js">Offer</a></Row>
                        <Row><a href="Review.js">Reviews</a></Row>
                        <Row><a href="Subscribe.js">Subscribe</a></Row>
                    </Col>
                    <Col>
                        <h3>Extra links</h3>
                        <Row><a href="#">My Account</a></Row>
                        <Row><a href="#">My Order</a></Row>
                        <Row><a href="#">My Wishlist</a></Row>
                        <Row><a href="#">Ask Questions</a></Row>
                        <Row><a href="#">Terms of Use</a></Row>
                        <Row><a href="#">Privacy Policy</a></Row>   
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <Row><a href="#"> +123-456-7890 </a></Row>
                        <Row><a href="#">  +111-222-3333 </a></Row>
                        <Row><a href="#">  khanparatejas@gmail.com </a></Row>
                        <Row><a href="#">  surat , india - 395006 </a></Row>
                    </Col>
                    <Col>
                        <h3>Social Site</h3>
                        <Row><a href="#">  facebook </a></Row>
                        <Row><a href="#">  twitter </a></Row>
                        <Row><a href="#">  instagram </a></Row>
                        <Row><a href="#">  linkedin </a></Row>
                        <Row><a href="#">  github </a></Row>                        
                    </Col>
                </Row>
                <Row><Col className={mycss.designer}>created by  <span>Raghu, The Web Designer.  </span> all right reserved!</Col></Row>
            </Container>
        </div>
    )
}

export default Footer