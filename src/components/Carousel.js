import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash'
import '../css/Carousel.css'


class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true
    };
    const slideShow = this.props.books.map((book) =>
      <div
        className="book-slide"
        key={book.id}
        >
        <h3 tabIndex="0">{book.title}</h3>
        <em> by: {book.author} </em>
        <div className="container">
          <div className="col">
            <img tabIndex="0" src={book.img_url} alt="Not Found"/>
          </div>
          <div className="col">
            {_.take(book.desc, 700)}...
          </div>
          <div className="col">
            <img tabIndex="0" src={book.accessibile} alt="Not Found"/>
          </div>
        </div>
        <br/>
      </div>
    )
    return (
      <Slider {...settings}>
        {slideShow}
      </Slider>
    );
  }
}

export default Carousel;
