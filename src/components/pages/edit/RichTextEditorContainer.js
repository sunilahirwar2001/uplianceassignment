import { useState, useEffect } from "react";
import RichTextEditor from "./RichTextEditor";

function RichTextEditorContainer() {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    // Load editor value from local storage
    const savedValue = localStorage.getItem("editorValue");
    if (savedValue) {
      setEditorValue(savedValue);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEditorValue(value);
  };

  useEffect(() => {
    // Save editor value to local storage
    localStorage.setItem("editorValue", editorValue);
  }, [editorValue]);

  return (
    <RichTextEditor value={editorValue} onChange={handleChange} />
  );
}

export default RichTextEditorContainer;
