import React, { useState} from "react";
import "./form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [desc, setDesc] = useState("");
  const submitForm = () => {};

  return (
    <div className="Form">
      <form>
        <label>Your Name</label>
        <input
          type="Name"
          value={name}
          style={{ fontSize:"12px" }}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Your file</label>
      <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
          required
        />
         <label>Description of File</label>
        <input
          type="text"
          value={desc}
          style={{ fontSize:"10px" }}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};
export default Form;