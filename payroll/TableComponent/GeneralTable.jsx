"use client";
import { Avatar } from "@nextui-org/avatar";
import React, { useEffect, useState } from "react";
// import {
//   Pagination,
// } from "@nextui-org/pagination";
import Icon from "@/helper/Icon";
import Link from "next/link";
import PriceFormatter from "@/helper/PriceFormatter";
// import TaskTab from "@/app/task/Tas/kTab";

const GeneralTable = ({
  users,
  columns,
  statusOptions,
  btnText = "",
  btnLink = "/",
  search = false,
  tab = false,
}) => {
  const [input, setInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("select-status");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleNewPage = (newPage) => {
    setPage(newPage);
  };

  const filteredData = users?.filter((user) => {
    if (input === "" && selectedStatus !== "select-status")
      return (
        user?.status === selectedStatus || user?.priority === selectedStatus
      );

    return (
      input === "" ||
      user?.name.toLowerCase().includes(input.toLowerCase()) ||
      user?.status === selectedStatus ||
      user?.priority === selectedStatus
    );
  });

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (e) => {
    setSelectedStatus(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex bg-white rounded-xl  flex-col mb-10">
      {search ? (
        <div className="flex bg-white justify-between py-4 px-5 items-center">
          {tab ? (
            <div>
              {" "}
              {/* <TaskTab />{" "} */}
            </div>
          ) : (
            <div className="flex justify-center w-[400px] rounded-md px-2 items-center border-2">
              <input
                onChange={(e) => setInput(e.target.value)}
                className="pl-10 ml-3 py-2 outline-none"
                type="text"
              />
              <button className="px-3 border-2 rounded-md text-primary">
                Search
              </button>
            </div>
          )}
          <div className="flex justify-center items-center">
            <button className="text-md font-medium border-primary text-primary rounded-md border-2">
              <select
                value={selectedStatus}
                onChange={(e) => handleChange(e)}
                className="rounded-md border-primary px-4 py-2"
              >
                <option value="select-status">Select Status</option>
                {statusOptions.map((status) => (
                  <option key={status?.uid} value={status?.uid}>
                    {status?.name}
                  </option>
                ))}
              </select>
            </button>

            <Link href={btnLink}>
              <button className="text-md font-medium bg-primary text-white rounded-md px-4 py-2 ml-2">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns?.map((column) => {
                    return (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column?.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData?.map((person, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {columns?.map((item) => {
                      return (
                        <td
                          key={item?.uid}
                          className={`px-6 ${
                            person?.avatar ? "py-2" : "py-6"
                          } whitespace-nowrap text-sm text-gray-500`}
                        >
                          {item?.uid === "status" || item?.status === true ? (
                            statusOptions?.map((status) => {
                              if (status?.uid === person[item?.uid]) {
                                return (
                                  <span
                                    className={`inline-flex text-xs leading-5 font-semibold rounded-md px-3 py-1  bg-${status.color}-100 text-${status.color}-800`}
                                  >
                                    {status?.name}
                                  </span>
                                );
                              }

                              return null;
                            })
                          ) : item?.uid === "actions" ? (
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-center">
                                <span className="mr-2">
                                  <Icon name="Trash2" />
                                </span>
                                <span className="mr-2">
                                  <Icon name="Pencil" />
                                </span>
                                <span>
                                  <Icon name="Eye" />
                                </span>
                              </div>
                            </td>
                          ) : item?.uid === "name" ? (
                            <td className="px-6 cursor-pointer py-4 whitespace-nowrap">
                              <Link href={"/all-employees/view-employee"}>
                                <div className="flex items-center">
                                  {person?.avatar ? (
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <Avatar
                                        isBordered
                                        color="default"
                                        src={person?.avatar}
                                      />
                                    </div>
                                  ) : null}

                                  <div className="ml-4">
                                    <div className="text-sm ml-7 font-medium text-gray-900">
                                      {person?.name}
                                    </div>
                                    <div className="text-sm ml-7 text-gray-500">
                                      {person?.email}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </td>
                          ) : item?.money === true ? (
                            <div>
                              {" "}
                              <PriceFormatter price={person[item?.uid]} />{" "}
                            </div>
                          ) : (
                            <div>
                              {item?.main ? (
                                <div className="text-medium font-medium">
                                  {person[item?.uid]}
                                </div>
                              ) : (
                                <div>{person[item?.uid]}</div>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 px-5 items-center">
        {/* <Pagination
          isCompact
          showControls
          showShadow
          total={Math.ceil(filteredData?.length / itemsPerPage)}
          onChange={handleNewPage}
          initialPage={page}
        /> */}
      </div>
    </div>
  );
};

export default GeneralTable;
