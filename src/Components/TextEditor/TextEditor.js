import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const [value, setValue] = useState(" this should be something i hope");
  console.log(value);

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
export default TextEditor;
