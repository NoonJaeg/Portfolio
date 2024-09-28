import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/Preview.png';

export default function Layout() {
 return (
 <>
     <img src={football1} alt="football" className="football" width="100px" height="100px" />
     <h1>My Portfolio</h1>
     
     <nav>
         <Link to="/">Home</Link> | 
         <Link to="/about">About</Link> | 
         <Link to="/education">Education</Link> | 
         <Link to="/project">Project</Link> | 
         <Link to="/services">Services</Link> | {/* Added Services link here */}
         <Link to="/contact">Contact</Link>
     </nav>
     <br />
     <hr />
 </>
 );
}
