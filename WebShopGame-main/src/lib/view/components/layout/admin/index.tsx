import { ReactNode, useContext, useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../sidebar";
import Header from "./header";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { user } from "@/lib/redux/selector/selector";
import { PopupContext } from "@/lib/hook/Context/popup";

interface PropsLayout {
  children?: ReactNode;
}

const DefaultLayout = ({ children }: PropsLayout) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname, push } = useRouter();
  const router = pathname.split("/")[1];
  const dataUser = useSelector(user);
  const { popup } = useContext(PopupContext);

  useEffect(() => {
    if (router == "admin" && dataUser.admin == false) {
      push("/");
    }
  });

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className={`${popup ? "disable-scroll" : ""}`}>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
