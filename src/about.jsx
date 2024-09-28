import React from 'react';
import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import profilePic from '../src/assets/Profile ic.jpg'; // Replace with your profile image path
import resumePDF from '../src/assets/resume.pdf'; // Replace with your actual resume PDF path
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/about.css';

export default function About() {
     return (
          <>
               {/* Section for About Me */}
               <section id="about-me">
                    <h1 className="sectionTitle">About Me</h1>
                    <div className="aboutContent">
                         <img src={profilePic} alt="Profile" className="profileImage" /> {/* Head and Shoulders Shot */}
                         <div className="aboutText">
                              <h2>Issiaka Kone</h2> {/* Your legal name */}
                              <p>
                                   I am a dedicated student with a passion for web design and development, currently pursuing my education to enhance my skills in this field. I have a keen interest in creating visually appealing and user-friendly websites, and I’m continually learning and improving my abilities in HTML, CSS, JavaScript, and various design tools like Adobe Photoshop and Illustrator.
                                   <br /><br />
                                   As an aspiring web developer, I am always excited to tackle new challenges and explore different aspects of web technologies. My goal is to gain practical experience through projects and collaborations that will enable me to make a meaningful impact in the industry. I am highly motivated, eager to learn, and committed to building a strong foundation in web development that will serve as the cornerstone of my future career.
                              </p>
                              {/* Link to your PDF Resume */}
                              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resumeLink">Download My Resume</a>
                         </div>
                    </div>
               </section>

               {/* Updated "What I do" Section */}
               <section id="skill">
                    <span className="skillTitle">What I do</span>
                    <span className="skillDesc">
                         I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
                    </span>
                    <div className="skillBar">
                         <img src={ux} alt="UIDesign" className="skillBarImg" />
                         <div className="skillBarText">
                              <h2>UI/UX Design</h2>
                              <p>
                                   I have experience in designing intuitive and visually appealing interfaces, focusing on user experience. I understand the importance of creating user-friendly designs that are both functional and aesthetically pleasing, ensuring that users can navigate websites or applications effortlessly.
                              </p>
                         </div>
                    </div>
                    
                    <div className="skillBar">
                         <img src={web} alt="WebDesign" className="skillBarImg" />
                         <div className="skillBarText">
                              <h2>Web Design</h2>
                              <p>
                                   As a web designer, I have developed skills in HTML, CSS, and JavaScript to create responsive, modern, and engaging websites. My goal is to ensure that every website I design is visually appealing, optimized for performance, and provides a seamless user experience across different devices and browsers.
                              </p>
                         </div>
                    </div>
                    
                    <div className="skillBar">
                         <img src={app} alt="AppDesign" className="skillBarImg" />
                         <div className="skillBarText">
                              <h2>App Design</h2>
                              <p>
                                   I am exploring mobile app design, focusing on creating intuitive interfaces and user experiences for mobile platforms. I aim to design applications that are not only functional but also engaging, ensuring that they cater to the needs and expectations of end-users.
                              </p>
                         </div>
                    </div>
               </section>
          </>
     );
}
