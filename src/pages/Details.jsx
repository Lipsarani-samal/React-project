// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Details = () => {
//   const userData = useSelector((state) => state.userData) || [];
//   const navigate = useNavigate();

//   // Filter out any empty submissions
//   const validSubmissions = userData.filter(
//     (sub) => sub.name && sub.dob && sub.tob && sub.phone && sub.email
//   );

//   useEffect(() => {
//     console.log("Valid Submissions:", validSubmissions);
//     if (validSubmissions.length > 0) {
//       alert("Here are all your previous submissions!");
//     }
//   }, [validSubmissions]);

//   if (validSubmissions.length === 0) {
//     return (
//       <div className="p-5">
//         <h1 className="text-xl font-bold">No user data found!</h1>
//         <button
//           onClick={() => navigate("/about")}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 bg-blue-200">
//       <h1 className="text-2xl font-bold text-blue-900 p-10">All User Details</h1>
//       {/* Iterate through only valid user submissions */}
//       {validSubmissions.map((submission, index) => (
//         <div key={index} className="mb-5 p-4 border rounded bg-blue-100 shadow-md">
//           <h2 className="font-semibold">Submission {index + 1}</h2>
//           <p><strong>Name:</strong> {submission.name}</p>
//           <p><strong>Date of Birth:</strong> {submission.dob}</p>
//           <p><strong>Time of Birth:</strong> {submission.tob}</p>
//           <p><strong>Phone:</strong> {submission.phone}</p>
//           <p><strong>Email:</strong> {submission.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Details = () => {
//   const reduxData = useSelector((state) => state.userData) || [];
//   const navigate = useNavigate();
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     // Load data from localStorage to persist across page reloads
//     const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    
//     // Combine Redux and localStorage data
//     const combinedData = Array.isArray(reduxData) ? [...reduxData, ...storedData] : [...storedData];

//     // Filter out incomplete submissions
//     const validSubmissions = combinedData.filter(
//       (sub) => sub.name && sub.dob && sub.tob && sub.phone && sub.email
//     );

//     setSubmissions(validSubmissions);

//     if (validSubmissions.length > 0) {
//       alert("Here are all your previous submissions!");
//     }
//   }, [reduxData]);

//   if (submissions.length === 0) {
//     return (
//       <div className="p-5 text-center">
//         <h1 className="text-xl font-bold">No user data found!</h1>
//         <button
//           onClick={() => navigate("/about")}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-blue-900 p-5">All User Details</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="px-4 py-2">#</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Date of Birth</th>
//               <th className="px-4 py-2">Time of Birth</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submissions.map((submission, index) => (
//               <tr key={index} className="text-center border-b border-gray-300">
//                 <td className="px-4 py-2">{index + 1}</td>
//                 <td className="px-4 py-2">{submission.name}</td>
//                 <td className="px-4 py-2">{submission.dob}</td>
//                 <td className="px-4 py-2">{submission.tob}</td>
//                 <td className="px-4 py-2">{submission.phone}</td>
//                 <td className="px-4 py-2">{submission.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <button
//         onClick={() => navigate("/about")}
//         className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default Details;

import React, { useEffect, useState} from "react";
import Modal from "../modal/Modal";// Import the Modal component
import EditUserModal from "../modal/EditUserModal";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  useReactTable, 
  getCoreRowModel, 
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMoreVertical } from "react-icons/fi";
import Button from "./Button";

