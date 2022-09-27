import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: "C01",
    image:
      "https://traffic-edge55.cdn.vncdn.io/nvn/ncdn/store/7534/bn/tulip_resize.png",
    name: "Hoa tulip",
  },
  {
    id: "C02",
    image:
      "https://traffic-edge44.cdn.vncdn.io/nvn/ncdn/store/7534/bn/astronaut_resize.png",
    name: "Astronaut",
  },
  {
    id: "C03",
    image:
      "https://traffic-edge44.cdn.vncdn.io/nvn/ncdn/store/7534/bn/resize_tulip.png",
    name: "Team Tulip",
  },
  {
    id: "C04",
    image:
      "https://traffic-edge32.cdn.vncdn.io/nvn/ncdn/store/7534/bn/Ly_coc_rz.png",
    name: "Ly cốc",
  },
  {
    id: "C05",
    image:
      "https://traffic-edge35.cdn.vncdn.io/nvn/ncdn/store/7534/bn/Resize_gau_bong.jpeg",
    name: "Gấu bông",
  },
  {
    id: "C06",
    image:
      "https://traffic-edge17.cdn.vncdn.io/nvn/ncdn/store/7534/bn/photo_output_4.JPG",
    name: "Sổ vở",
  },
  {
    id: "C07",
    image:
      "https://traffic-edge46.cdn.vncdn.io/nvn/ncdn/store/7534/bn/1FE0774B_B5AE_42E5_839A_04A0CE6BC81F.jpeg",
    name: "Đồ dùng học tập",
  },
];

const CarouselCenter = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CarouselCenter;
