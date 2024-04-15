import { ProductPost } from "@/lib/domain/product";
import axios from "../utils/index";

export const getListProduct = async () => {
  try {
    const response = await axios.get("/product/getAllProducs");
    const producs = response.data;
    return producs;
  } catch (error) {
    console.error(error);
  }
};

export const getItemProduct = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.get(`/product/getItemProducs/${id}`);
    const producs = response.data;
    return producs;
  } catch (error) {
    console.error(error);
  }
};

export const updateItemProduct = async (data: ProductPost, id: string) => {
  try {
    const response = await axios.put(`/product/updateProduct/${id}`, data);
    const producs = response.data;
    return producs;
  } catch (error) {
    console.error(error);
  }
};

export const updateProductQuantity = async (data: any) => {
  try {
    const response = await axios.put("/product/updateProductQuantity", data);
    const product = response.data;
    return product;
  } catch (error) {
    console.error(error);
  }
};

export const postProduct = async (data: ProductPost) => {
  try {
    const response = await axios.post("/product/createProduct", data);
    const product = response.data;
    return product;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`/product/deleteProduct/${id}`);
    const product = response.data;
    return product;
  } catch (error) {
    console.error(error);
  }
};
