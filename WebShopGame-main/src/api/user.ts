import { User } from "@/lib/domain/user";
import axios from "../utils/index";

export const getUser = async () => {
  try {
    const response = await axios.get("/user/getAllUser");
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};
export const getUserById = async (id: string | string[] | undefined) => {
  try {
    const response = await axios.get(`/user/getUser/${id}`);
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const postUser = async (data: User) => {
  try {
    const response = await axios.post("/user/createUser", data);
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const updateItemUser = async (data: User, id: string) => {
  try {
    const response = await axios.put(`/user/updateUser/${id}`, data);
    const producs = response.data;
    return producs;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`/user/deleteUser/${id}`);
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};
