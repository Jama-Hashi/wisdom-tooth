import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import proverbs from "../utils/utils";
import ProverbCard from "./ProverbCard";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <div className="">
      <div>
        <Slider {...settings}>
          {proverbs.map((proverb) => (
            <ProverbCard key={proverb.proverb} proverb={proverb} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
