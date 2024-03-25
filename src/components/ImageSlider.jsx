import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <p>Featured Headlines</p>
      <h2>
        Check out the latest news
        <br /> from around the world
      </h2>
      <Slider {...settings}>
        <div className="slider-item">
          <img
            src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/coffee-jpg-webp.webp"
            alt="Image 1"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/ben-weber-osPsRNOZwIA-unsplash2-jpg.webp"
            alt="Image 2"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/v2osk-pQ7GIGO6esE-unsplash-2-scaled.webp"
            alt="Image 3"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/masha-rostovskaya-vBqWmzKWwZU-unsplash-5-jpg.webp"
            alt="Image 4"
          />
        </div>
        <div className="slider-item">
          <img
            src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/pexels-aylmer-perdana-14685870-jpg-webp.webp"
            alt="Image 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
