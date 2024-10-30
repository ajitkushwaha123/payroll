"use client";

import React, { useEffect, useState } from "react";
// import { Pagination } from "@nextui-org/pagination";
import PriceFormatter from "@/helper/PriceFormatter";
import Link from "next/link";

const totalOrders = [
  {
    _id: "1",
    products: [
      {
        product: {
          productName: "Product Name",
        },
      },
    ],
    price: 100,
    createdAt: "2022-01-01",
    orderStatus: "completed",
  },
  {
    _id: "2",
    products: [
      {
        product: {
          productName: "Product Name",
        },
      },
    ],
    price: 100,
    createdAt: "2022-01-01",
    orderStatus: "completed",
  },
  {
    _id: "3",
    products: [
      {
        product: {
          productName: "Product Name",
        },
      },
    ],
    price: 100,
    createdAt: "2022-01-01",
    orderStatus: "completed",
  },
];

const RecentOrders = () => {
  const [page, setPage] = useState(1);
  const ordersPerPage = 8;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const formattedDate = (dateString) => {
    const dateObject = new Date(Date.parse(dateString));
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(dateObject);
  };

  return (
    <>
      <div className="bg-white py-5 rounded-md">
        <h2 className="text-start text-[18px] px-7 font-medium pb-[12px]">
          Recent Orders
        </h2>
        <div className="md:px-7">
          {totalOrders === 0 ? (
            <div className="flex py-[50px] justify-center items-center flex-col">
              {/* <img width={"200px"} src={productImg} alt="No Orders" /> */}
              <p className="font-medium my-[20px] font-poppins text-[22px]">
                No Orders Yet
              </p>
              <p>
                Add products href your store and start selling href see orders here.
              </p>
              <Link href={"/inventory/new-product"}>
                <button className="bg-primary text-white px-5 py-2 rounded-md mt-5">
                  + Add Products
                </button>
              </Link>
            </div>
          ) : (
            <div className="max-h-[700px] overflow-y-scroll chalaja">
              {totalOrders.map((order, index) => (
                <Link href={`/order-view/${order._id}`}>
                  <div
                    key={index}
                    className="flex border-b-2 rounded-lg border-slate-100 px-5 py-2 justify-between"
                  >
                    <div className="flex">
                      <div>
                        <img
                          className="w-[60px] h-[60px] object-cover rounded-md"
                          src={
                            // firstImage[index] ||
                            "https://res.cloudinary.com/drku1djt5/image/upload/fl_preserve_transparency/v1723651866/delivery-man_v3vwub.jpg?_s=public-apps"
                          }
                          alt="Order item"
                        />
                      </div>
                      <div className="ml-[20px] flex flex-col text-start">
                        <div>
                          {order.products.length > 0 && (
                            <h3>
                              {order.products[0].product?.productName ||
                                "No Product Name"}
                            </h3>
                          )}
                        </div>
                        <div>{<PriceFormatter price={order.price} />}</div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p>{formattedDate(order.createdAt)}</p>
                      </div>
                      {order.orderStatus === "completed" && (
                        <div className="bg-secondary rounded-sm mt-[8px]">
                          <h2 className="text-success">Completed</h2>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center pb-[14px]">
        {/* <Pagination
          isCompact
          //   total={Math.ceil(totalOrders / ordersPerPage)}
          initialPage={page}
          onChange={handlePageChange}
        /> */}
      </div>
    </>
  );
};

export default RecentOrders;
