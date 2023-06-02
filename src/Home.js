import React, {Component} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './static/img5.JPG';
import img2 from './static/img6.JPG';
import img3 from './static/img4.JPG';

export class Home extends Component {
  render() {
    return (
    <div>

        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img1} />
                </div>
            </Carousel>
        </div>


      </div>
    )
  };
}

