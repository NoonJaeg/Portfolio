import BBG from '../src/assets/BBGG.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';

export default function Home() {
     return (
          <>
               <section id="intro">
                    <div className="introContent">
                         <span className="hello">Hello,</span><br />
                         <span className="introText">I am <span className="introName">Issiaka Kone</span> 
                         <img src={BBG} alt="profile" className="bbg" width="300" height="500" align="right" />
                         <br />Aspiring Web Developer and Student</span>
                         <p className="introPara">I am a dedicated student with a passion for web development, eager to learn and grow my skills in creating visually appealing and user-friendly websites.</p>
                         
                         {/* Mission Statement */}
                         <p className="missionStatement">
                              My mission is to continually develop my skills as a web developer, gaining practical experience and contributing to projects that enhance my learning. I strive to build a strong foundation in web design and development that will enable me to make a meaningful impact in the field.
                         </p>

                         {/* Navigation Links to Other Pages */}
                         <div className="navigationLinks">
                              <Link to="/about" className="navButton">About Me</Link>
                              <Link to="/project" className="navButton">My Projects</Link>
                              <Link to="/services" className="navButton">Services</Link>
                              <Link to="/contact" className="navButton">Contact Me</Link>
                         </div>
                    </div>
               </section>
          </>
     );
}
