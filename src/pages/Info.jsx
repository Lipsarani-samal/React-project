import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FileUpload from "../fileUpload/FileUpload";
const Info = () => (
  <div className="">
    <h1 className="">Info Page</h1>
    <FileUpload className=""/>
  </div>
);

export default Info;
