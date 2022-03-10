import {  Container,Row,Col,Button } from 'react-bootstrap';
import mycss from './mycss.module.css';



const Category = () =>
{
    return(
        <Container >
            <section className={mycss.category}>

                <h1 className={mycss.heading}>Adventure idea!</h1>

                
                <Row>
                    <Col>
                        <div className={mycss.box}>
                            <img src={require('./image/category-1.jpg')} alt=""/>
                            <h3>Bungee Jump</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                            {/* <a href="#">read more</a> */}
                            <Button variant="outline-success">Read More</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className={mycss.box}>
                            <img src={require('./image/category-2.jpg')} alt=""/>
                            <h3>Zip Lines</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                            {/* <a href="#">read more</a> */}
                            <Button variant="outline-success">Read More</Button>

                        </div>
                    </Col>
                    <Col>
                        <div className={mycss.box}>
                            <img src={require('./image/category-3.jpg')} alt=""/>
                            <h3>Canoeing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                            {/* <a href="#">read more</a> */}
                            <Button variant="outline-success">Read More</Button>

                        </div>
                    </Col>
                    <Col>
                        <div className={mycss.box}>
                            <img src={require('./image/category-4.jpg')} alt=""/>
                            <h3>Kayaking</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                            {/* <a href="#">read more</a> */}
                            <Button variant="outline-success">Read More</Button>

                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Category