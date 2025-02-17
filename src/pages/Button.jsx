// import React from 'react';

// const Button = ({ color, children, ...props }) => (
//   <button
//     {...props}
//     className={`px-4 py-2 text-white rounded bg-${color}-500 hover:bg-${color}-600 `}
//   >
//     {children}
//   </button>
// );

// export default Button;

import React from "react";

const Button = ({ color = "blue", children, className, ...props }) => {
  // Ensure the color is valid before using it
  const bgColor = color ? `bg-${color}-500 hover:bg-${color}-600` : "bg-blue-500 hover:bg-blue-600";
  // Apply cursor styles based on the disabled prop
  
  return (
    <button
      {...props}
      className={`px-4 py-2 mx-5 text-white rounded ${bgColor} ${className}`}
      
    >
      {children}
    </button>
  );
};

export default Button;

