import React, { useState } from 'react';
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import project7 from '../src/assets/project7.jpg';
import project8 from '../src/assets/project8.jpg';
import project9 from '../src/assets/project9.jpg';
import project10 from '../src/assets/project10.jpg';
import project11 from '../src/assets/project11.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
     const [showMore, setShowMore] = useState(false);

     // Function to handle toggling between "See More" and "See Less"
     const handleToggle = () => {
          setShowMore(!showMore);
     };

     return (
          <>
               <section id="works">
                    <h2 className="worksTitle">My Projects</h2>
                    <span className="worksDesc">
                         I take pride in paying attention to the smallest details and making sure my work is pixel perfect.
                         I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
                    </span> 
                    
                    <div className="worksImgs">
                         {/* Display the first 6 projects always */}
                         <div className="projectItem">
                              <img src={project1} alt="project1" className="worksImg" />
                              <h3>Project 1: E-Commerce Website</h3>
                              <p>Developed a fully functional e-commerce website with a user-friendly interface, including shopping cart, product filtering, and payment integration.</p>
                         </div>
                         <div className="projectItem">
                              <img src={project2} alt="project2" className="worksImg" />
                              <h3>Project 2: Portfolio Website</h3>
                              <p>Designed and developed a responsive portfolio website showcasing my skills and projects, with an emphasis on clean design and user experience.</p>
                         </div>
                         <div className="projectItem">
                              <img src={project3} alt="project3" className="worksImg" />
                              <h3>Project 3: Mobile App UI Design</h3>
                              <p>Created a modern and intuitive mobile app UI design for a travel booking application, ensuring ease of use and accessibility.</p>
                         </div>
                         <div className="projectItem">
                              <img src={project4} alt="project4" className="worksImg" />
                              <h3>Project 4: Blogging Platform</h3>
                              <p>Built a blogging platform where users can create, edit, and share blog posts, featuring user authentication and commenting functionality.</p>
                         </div>
                         <div className="projectItem">
                              <img src={project5} alt="project5" className="worksImg" />
                              <h3>Project 5: Restaurant Website</h3>
                              <p>Designed a responsive restaurant website with an online menu, reservation system, and contact form to enhance customer engagement.</p>
                         </div>
                         <div className="projectItem">
                              <img src={project6} alt="project6" className="worksImg" />
                              <h3>Project 6: Social Media Dashboard</h3>
                              <p>Developed a social media dashboard that allows users to manage multiple accounts, schedule posts, and analyze engagement metrics.</p>
                         </div>

                         {/* Additional Projects: Visible only when showMore is true */}
                         {showMore && (
                              <>
                                   <div className="projectItem">
                                        <img src={project7} alt="project7" className="worksImg" />
                                        <h3>Project 7: Online Learning Platform</h3>
                                        <p>Created an online learning platform with courses, quizzes, and user progress tracking, providing an engaging educational experience.</p>
                                   </div>
                                   <div className="projectItem">
                                        <img src={project8} alt="project8" className="worksImg" />
                                        <h3>Project 8: Weather Forecasting App</h3>
                                        <p>Built a weather forecasting application with real-time data fetching, displaying current weather, forecasts, and alerts for different locations.</p>
                                   </div>
                                   <div className="projectItem">
                                        <img src={project9} alt="project9" className="worksImg" />
                                        <h3>Project 9: Fitness Tracker App</h3>
                                        <p>Developed a fitness tracking app that monitors physical activities, calorie intake, and workout progress, featuring an intuitive user interface.</p>
                                   </div>
                                   <div className="projectItem">
                                        <img src={project10} alt="project10" className="worksImg" />
                                        <h3>Project 10: Task Management Tool</h3>
                                        <p>Designed and developed a task management tool that enables users to create, assign, and track tasks, supporting team collaboration.</p>
                                   </div>
                                   <div className="projectItem">
                                        <img src={project11} alt="project11" className="worksImg" />
                                        <h3>Project 11: Online Auction Platform</h3>
                                        <p>Implemented an online auction platform where users can bid on items, manage listings, and interact with other users in real-time.</p>
                                   </div>
                              </>
                         )}
                    </div>

                    {/* Toggle button for See More / See Less */}
                    <button className="workBtn" onClick={handleToggle}>
                         {showMore ? "See Less" : "See More"}
                    </button>
               </section>
          </>
     );
}
