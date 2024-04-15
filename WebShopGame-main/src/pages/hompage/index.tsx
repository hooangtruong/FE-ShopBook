import { getListProduct } from "@/api/product";
import { Product } from "@/lib/domain/product";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "@/lib/view/components/slider";
import ListItem from "@/lib/view/components/list-items";
import About from "@/lib/view/components/about";
import { category } from "@/lib/config/category";

const HomePage = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListProduct();
      setProduct(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <SimpleSlider data={product} />
      {category.map((items) => (
        <ListItem key={items.id} data={product} category={items.title} />
      ))}
      <About />
    </>
  );
};
export default HomePage;
