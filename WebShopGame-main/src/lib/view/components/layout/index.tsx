import React, { ReactNode, useContext, useEffect } from "react";
import Footer from "./footer";
import { useRouter } from "next/router";
import Header from "./header";
import DefaultLayout from "./admin";
import { useSelector } from "react-redux";
import { auth } from "@/lib/redux/selector/selector";
interface PropsLayout {
  children?: ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  const { pathname } = useRouter();
  const router = pathname.split("/")[1];
  const token = useSelector(auth);

  useEffect(() => {
    token &&
      typeof window !== "undefined" &&
      localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <>
      {router == "admin" ? (
        <DefaultLayout children={children} />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
export default Layout;
