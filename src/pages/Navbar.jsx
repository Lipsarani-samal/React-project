import React from 'react'

const Navbar = ({home,contact,service,color}) => (
  
    <ul className={`hover:text-blue-500`}>
        <li><a href="/home">{home}</a></li>
        <li><a href="/">{contact}</a></li>
        <li><a href="/">{service}</a></li>
    </ul>
        

        
  );

export default Navbar