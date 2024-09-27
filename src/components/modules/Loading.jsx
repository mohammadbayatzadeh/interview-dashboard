import React from "react";

function Loading() {
  return (
    <div className="w-full flex justify-center items-center mt-12">
      <div className="flex justify-center items-center bg-transparent">
        <span className="w-[50px] h-[50px] absolute border-2 border-solid border-black rounded-full animate-bounce"></span>
        <span className="w-[100px] h-[100px] absolute border-2 border-solid border-black rounded-full  animate-bounce"></span>
        <span className="w-[150px] h-[150px] absolute border-2 border-solid border-text-black rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}

export default Loading;
