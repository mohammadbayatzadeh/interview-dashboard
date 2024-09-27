import React, { useState } from "react";
import Sidebar from "../modules/layout/Sidebar";
import { Link } from "react-router-dom";

function DashboardLayout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-full bg-slate-200 min-h-screen transition-all">
      <div className="flex w-full h-screen">
        <div
          className={`fixed top-[10px] left-[120px] w-[20px] h-[20px] flex justify-between flex-col items-center z-20 transition-all duration-700 cursor-pointer ${
            !show ? "!left-5" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <span
            className={`w-full h-0.5 bg-black rounded-sm transition-all translate-y-[9px] rotate-45 ${
              !show ? "!w-1/2 !translate-y-1.5 translate-x-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black rounded-sm transition-all -rotate-45 ${
              !show ? "rotate-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black rounded-sm transition-all opacity-0 ${
              !show
                ? "opacity-100 !w-1/2 -translate-y-1.5 translate-x-2 -rotate-45"
                : ""
            }`}
          ></span>
        </div>
        <aside
          className={`fixed translate-x-0 flex flex-col bg-bg-transparent-color border-2  border-solid border-white rounded-r-xl py-6 w-[150px] h-[100vh] z-10 backdrop-blur transition-all   ${
            !show ? "!-translate-x-[140px]" : ""
          }`}
        >
          <Link
            className="text-2xl text-zinc-500 p-4 hover:text-zinc-900"
            to="/dashboard/users"
          >
            users
          </Link>
          <Link
            className="text-2xl text-zinc-500 p-4 hover:text-zinc-900"
            to="/dashboard/memory"
          >
            memory
          </Link>
        </aside>
        <div
          className={`min-w-[calc(100vw-4vw)] md:min-w-[calc(100vw-150px)]  translate-x-[10px] mt-[20px] md:ml-[150px] md:translate-x-0 pt-2.5 px-2.5 transition-all  ${
            !show ? "md:!-translate-x-[130px] md:!min-w-[calc(100vw-20px)] bg-black" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
