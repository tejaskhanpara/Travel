import { Carousel } from 'react-bootstrap';
import mycss from './mycss.module.css';



function Home()
{
    return(
       <div>
           <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./image/home-bg-1.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption className={mycss.slidecap}>
                    <h3>Never Stop</h3>
                    <h1>EXPLORING</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./image/home-bg-2.jpg')}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Make Tour</h3>
                    <h1>AMAZING</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('./image/home-bg-3.jpg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Explore The</h3>
                    <h1>NEW WORLD</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </div>
    )
}

export default Home