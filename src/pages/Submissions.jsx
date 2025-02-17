// import React from "react";
// import { useSelector } from "react-redux";

// const Submissions = () => {
//   const userData = useSelector((state) => state.userData);

//   if (!userData || userData.length === 0) {
//     return (
//       <div className="p-5">
//         <h1 className="text-xl font-bold">No submissions found!</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 bg-blue-200">
//       <h1 className="text-2xl font-bold text-blue-900 p-10">All Submissions</h1>
//       {userData.map((submission, index) => (
//         <div key={index} className="mb-5 p-4 border rounded bg-white shadow">
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

// export default Submissions;
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const userData = useSelector((state) => state.userData) || [];
  const navigate = useNavigate();

  // Filter out any empty submissions
  const validSubmissions = userData.filter(
    (sub) => sub.name && sub.dob && sub.tob && sub.phone && sub.email
  );

  useEffect(() => {
    console.log("Valid Submissions:", validSubmissions);
    if (validSubmissions.length > 0) {
      alert("Here are all your previous submissions in another Tab!");
    }
  }, [validSubmissions]);

  if (validSubmissions.length === 0) {
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
    <div className="p-10 bg-blue-200">
      <h1 className="text-2xl font-bold text-blue-900 p-10">All User Details</h1>
      {/* Iterate through only valid user submissions */}
      {validSubmissions.map((submission, index) => (
        <div key={index} className="mb-5 p-4 border rounded bg-blue-100 shadow-md">
          <h2 className="font-semibold">Submission {index + 1}</h2>
          <p><strong>Name:</strong> {submission.name}</p>
          <p><strong>Date of Birth:</strong> {submission.dob}</p>
          <p><strong>Time of Birth:</strong> {submission.tob}</p>
          <p><strong>Phone:</strong> {submission.phone}</p>
          <p><strong>Email:</strong> {submission.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;

