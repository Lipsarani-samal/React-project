import React from "react";

const Modal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null; // Do not render modal if not open

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm  bg-opacity z-50">
      <div className="bg-pink-100 p-6 rounded-md shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4 ">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;