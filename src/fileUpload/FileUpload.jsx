// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (event.dataTransfer.files.length > 0) {
//       const droppedFiles = Array.from(event.dataTransfer.files);
//       const newFiles = droppedFiles.filter(file => !files.some(f => f.name === file.name));
//       setFiles(prevFiles => [...prevFiles, ...newFiles]);
//       setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       alert("Please select at least one file first.");
//       return;
//     }
    
//     // Simulate file upload
//     alert(`Uploading: ${files.map(file => file.name).join(", ")}`);
//   };

//   return (
//     <div 
//       className="flex flex-col items-center p-2 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 h- bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onClick={() => document.getElementById('fileInput').click()}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-" />
//       <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//       <input 
//         id="fileInput"
//         type="file" 
//         multiple
//         onChange={handleFileChange} 
//         className="hidden" 
//         accept="image/*"
//       />
//       {files.length > 0 && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {files.map((file, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <p className="text-sm text-gray-600">{file.name}</p>
//               {previews[index] && <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />}
//             </div>
//           ))}
//         </div>
//       )}
//       <button 
//         type="button"
//         onClick={handleUpload} 
//         className="mt- bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Upload
//       </button>
//     </div>
//   );
// };

// export default FileUpload;

// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (event.dataTransfer.files.length > 0) {
//       const droppedFiles = Array.from(event.dataTransfer.files);
//       const newFiles = droppedFiles.filter(file => !files.some(f => f.name === file.name));
//       setFiles(prevFiles => [...prevFiles, ...newFiles]);
//       setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       alert("Please select at least one file first.");
//       return;
//     }
    
//     setUploadStatus("Uploading...");
//     setUploadProgress(0);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setUploadStatus("Upload Successful");
//       }
//     }, 500);
//   };

//   return (
//     <div 
//       className="flex flex-col items-center p-2 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 h- bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onClick={() => document.getElementById('fileInput').click()}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-" />
//       <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//       <input 
//         id="fileInput"
//         type="file" 
//         multiple
//         onChange={handleFileChange} 
//         className="hidden" 
//         accept="image/*"
//       />
//       {files.length > 0 && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {files.map((file, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <p className="text-sm text-gray-600">{file.name}</p>
//               {previews[index] && <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />}
//             </div>
//           ))}
//         </div>
//       )}
//       <button 
//         type="button"
//         onClick={handleUpload} 
//         className="mt- bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Upload
//       </button>
//       {uploadStatus && <p className="mt-2 text-sm text-gray-700">{uploadStatus}</p>}
//       {uploadProgress > 0 && uploadProgress < 100 && <p className="mt-2 text-sm text-gray-700">Uploading: {uploadProgress}%</p>}
//     </div>
//   );
// };

// export default FileUpload;

// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (event.dataTransfer.files.length > 0) {
//       const droppedFiles = Array.from(event.dataTransfer.files);
//       const newFiles = droppedFiles.filter(file => !files.some(f => f.name === file.name));
//       setFiles(prevFiles => [...prevFiles, ...newFiles]);
//       setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       alert("Please select at least one file first.");
//       return;
//     }
    
//     setUploadStatus("Uploading...");
//     setUploadProgress(0);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setUploadStatus("Upload Successful");
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       }
//     }, 500);
//   };

//   return (
//     <div 
//       className="flex flex-col items-center p-2 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 h- bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onClick={() => document.getElementById('fileInput').click()}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-" />
//       <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//       <input 
//         id="fileInput"
//         type="file" 
//         multiple
//         onChange={handleFileChange} 
//         className="hidden" 
//         accept="image/*"
//       />
//       {files.length > 0 && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {files.map((file, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <p className="text-sm text-gray-600">{file.name}</p>
//               {previews[index] && <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />}
//             </div>
//           ))}
//         </div>
//       )}
//       <button 
//         type="button"
//         onClick={handleUpload} 
//         className="mt- bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Upload
//       </button>
//       {uploadStatus && <p className="mt-2 text-sm text-gray-700">{uploadStatus}</p>}
//       {uploadProgress > 0 && uploadProgress < 100 && <p className="mt-2 text-sm text-gray-700">Uploading: {uploadProgress}%</p>}
//     </div>
//   );
// };

