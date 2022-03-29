import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div className="bg-red-200">
              <h3>1</h3>
            </div>
            <div className="bg-red-400">
              <h3>2</h3>
            </div>
            <div className="bg-red-800">
              <h3>3</h3>
            </div>
            <div className="bg-red-100">
              <h3>4</h3>
            </div>
            <div className="bg-red-500">
              <h3>5</h3>
            </div>
            <div className="bg-red-50">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
}

export default Testimonials;