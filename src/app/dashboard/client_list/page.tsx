"use client";

import React, { useState } from "react";

const Client_List: React.FC = () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    company: `Company ${i + 1}`,
    applicant: `Applicant ${i + 1}`,
    entity: i % 2 === 0 ? "LLC" : "Corporation",
    email: `applicant${i + 1}@example.com`,
    phone: `(555) 000-${String(i + 1).padStart(4, "0")}`,
    field: i % 3 === 0 ? "IT" : i % 3 === 1 ? "Finance" : "Healthcare",
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

  const filteredData = data.filter((row) => row.company.toLowerCase().includes(searchTerm.toLowerCase()));

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
          </div>

          {/* Search input on the right */}
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search company..."
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
                          Name of Company
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applicant
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Selected Business Entities
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Business Field
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-nowrap">{row.company}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.applicant}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.entity}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.phone}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{row.field}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900 pr-4">
                              Detail
                            </a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Bulk
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

export default Client_List;
