import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/actions";

const EditUserModal = ({ open, onClose, userData, setData }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: userData,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Only alphabets are allowed")
        .min(4, "Name must be at least 4 characters")
        .max(50, "Name must be 50 characters or less")
        .required("Required"),
      dob: Yup.date().required("Required"),
      tob: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(setUserData(values));

      const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
      const updatedUsers = storedUsers.map((user) =>
        user.phone === values.phone ? values : user
      );

      localStorage.setItem("userData", JSON.stringify(updatedUsers));
      setData(updatedUsers);
      onClose();
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-sm bg-opacity-50 z-50">
      <div className="bg-pink-200 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <label className="font-medium">Name</label>
          <input type="text" name="name" {...formik.getFieldProps("name")} className="border p-2 rounded" />
          {formik.touched.name && formik.errors.name && <div className="text-red-500 text-sm">{formik.errors.name}</div>}
          
          <label className="font-medium">Date of Birth</label>
          <input type="date" name="dob" {...formik.getFieldProps("dob")} className="border p-2 rounded" />
          {formik.touched.dob && formik.errors.dob && <div className="text-red-500 text-sm">{formik.errors.dob}</div>}
          
          <label className="font-medium">Time of Birth</label>
          <input type="time" name="tob" {...formik.getFieldProps("tob")} className="border p-2 rounded" />
          {formik.touched.tob && formik.errors.tob && <div className="text-red-500 text-sm">{formik.errors.tob}</div>}
          
          <label className="font-medium">Phone No.</label>
          <input type="text" name="phone" {...formik.getFieldProps("phone")} className="border p-2 rounded bg-gray-100" disabled readOnly/>
          {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-sm">{formik.errors.phone}</div>}
          
          <label className="font-medium">Email</label>
          <input type="email" name="email" {...formik.getFieldProps("email")} className="border p-2 rounded" />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}
          
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
