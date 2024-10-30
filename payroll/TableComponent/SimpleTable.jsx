"use client";
import React, { useState } from "react";
// import { Pagination } from "@nextui-org/pagination";

const SimpleTable = ({ columns, data, statusOptions }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleNewPage = (newPage) => {
    setPage(newPage);
  };

  const filteredData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-400">
                <thead className="bg-gray-50 rounded-xl shadow-lg">
                  <tr>
                    {columns?.map((column) => (
                      <th
                        key={column.name}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((tableData, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      {columns.map((item) => (
                        <td
                          key={item.uid}
                          className="px-6 py-6 whitespace-nowrap text-sm text-gray-500"
                        >
                          {item.uid === "status" ? (
                            statusOptions.map((status) => {
                              if (status.uid === tableData[item.uid]) {
                                return (
                                  <span
                                    className={`inline-flex text-xs leading-5 font-semibold rounded-md px-3 py-1 bg-${status.color}-100 text-${status.color}-800`}
                                  >
                                    {status.name}
                                  </span>
                                );
                              }
                              return null;
                            })
                          ) : (
                            // <div>Status</div>
                            <div> {tableData[item.uid]} </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 px-5 items-center">
        {/* <Pagination
          isCompact
          showControls
          showShadow
          total={Math.ceil(data.length / itemsPerPage)}
          onChange={handleNewPage}
          initialPage={page}
        /> */}
      </div>
    </div>
  );
};

export default SimpleTable;
