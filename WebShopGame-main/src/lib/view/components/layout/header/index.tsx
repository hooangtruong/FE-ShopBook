import { CartContext } from "@/lib/hook/Context/cartItem";
import Link from "next/link";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "@/lib/redux/selector/selector";
import { setUser } from "@/lib/redux/action/user";
import { User } from "@/lib/domain/user";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  const dataUser: User = useSelector(user);
  const dispath = useDispatch();

  const handleCheckOut = () => {
    localStorage.clear();
    dispath(
      setUser({
        _id: "",
        username: "",
        urlavatar: "",
        address: "",
        email: "",
        admin: false,
        createdAt: "",
        updatedAt: "",
      })
    );
    setCart([]);
  };

  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 ">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href={"/"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Link href={"/"} className="order-1 md:order-2">
          <p className="flex items-center tracking-wide no-underline hover:no-underline font-black text-gray-800 text-xl ">
            <svg
              className="fill-current text-gray-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            DuckShop
          </p>
        </Link>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <Link
            href={"/cart/detail"}
            className="pl-3 no-underline hover:text-black flex cursor-pointer"
          >
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
            <p className="text-red-500">({cart.length})</p>
          </Link>
          <div className="pl-3 cursor-pointer font-medium">
            {dataUser.username == "" ? (
              <Link href={"/login"}>Log in</Link>
            ) : (
              <div className="group">
                <button
                  className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 "
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    src={dataUser.urlavatar}
                    className="rounded-full"
                    alt="Avatar"
                    width={24}
                    height={24}
                  />
                  {dataUser.username}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div className="absolute z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <div className="px-4 py-3 text-sm text-gray-900 ">
                    <div className="truncate">{dataUser.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 ">
                    {dataUser.admin == true && (
                      <li>
                        <Link
                          href="/admin"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Admin
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link
                        href="/user/details"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/order"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Order
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2" onClick={handleCheckOut}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
