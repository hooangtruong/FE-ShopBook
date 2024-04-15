import { Order } from "@/lib/domain/order";
import axios from "../utils/index";

export const getOrder = async () => {
  try {
    const response = await axios.get("/order/getOrder");
    const order = response.data;
    return order;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderById = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.get(`/order/getOrder/${id}`);
    const order = response.data;
    return order;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderByIdUser = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.get(`/order/getOrderByIdUser/${id}`);
    const order = response.data;
    return order;
  } catch (error) {
    console.error(error);
  }
};

export const postOrder = async (data: Order) => {
  try {
    const response = await axios.post("/order/createOrder", data);
    const order = response.data;
    return order;
  } catch (error) {
    console.error(error);
  }
};
