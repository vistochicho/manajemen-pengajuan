"use client";

import React, { useState } from "react";

const Package: React.FC = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    package_name: `Package ${i + 1}`, // Update: package_name based on title
    price: `$${(i + 1) * 100}`, // Update: price (can be numeric or formatted as string)
    included_documents: i % 2 === 0 ? "Document Set A" : "Document Set B", // Update: included_documents
    report_bundle: `Bundle ${(i % 5) + 1}`, // Update: report_bundle
    service_bundle: `Service ${(i % 3) + 1}`, // Update: service_bundle
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageSizeChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1 on page size change
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const filteredData = data.filter((row) => row.package_name.toLowerCase().includes(searchTerm.toLowerCase()));

  const currentData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="bg-white rounded-lg">
      <div className="p-6">
        <div className="flex justify-between mb-4">
          {/* Pagination control on the left */}
          <div className="flex items-center space-x-4">
            <label htmlFor="rowsPerPage" className="text-sm font-medium text-gray-700">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handlePageSizeChange}
              className="px-3 py-2 border rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={5}>Page of 5</option>
              <option value={10}>Page of 10</option>
              <option value={20}>Page of 20</option>
              <option value={50}>Page of 50</option>
              <option value={100}>Page of 100</option>
            </select>

            <button className="py-3 px-6 rounded-md text-white bg-blue-400 hover:bg-blue-500">Add New Package</button>
          </div>

          {/* Search input on the right */}
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search package..."
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Package Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Included Documents
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Financial Report Bundle
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service Bundle
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-nowrap">{row.package_name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.included_documents}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.report_bundle}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.service_bundle}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Detail
                            </a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900 px-4">
                              Update
                            </a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination Controls */}
                  <div className="px-6 py-3 flex justify-between items-center bg-white">
                    <div className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages} | Total Rows: {data.length}
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={handlePrevPage}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
                        disabled={currentPage === 1}
                      >
                        &lt; Prev
                      </button>
                      {[...Array(totalPages)].map((_, page) => (
                        <button
                          key={page + 1}
                          onClick={() => handlePageClick(page + 1)}
                          className={`px-3 py-1 text-sm font-medium ${
                            currentPage === page + 1 ? "text-white bg-indigo-500" : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                          } rounded-md`}
                        >
                          {page + 1}
                        </button>
                      ))}
                      <button
                        onClick={handleNextPage}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md"
                        disabled={currentPage === totalPages}
                      >
                        Next &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