const Details = () => {
  // const userData = useSelector((state) => state.userData) || [];
  const navigate = useNavigate();
  const [data, setData] = useState([]);// Sample data for demonstration
  const [columnOrder, setColumnOrder] = useState(["name", "dob", "tob", "phone", "email","actions"]);
  const [globalFilter, setGlobalFilter] = useState("");
  // Add State for Modal Handling
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility Modal state for delete confirmation
  const [selectedRowId, setSelectedRowId] = useState(null); // To track which row is being deleted Store row ID to delete

  const [menuIndex, setMenuIndex] = useState(null); // Track which row's menu is open
const [selectedUser, setSelectedUser] = useState(null);
const [isEditing, setIsEditing] = useState(false);
  

  useEffect(() => {
    // Ensure stored data is an array
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const validSubmissions = storedData.filter(
      (sub) => sub.name && sub.dob && sub.tob && sub.phone && sub.email
    );
    setData(validSubmissions);
    
  if (validSubmissions.length > 0) {
      console.log("Valid Submissions:", validSubmissions);
      alert("Here are all your previous submissions!");
    }
  }, []);

    // Sensors for different input methods (Pointer, Mouse, Touch, Keyboard)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

//   // Handle Delete
// const handleDelete = (rowId) => {
//   const updatedData = data.filter((_, index) => index !== rowId);
//   setData(updatedData);
//   localStorage.setItem("userData", JSON.stringify(updatedData));
//   setMenuIndex(null);
  
// };
// Handle Delete
// const handleDelete = (rowId) => {
//   const confirmDelete = window.confirm("Are you sure you want to delete this submission?");
  
//   if (confirmDelete) {
//     const updatedData = data.filter((_, index) => index !== rowId);
//     setData(updatedData);
//     localStorage.setItem("userData", JSON.stringify(updatedData));
//     setMenuIndex(null);
//     alert("Submission deleted successfully!");
//   } else {
//     // Optionally handle the case when the user cancels the deletion
//     console.log("Deletion cancelled.");
//   }
// };


 // Handle Delete
 const handleDelete = (rowId) => {
  setSelectedRowId(rowId);
  setIsModalOpen(true); // Show the modal
};

const confirmDelete = () => {
  const updatedData = data.filter((_, index) => index !== selectedRowId);
  setData(updatedData);
  localStorage.setItem("userData", JSON.stringify(updatedData));
  setIsModalOpen(false); // Close modal after deletion
  alert("Submission deleted successfully!");
};

const cancelDelete = () => {
  setIsModalOpen(false); // Close modal without deletion
};
// Handle Edit (Redirect to Form with selected user data)
const handleEdit = (rowId) => {
  // localStorage.setItem("editUser", JSON.stringify(data[rowId]));
  // navigate("/about");
  setSelectedUser(data[rowId]); // Set selected user
  setIsEditing(true); // Open modal
  
};


  
// Define table columns with sorting enabled
  const columns = [
    { header: "Name", accessorKey: "name", enableSorting: true  },
    { header: "Date Of Birth", accessorKey: "dob", enableSorting: true  },
    { header: "Time Of Birth", accessorKey: "tob"},
    {header: "Phone No.", accessorKey: "phone", enableSorting: true  },
    { header: "Email Id", accessorKey: "email"},
    {
      header: "Actions", 
      accessorKey: "actions", 
      cell: ({ row }) => (
        <div className="relative">
          <button onClick={() => setMenuIndex(menuIndex === row.index ? null : row.index)}>
          <FiMoreVertical size={20} />   {/* Vertical three-dot symbol */}
          </button>
          {menuIndex === row.index && (
            <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md z-10">
              <button onClick={() => handleEdit(row.index)} className="block w-full px-2 py-1 hover:bg-gray-200">Edit</button>
              <button onClick={() => handleDelete(row.index)} className="block w-full px-2 py-1 text-red-600 hover:bg-gray-200">Delete</button>
              <button onClick={() => setMenuIndex(null)} className="block w-full px-2 py-1">Cancel</button>
            </div>
          )} 
        </div>
      )
    }
    
  ];
 
  // Configure table with sorting & filtering
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enables sorting
    getFilteredRowModel: getFilteredRowModel(), // Enables filtering
    state: {
      
      globalFilter,
      columnOrder,
    },
    
    onGlobalFilterChange: setGlobalFilter,
    onColumnOrderChange: setColumnOrder,

  });

  // Handle column drag-and-drop
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
      const oldIndex = columnOrder.indexOf(active.id);
      const newIndex = columnOrder.indexOf(over.id);
      setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex));
    
  };
  // const handleDragEnd = (event) => {
  //   const { active, over } = event;
  //   if (!over || active.id === over.id) return;
  
  //   const oldIndex = columnOrder.indexOf(active.id);
  //   const newIndex = columnOrder.indexOf(over.id);
  
  //   if (oldIndex !== -1 && newIndex !== -1) {
  //     setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex));
  //   }
  // };
  

   // Sortable Header Component
   const SortableHeader = ({ column }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: column.id, // Ensure ID is correctly set
    });
  

    return (
      <th
        ref={setNodeRef}
        style={{ transform: CSS.Transform.toString(transform), transition }}
        {...attributes}
        {...listeners}
        className="border p-2 cursor-pointer bg-gray-200"
        onClick={column.getCanSort() ? column.getToggleSortingHandler() : undefined}
      >
        {column.columnDef.header}
        {column.getIsSorted() === "asc" ? " 🔼" : column.getIsSorted() === "desc" ? " 🔽" : ""}
      </th>
    );
  };
      
  if (data.length === 0) {
    return (
      <div className="p-5">
        <h1 className="text-xl font-bold">No user data found!</h1>
        <button
          onClick={() => navigate("/about")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 bg-pink-300">
      <h1 className="text-2xl font-bold text-blue-900 p-10">All User Details</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="p-2 border rounded mb-4 ml-4 w-full"
      />
    
    {/* Draggable Table */}
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
        <table border="1" className="w-full border-collapse m-4">
          <thead>
            <SortableContext items={columnOrder}>
              <tr>
                {table.getHeaderGroups().map((headerGroup) =>
                  headerGroup.headers.map((header) => (
                    <SortableHeader key={header.id} column={header.column} />
                  ))
                )}
              </tr>
            </SortableContext>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())} {/* ✅ Fix applied */}
                  </td>
                ))}
                
              </tr>
            ))}
          </tbody>
        </table>
      </DndContext>
      <Button color="green" title="Click here to visit About Page" onClick={() => navigate("/about")}>
        About
      </Button>
      {/* Modal for Delete Confirmation */}
      <Modal isOpen={isModalOpen} onConfirm={confirmDelete} onCancel={cancelDelete} message="Are you sure you want to delete this submission?" />
      {/* Edit User Modal */}
    {isEditing && (
      <EditUserModal
        open={isEditing}
        onClose={() => setIsEditing(false)}
        userData={selectedUser}
        setData={setData}
      />
    )}
    </div>
  );
};

export default Details;