// import { Receipt } from "@mui/icons-material";
import { useState, useRef } from "react";

const ReceiptUpload = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (files) return (
    <div className="hidden">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className="mt-[10%] flex flex-col items-center mx-8 gap-6 py-6 px-6 border-dashed border-[#222] border-2"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1 className="text-xl font-semibold text-[#222]">Drag and Drop Receipt to Upload</h1>
          <h1 className="text-xl font-semibold text-[#222]">Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button className="py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold" onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default ReceiptUpload;