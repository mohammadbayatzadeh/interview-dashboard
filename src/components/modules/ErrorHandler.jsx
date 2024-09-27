import React from "react";

function ErrorHandler({ text }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-3xl"> {text}</p>
    </div>
  );
}

export default ErrorHandler;
