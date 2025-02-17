import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../pages/Button';
import '../App.css'

const Home = () => {
  const navigate = useNavigate();
  
      

  return (
    <div className=''>
      <div className='text-[30px]'>Welcome To My Home Page!</div>
    <div className="flex flex-row items-center justify-center min-h-screen space-x-9">
    
      <span className=''>
      <Button color="blue" 
      title="click here to visit About Page"
      onClick={() => navigate('/about')}> About</Button>
      </span>
      <span className='' ><Button color="green" title="click here to visit Details Page"onClick={() => navigate('/details')}>Details</Button></span>
      <span >
      <Button className='hover:bg-orange-600 bg-orange-500' 
      title="click here to visit Info Page"
      color="orange" onClick={() => navigate('/info')}>Info</Button>
      </span>
      
      </div>
  </div>

  );
 };

export default Home;
