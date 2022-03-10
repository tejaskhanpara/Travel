import mycss from './mycss.module.css';
import {  Container,Row,Col,Button } from 'react-bootstrap';

const Client = () =>
{
    return(
        <div className={mycss.clients}>
            <Container>
                <Row className={mycss.client}>
                    <Col><img src={require('./image/client-logo-1.png')}/></Col>
                    <Col><img src={require('./image/client-logo-2.png')}/></Col>
                    <Col><img src={require('./image/client-logo-3.png')}/></Col>
                    <Col><img src={require('./image/client-logo-4.png')}/></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Client