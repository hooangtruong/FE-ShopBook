import { Order } from "@/lib/domain/order";
import axios from "../utils/index";

export const payOrder = async (data: Order) => {
  try {
    const payment = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Iphone 15 Promax",
                sku: "001",
                price: "25.00",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "25.00",
          },
          description: "Iphone 15 Promax",
        },
      ],
    };
    const response = await axios.post("/paypal/pay", payment);
    const hrefSandbox = response.data;
    return hrefSandbox;
  } catch (error) {
    console.error(error);
  }
};