// export default FileUpload;


// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (event.dataTransfer.files.length > 0) {
//       const droppedFiles = Array.from(event.dataTransfer.files);
//       const newFiles = droppedFiles.filter(file => !files.some(f => f.name === file.name));
//       setFiles(prevFiles => [...prevFiles, ...newFiles]);
//       setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = () => {
//     if (files.length === 0) {
//       alert("Please select at least one file first.");
//       return;
//     }
    
//     setUploadStatus("Uploading...");
//     setUploadProgress(0);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setUploadStatus("Upload Successful");
//         setTimeout(() => {
//           setFiles([]);
//           setPreviews([]);
//           setUploadProgress(0);
//           setUploadStatus("");
//         }, 1000);
//       }
//     }, 500);
//   };

//   return (
//     <div 
//       className="flex flex-col items-center p-2 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 h- bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-" onClick={() => document.getElementById('fileInput').click()} />
//       <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//       <input 
//         id="fileInput"
//         type="file" 
//         multiple
//         onChange={handleFileChange} 
//         className="hidden" 
//         accept="image/*"
//       />
//       {files.length > 0 && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {files.map((file, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <p className="text-sm text-gray-600">{file.name}</p>
//               {previews[index] && <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />}
//             </div>
//           ))}
//         </div>
//       )}
//       <button 
//         type="button"
//         onClick={handleUpload} 
//         className="mt- bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Upload
//       </button>
//       {uploadStatus && <p className="mt-2 text-sm text-gray-700">{uploadStatus}</p>}
//       {uploadProgress > 0 && uploadProgress < 100 && <p className="mt-2 text-sm text-gray-700">Uploading: {uploadProgress}%</p>}
//     </div>
//   );
// };

// export default FileUpload;



// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";
// import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState({});
//   const [uploadStatus, setUploadStatus] = useState({});

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
    
