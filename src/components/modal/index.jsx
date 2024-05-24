import React from "react";

function index({ message }) {
  return (
    <div className=" w-[430px] py-4 px-4  shadow-lg bg-white">
      <h2 className="text-2xl">Mark Attendance</h2>
      <p>You have 15 minutes from now to mark attendance!</p>
      <div className="actions mt-6 flex items-center justify-end gap-8">
        <button className="bg-black px-3 py-2 w-[110px] text-white">
          Mark
        </button>
        <button>Dismiss</button>
      </div>
    </div>
  );
}

export default index;
