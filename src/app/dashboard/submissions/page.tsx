import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="p-6 border-b-2 border-gray-100">Submission Form</div>
      <div className="grid">
        <form className="p-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div className="mb-5">
              <label>Nama Anda</label>
              <input required />
            </div>
            <div className="mb-5">
              <label>Nomor Telepon</label>
              <input required />
            </div>
            <div className="mb-5">
              <label>Alamat Anda</label>
              <textarea></textarea>
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