//     const progress = {};
//     newFiles.forEach(file => (progress[file.name] = 0));
//     setUploadProgress(prev => ({ ...prev, ...progress }));
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFiles = Array.from(event.dataTransfer.files);
//     handleFileChange({ target: { files: droppedFiles } });
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = (file) => {
//     let progress = 0;
//     setUploadStatus(prev => ({ ...prev, [file.name]: "uploading" }));

//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
      
//       if (progress >= 100) {
//         clearInterval(interval);
//         const success = Math.random() > 0.2; // Simulate success/failure
//         setUploadStatus(prev => ({ ...prev, [file.name]: success ? "success" : "failed" }));
//       }
//     }, 500);
//   };

//   const handleRetry = (file) => {
//     setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
//     handleUpload(file);
//   };

//   const handleDelete = (file) => {
//     setFiles(prevFiles => prevFiles.filter(f => f.name !== file.name));
//     setPreviews(prevPreviews => prevPreviews.filter((_, index) => files[index].name !== file.name));
//     setUploadProgress(prev => {
//       const newProgress = { ...prev };
//       delete newProgress[file.name];
//       return newProgress;
//     });
//     setUploadStatus(prev => {
//       const newStatus = { ...prev };
//       delete newStatus[file.name];
//       return newStatus;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onClick={() => document.getElementById('fileInput').click()}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}>
//       <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-2" />
//       <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//       <input id="fileInput" type="file" multiple onChange={handleFileChange} className="hidden" accept="image/*" />
      
//       {files.length > 0 && (
//         <div className="w-full mt-4 space-y-2">
//           {files.map((file, index) => (
//             <div key={file.name} className="bg-white p-2 rounded-lg shadow flex items-center gap-3 relative">
//               <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />
//               <div className="flex-1">
//                 <p className="text-sm font-semibold">{file.name}</p>
//                 {uploadStatus[file.name] === "uploading" && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[file.name]}%` }}></div>
//                   </div>
//                 )}
//                 {uploadStatus[file.name] === "success" && (
//                   <p className="text-green-600 text-xs">Upload Successful!</p>
//                 )}
//                 {uploadStatus[file.name] === "failed" && (
//                   <p className="text-red-600 text-xs">Upload failed! <span className="cursor-pointer text-blue-500" onClick={() => handleRetry(file)}>Try Again</span></p>
//                 )}
//               </div>
//               {uploadStatus[file.name] === "success" && <AiOutlineCheckCircle className="text-green-500 text-xl" />}
//               {uploadStatus[file.name] === "failed" && <AiOutlineCloseCircle className="text-red-500 text-xl" />}
//               <AiOutlineDelete className="text-red-500 text-xl cursor-pointer" onClick={() => handleDelete(file)} />
//             </div>
//           ))}
//         </div>
//       )}
//       <button type="button" onClick={() => files.forEach(handleUpload)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Upload</button>
//     </div>
//   );
// };

// export default FileUpload;

// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";
// import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState({});
//   const [uploadStatus, setUploadStatus] = useState({});
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
    
//     const progress = {};
//     newFiles.forEach(file => (progress[file.name] = 0));
//     setUploadProgress(prev => ({ ...prev, ...progress }));
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFiles = Array.from(event.dataTransfer.files);
//     handleFileChange({ target: { files: droppedFiles } });
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = (file) => {
//     let progress = 0;
//     setUploadStatus(prev => ({ ...prev, [file.name]: "uploading" }));

//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
      
//       if (progress >= 100) {
//         clearInterval(interval);
//         const success = Math.random() > 0.2; // Simulate success/failure
//         setUploadStatus(prev => ({ ...prev, [file.name]: success ? "success" : "failed" }));
//       }
//     }, 500);
//   };

//   const handleUploadAll = () => {
//     setUploading(true);
//     files.forEach(handleUpload);
//   };

//   const handleRetry = (file) => {
//     setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
//     handleUpload(file);
//   };

//   const handleDelete = (file) => {
//     setFiles(prevFiles => prevFiles.filter(f => f.name !== file.name));
//     setPreviews(prevPreviews => prevPreviews.filter((_, index) => files[index].name !== file.name));
//     setUploadProgress(prev => {
//       const newProgress = { ...prev };
//       delete newProgress[file.name];
//       return newProgress;
//     });
//     setUploadStatus(prev => {
//       const newStatus = { ...prev };
//       delete newStatus[file.name];
//       return newStatus;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}>
//       {!uploading && (
//         <div onClick={() => document.getElementById('fileInput').click()}>
//           <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-2 ml-33" />
//           <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//           <input id="fileInput" type="file" multiple onChange={handleFileChange} className="hidden" accept="image/*" />
//         </div>
//       )}
      
//       {files.length > 0 && (
//         <div className="w-full mt-4 space-y-2">
//           {files.map((file, index) => (
//             <div key={file.name} className="bg-white p-2 rounded-lg shadow flex items-center gap-3 relative">
//               <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />
//               <div className="flex-1">
//                 <p className="text-sm font-semibold">{file.name}</p>
//                 {uploadStatus[file.name] === "uploading" && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[file.name]}%` }}></div>
//                   </div>
//                 )}
//                 {uploadStatus[file.name] === "success" && (
//                   <p className="text-green-600 text-xs">Upload Successful!</p>
//                 )}
//                 {uploadStatus[file.name] === "failed" && (
//                   <p className="text-red-600 text-xs">Upload failed! <span className="cursor-pointer text-blue-500" onClick={() => handleRetry(file)}>Try Again</span></p>
//                 )}
//               </div>
//               {uploadStatus[file.name] === "success" && <AiOutlineCheckCircle className="text-green-500 text-xl" />}
//               {uploadStatus[file.name] === "failed" && <AiOutlineCloseCircle className="text-red-500 text-xl" />}
//               <AiOutlineDelete className="text-red-500 text-xl cursor-pointer" onClick={() => handleDelete(file)} />
//             </div>
//           ))}
//         </div>
//       )}
      
//       {!uploading && files.length > 0 && (
//         <button type="button" onClick={handleUploadAll} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Upload</button>
//       )}
//     </div>
//   );
// };

// export default FileUpload;


// import { useState } from "react";
// import { FaFileUpload } from "react-icons/fa";
// import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState({});
//   const [uploadStatus, setUploadStatus] = useState({});
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = (event) => {
//     if (uploading) return;
//     const selectedFiles = Array.from(event.target.files);
//     const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
//     setFiles(prevFiles => [...prevFiles, ...newFiles]);
//     setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
    
//     const progress = {};
//     newFiles.forEach(file => (progress[file.name] = 0));
//     setUploadProgress(prev => ({ ...prev, ...progress }));
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (uploading) return;
//     const droppedFiles = Array.from(event.dataTransfer.files);
//     handleFileChange({ target: { files: droppedFiles } });
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleUpload = (file) => {
//     let progress = 0;
//     setUploadStatus(prev => ({ ...prev, [file.name]: "uploading" }));

//     const interval = setInterval(() => {
//       progress += 20;
//       setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
      
//       if (progress >= 100) {
//         clearInterval(interval);
//         const success = Math.random() > 0.2; // Simulate success/failure
//         setUploadStatus(prev => ({ ...prev, [file.name]: success ? "success" : "failed" }));
//       }
//     }, 500);
//   };

//   const handleUploadAll = () => {
//     setUploading(true);
//     files.forEach(handleUpload);
//   };

//   const handleRetry = (file) => {
//     setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
//     handleUpload(file);
//   };

//   const handleDelete = (file) => {
//     setFiles(prevFiles => prevFiles.filter(f => f.name !== file.name));
//     setPreviews(prevPreviews => prevPreviews.filter((_, index) => files[index].name !== file.name));
//     setUploadProgress(prev => {
//       const newProgress = { ...prev };
//       delete newProgress[file.name];
//       return newProgress;
//     });
//     setUploadStatus(prev => {
//       const newStatus = { ...prev };
//       delete newStatus[file.name];
//       return newStatus;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg shadow-md w-150 bg-blue-100 text-center cursor-pointer hover:border-blue-500 transition-all"
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}>
//       <div onClick={() => !uploading && document.getElementById('fileInput').click()}>
//         <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-2" />
//         <p className="text-gray-500 text-sm">Click here to upload your files or drag & drop them here.</p>
//         <input id="fileInput" type="file" multiple onChange={handleFileChange} className="hidden" accept="image/*" />
//       </div>
      
//       {files.length > 0 && (
//         <div className="w-full mt-4 space-y-2">
//           {files.map((file, index) => (
//             <div key={file.name} className="bg-white p-2 rounded-lg shadow flex items-center gap-3 relative">
//               <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />
//               <div className="flex-1">
//                 <p className="text-sm font-semibold">{file.name}</p>
//                 {uploadStatus[file.name] === "uploading" && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[file.name]}%` }}></div>
//                   </div>
//                 )}
//                 {uploadStatus[file.name] === "success" && (
//                   <p className="text-green-600 text-xs">Upload Successful!</p>
//                 )}
//                 {uploadStatus[file.name] === "failed" && (
//                   <p className="text-red-600 text-xs">Upload failed! <span className="cursor-pointer text-blue-500" onClick={() => handleRetry(file)}>Try Again</span></p>
//                 )}
//               </div>
//               {uploadStatus[file.name] === "success" && <AiOutlineCheckCircle className="text-green-500 text-xl" />}
//               {uploadStatus[file.name] === "failed" && <AiOutlineCloseCircle className="text-red-500 text-xl" />}
//               <AiOutlineDelete className="text-red-500 text-xl cursor-pointer" onClick={() => handleDelete(file)} />
//             </div>
//           ))}
//         </div>
//       )}
      
//       {!uploading && files.length > 0 && (
//         <button type="button" onClick={handleUploadAll} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Upload</button>
//       )}
//     </div>
//   );
// };

// export default FileUpload;


import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadStatus, setUploadStatus] = useState({});

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    setPreviews(prevPreviews => [...prevPreviews, ...newFiles.map(file => URL.createObjectURL(file))]);
    
    const progress = {};
    newFiles.forEach(file => (progress[file.name] = 0));
    setUploadProgress(prev => ({ ...prev, ...progress }));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    handleFileChange({ target: { files: droppedFiles } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = (file) => {
    let progress = 0;
    setUploadStatus(prev => ({ ...prev, [file.name]: "uploading" }));

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        const success = Math.random() > 0.2;
        setUploadStatus(prev => ({ ...prev, [file.name]: success ? "success" : "failed" }));
      }
    }, 300);
  };

  const handleUploadAll = () => {
    files.forEach(handleUpload);
  };

  const handleRetry = (file) => {
    setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
    handleUpload(file);
  };

  const handleDelete = (file) => {
    setFiles(prevFiles => prevFiles.filter(f => f.name !== file.name));
    setPreviews(prevPreviews => prevPreviews.filter((_, index) => files[index].name !== file.name));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[file.name];
      return newProgress;
    });
    setUploadStatus(prev => {
      const newStatus = { ...prev };
      delete newStatus[file.name];
      return newStatus;
    });
  };

  return (
    <div className="flex flex-col items-center p-4 border-2 border-solid border-gray-300 rounded-lg shadow-md w-150 bg-blue-300 text-center cursor-pointer hover:border-blue-500 transition-all"
      onDrop={handleDrop}
      onDragOver={handleDragOver}>
        <div className="bg-white p-2 rounded-lg shadow flex items-center gap-3 w-full relative">
      <div onClick={() => document.getElementById('fileInput').click()} >
        <FaFileUpload className="text-blue-500 text-5xl hover:text-blue-700 transition-all mb-2 ml-62 " />
        <p className="text-gray-500 text-sm ml-20">Click here to upload your files or drag & drop them here.</p>
        <input id="fileInput" type="file" multiple onChange={handleFileChange} className="hidden" accept="image/*" />
      </div>
      </div>
      <div className="w-full mt-4 space-y-2">
        {files.map((file, index) => (
          <div key={file.name} className="bg-white p-2 rounded-lg shadow flex items-center gap-3 relative">
            <img src={previews[index]} alt="Uploaded preview" className="w-10 h-10 object-cover rounded-lg" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{file.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 relative">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[file.name] || 0}%` }}></div>
                <span className="absolute right-0  top-2 text-xs text-black-700">{uploadProgress[file.name] || 0}%</span>
              </div>
              {uploadStatus[file.name] === "success" && (
                <p className="text-green-600 text-xs">Upload Successful!</p>
              )}
              {uploadStatus[file.name] === "failed" && (
                <p className="text-red-600 text-xs">Upload failed! <span className="cursor-pointer text-blue-500" onClick={() => handleRetry(file)}>Try Again</span></p>
              )}
            </div>
            {uploadStatus[file.name] === "success" && <AiOutlineCheckCircle className="text-green-500 text-xl" />}
            {uploadStatus[file.name] === "failed" && <AiOutlineCloseCircle className="text-red-500 text-xl" />}
            <AiOutlineDelete className="text-red-500 text-xl cursor-pointer" onClick={() => handleDelete(file)} />
          </div>
        ))}
      </div>
      
      {files.length > 0 && (
        <button type="button" onClick={handleUploadAll} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Upload</button>
      )}
    </div>
  );
};

export default FileUpload;
