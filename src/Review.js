import mycss from './mycss.module.css';
import {  Container,Row,Col,Button } from 'react-bootstrap';

const Review = () =>
{
    return(
        <div className={mycss.review}>
            <Container>
                <Row>
                    <h1>Client Review</h1>
                    <Col className={mycss.all}>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className={mycss.concepts}>
                            <img src={require('./image/pic-1.png')}/>
                            <div>
                                <h3>Nobita</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </Col>

                    <Col className={mycss.all}>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className={mycss.concepts}>
                            <img src={require('./image/pic-2.png')} alt=""/>
                            <div>
                                <h3>Sizuka</h3>
                                <span>Devloper</span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col className={mycss.all}>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                        <div className={mycss.concepts}>
                            <img src={require('./image/pic-3.png')} alt=""/>
                            <div>
                                <h3>Dekisugi</h3>
                                <span>Coder</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Review