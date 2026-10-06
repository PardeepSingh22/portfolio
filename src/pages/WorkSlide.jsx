import SliderModule from "react-slick";

const Slider = SliderModule.default || SliderModule;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkSlide = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,

    // Auto slide
    autoplay: true,
    autoplaySpeed: 2500,

    speed: 600,

    // Desktop
    slidesToShow: 3,
    slidesToScroll: 1,

    // Responsive
    responsive: [
      {
        // Tablet
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        // Mobile
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="work-slider">
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>

        <div>
          <h3>Slide 2</h3>
        </div>

        <div>
          <h3>Slide 3</h3>
        </div>

        <div>
          <h3>Slide 4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default WorkSlide;
