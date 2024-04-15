import { category } from "@/lib/config/category";
import { Product } from "@/lib/domain/product";
import React from "react";
import Slider from "react-slick";
interface ListSliderProps extends React.PropsWithChildren<{}> {
  data: Array<Product>;
}

const SimpleSlider: React.FC<ListSliderProps> = ({ data }) => {
  const settingsSliderMain = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  const settingsSlierBar = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  const dataProductIsHot = data.filter((items) => items.isHot == true);
  // const dataProductNew = data.filter((items)=> items.);
  return (
    <section className="container mx-auto grid grid-cols-6 gap-3">
      <div className="col-span-1">
        <ul className="text-center bg-white h-full border rounded-md">
          {category.map((items) => (
            <li key={items.id}>
              <a
                href="#"
                className="flex items-center p-2 justify-between text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span>
                  {items.title[0].toUpperCase() + items.title.slice(1)}
                </span>
                <img src={items.icon} alt="icon" width={23} height={23} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border p-3 col-span-5 rounded-md bg-white">
        <div>
          <Slider {...settingsSliderMain}>
            {dataProductIsHot.map((items) => (
              <div key={items._id}>
                <img src={items.urlImage} className="w-full " alt="image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-white col-span-6 border rounded-md p-3">
        <Slider {...settingsSlierBar}>
          {dataProductIsHot.map((items) => (
            <div key={items._id}>
              <img
                src={items.urlImage}
                className="w-full max-h-[206px] "
                alt="image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default SimpleSlider;
