import Cart from "@/lib/hook/Context/cartItem";
import Popup from "@/lib/hook/Context/popup";
import Layout from "@/lib/view/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "../lib/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Cart>
        <Popup>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Popup>
      </Cart>
    </Provider>
  );
}
