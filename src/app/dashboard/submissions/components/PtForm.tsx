import React from "react";
import { ManagerTags } from "./ManagerTags";

export const PtForm = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {/* Nama Perusahaan */}
      <div className="sm:col-span-6">
        <label htmlFor="namaPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Name of Company*
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="namaPerusahaan"
              name="namaPerusahaan"
              type="text"
              placeholder=""
              className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Alamat Perusahaan (textarea) */}
      <div className="sm:col-span-6">
        <label htmlFor="alamatPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Company Address*
        </label>
        <div className="mt-2">
          <textarea
            id="alamatPerusahaan"
            name="alamatPerusahaan"
            placeholder=""
            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Kode KBLI */}
      <div className="sm:col-span-6">
        <label htmlFor="namaPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          KBLI Code*
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="namaPerusahaan"
              name="namaPerusahaan"
              type="text"
              placeholder=""
              className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* No. Telepon Perusahaan */}
      <div className="sm:col-span-3">
        <label htmlFor="noTeleponPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Company Phone Number*
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="noTeleponPerusahaan"
              name="noTeleponPerusahaan"
              type="tel"
              placeholder="Phone Number"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* No. Fax Perusahaan */}
      <div className="sm:col-span-3">
        <label htmlFor="noFaxPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Fax Number of Company
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="noFaxPerusahaan"
              name="noFaxPerusahaan"
              type="text"
              placeholder="No. Fax"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Modal Dasar Perusahaan */}
      <div className="sm:col-span-3">
        <label htmlFor="modalDasarPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Company Authorized Capital*
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="modalDasarPerusahaan"
              name="modalDasarPerusahaan"
              type="number"
              placeholder="Modal Dasar"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      {/* Modal Disetor Perusahaan */}
      <div className="sm:col-span-3">
        <label htmlFor="modalDisetorPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Company's Paid-up Capital*
        </label>
        <div className="mt-2">
          <div className="flex rounded-lg px-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="modalDisetorPerusahaan"
              name="modalDisetorPerusahaan"
              type="number"
              placeholder="Modal Disetor"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-6">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
      </div>

      {/* Nama Pengurus Perusahaan (textarea) */}
      <div className="sm:col-span-6">
        <label htmlFor="alamatPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Company Executives*
        </label>
        <div className="mt-2">
          <textarea
            id="alamatPerusahaan"
            name="alamatPerusahaan"
            placeholder=""
            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Message/Note (textarea) */}
      <div className="sm:col-span-6">
        <label htmlFor="alamatPerusahaan" className="block text-sm font-medium leading-6 text-gray-900">
          Message/Note
        </label>
        <div className="mt-2">
          <textarea
            id="alamatPerusahaan"
            name="alamatPerusahaan"
            placeholder=""
            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex justify-between sm:col-span-6">
        <div>
          <button className="text-blue-400 px-2.5 py-1.5">Clear Form</button>
        </div>
        <div>
          <button className="text-white bg-blue-400 hover:bg-blue-500 rounded-md px-6 py-1.5">Submit</button>
        </div>
      </div>
    </div>
  );
};
