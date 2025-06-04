import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image src='https://tse3.mm.bing.net/th?id=OIP.DQiyt49WrAh_leqSMregewHaDt&pid=Api&P=0&h=180' alt='caurosel image' className='w-100'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://tse3.mm.bing.net/th?id=OIP.3ugFFLhNlSaex_NSkzv_5gHaDI&pid=Api&P=0&h=180' alt='caurosel image' className='w-100'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://tse3.mm.bing.net/th?id=OIP.DQiyt49WrAh_leqSMregewHaDt&pid=Api&P=0&h=180' alt='caurosel image' className='w-100'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;