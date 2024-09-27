import React, { useState } from "react";
import { createRegexRenderer, RichTextarea } from "rich-textarea";

const renderer = createRegexRenderer([
  [/hi/gim, { color: "blue" }],
  [/hello/g, { color: "blue" }],
  [/bye/g, { color: "red" }],
  [/good bye/g, { color: "red" }],
  [/see you/g, { color: "red" }],
]);

function Memory() {
  const [text, setText] = useState("type your text");

  return (
    <RichTextarea
      value={text}
      // className="w-full bg-black"
      //not work with tailwind classes??
      style={{
        width: "100%",
        border: "1px solid black",
        resize: "none",
        height: "500px",
        borderRadius: "16px",
        padding: "16px",
      }}
      onChange={(e) => setText(e.target.value)}
    >
      {renderer}
    </RichTextarea>
  );
}

export default Memory;
