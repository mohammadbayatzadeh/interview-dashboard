import React, { useState } from "react";

//modules
import Sidebar from "../modules/layout/Sidebar";

function DashboardLayout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-full bg-slate-200 min-h-screen transition-all">
      <div className="flex w-full min-h-screen">
        <Sidebar show={show} setShow={setShow} />
        <div
          className={`min-w-[calc(100vw-4vw)] md:min-w-[calc(100vw-150px)]  translate-x-[0px] mt-[20px] pb-4 md:ml-[150px] md:translate-x-0 pt-2.5 px-2.5 transition-all  ${
            !show
              ? "md:!-translate-x-[130px] md:!min-w-[calc(100vw-20px)] "
              : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
