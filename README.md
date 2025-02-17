This is my First react app . make a react (javascript) project using Vite use React-Router, Redux, and Tailwind-Css (for css styles) 1st make a landing page or just a simple interface showing 3 different buttons. where each button represents route to different page. each button color should be different. For example: 3 routes = blue color for "/about" , orange color for "/details", green color for "/info" . Use one single button component here and pass respective color to that for your usecase, instead of making 3 different buttons to use. user should able to navigate to the provided routes. in any one route (for example: "/about"), display a form ui. use formik. go through formik docs and vdos and implement it. this form should contails fields "Your Name", "Date of Birth", "Time of Birth", "Phone Number", "Email" . Handle validations for all these fields. for "Your Name" , input type text:

    maximum length should be 50 characters
    should only accept alphabets, no integers, no symbols
    show error message below if name is short than 4 characters for "Phone Number" , input type text:
    should take maximum 10 characters
    should only take numbers, no symbol, no alphabet
    if user entered less than 10 characters, show error message below "Email" input type email: "Date of Birth" input type date "Time of Birth" input type time handle validation messages with formik and Yup. prioritize making components.

