import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/actions"; // Import action
import { useNavigate } from "react-router-dom";
import Button from "../pages/Button";
import "../App.css";
// import FileUpload from "../fileUpload/FileUpload";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    // Load Redux state and submission status from localStorage
    const storedData = localStorage.getItem("userData");
    const formSubmitted = localStorage.getItem("isFormSubmitted");

    if (storedData) {
      dispatch(setUserData(JSON.parse(storedData)));
    }
    if (formSubmitted === "true") {
      setIsFormSubmitted(true);
    }
  }, [dispatch]);


  
  
  
  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      tob: "",
      phone: "",
      email: "",
    },
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
    
    
    onSubmit: (values, { resetForm }) => {
      // Ensure all fields are filled
      if (!values.name || !values.dob || !values.tob || !values.phone || !values.email) {
        alert("Please fill out all fields before submitting.");
        return;
      }



      // Dispatch valid data to Redux
      dispatch(setUserData(values));
    
      // Retrieve previous submissions from localStorage
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    
      // Ensure storedData is an array before updating
      if (!Array.isArray(storedData)) {
        localStorage.setItem("userData", JSON.stringify([]));
      }
    
      // Append only valid data to localStorage
      const updatedSubmissions = [...storedData, values];
      localStorage.setItem("userData", JSON.stringify(updatedSubmissions));
    
      console.log("All Submissions:", updatedSubmissions); // Log all submissions to console
    
      alert("Form Submitted Successfully!");
    
      resetForm();
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
    
  });


  useEffect(() => {
    const isFilled = Object.values(formik.values).every((val) => val !== "");
    setIsFormFilled(isFilled);
  }, [formik.values]);

  
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500  p-5"
      >
        <div>
          <h1 className="text-blue-900 p-10 text-5xl">Welcome To About!</h1>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="border rounded px-2 py-1 w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
            className="border rounded px-2 py-1 w-full"
          />
          {formik.touched.dob && formik.errors.dob ? (
            <div className="text-red-500 text-sm">{formik.errors.dob}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="tob">Time of Birth</label>
          <input
            id="tob"
            name="tob"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tob}
            className="border rounded px-2 py-1 w-full"
          />
          {formik.touched.tob && formik.errors.tob ? (
            <div className="text-red-500 text-sm">{formik.errors.tob}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="border rounded px-2 py-1 w-full"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="border rounded px-2 py-1 w-full"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* <button
        
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Submit
        </button> */}
        <Button  type="submit" title="Click here to submit the form!" className={`${isFormSubmitted ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}>
          Submit
        </Button>

        <Button 
        type="button"
        title="Click here to view all Submission in a page!"
        color={isFormSubmitted ? "green" : "gray"} 
            onClick={() => {
            alert("WelCome to My Details Page!");
            navigate("/details");
          }}
          disabled={!isFormSubmitted}
          
          className={` ${isFormSubmitted ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
        >
          Details
        </Button>
        <Button
        
        type="button"
        title="Click here to view all Submission in a new Tab!"
        color={isFormSubmitted ? "purple" : "gray"}
        onClick={() => window.open("/submissions", "_blank")}
        className={`${isFormSubmitted ? "cursor-pointer" : "cursor-not-allowed opacity-50"} hover:bg-purple-600 bg-purple-500`}
        disabled={!isFormSubmitted}
        >
         View All Submissions
        </Button>
          
      </form>
       
      {userData && userData.name && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">Stored Data:</h3>
          <p>Name: {userData.name}</p>
          <p>Date of Birth: {userData.dob}</p>
          <p>Time of Birth: {userData.tob}</p>
          <p>Phone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
        </div>
      )} 
      {/* <FileUpload />  */}
    </div>
    
  );
};

export default Form;

