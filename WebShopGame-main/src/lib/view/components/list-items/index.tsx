import { Product } from "@/lib/domain/product";
import { CartContext } from "@/lib/hook/Context/cartItem";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { user } from "@/lib/redux/selector/selector";
import Link from "next/link";

interface PropsListItems {
  data: Array<Product>;
  category: string;
}
const ListItem = ({ data, category }: PropsListItems) => {
  const dataUser = useSelector(user);
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddCart = (data: Product) => {
    if (!dataUser) {
      router.push("/login");
    } else {
      const exists = cart.some((item) => item._id === data._id);
      const itemsProduct = {
        _id: data._id,
        title: data.title,
        urlImage: data.urlImage,
        category: data.category,
        quantity: 1,
        total: data.price,
      };
      if (exists) {
        const updatedCart = cart.map((item) => {
          if (item._id === data._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + data.price,
            };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        const updatedCart = [...cart, itemsProduct];
        setCart(updatedCart);
      }
    }
  };
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-6">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="#"
              >
                {category}
              </a>

              <div className="flex items-center" id="store-nav-content">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          {data
            .filter((item) => item.category === category)
            .map((items) => (
              <div
                key={items._id}
                className="w-full md:w-1/3 xl:w-1/4 p-3 flex flex-col"
              >
                <div className="p-3 bg-white rounded-md">
                  <Link href={`/products/${items._id}`}>
                    <img
                      className="hover:grow hover:shadow-lg"
                      src={`${items.urlImage}`}
                    />
                  </Link>
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{items.title}</p>
                    <svg
                      className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="pt-1 text-gray-900 text-lg font-medium">
                      {items.price} $
                    </p>
                    <button
                      className={`${
                        items.quantity == 0
                          ? "bg-gray-600 hover:bg-gray-500 text-white cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-500 text-white"
                      }  p-1 rounded-md font-medium `}
                      onClick={() => handleAddCart(items)}
                      disabled={items.quantity === 0}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
export default ListItem;
