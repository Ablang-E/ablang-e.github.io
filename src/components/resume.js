import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Courses from './courses';
import logo from './UIC_CS_logo.png'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="resume-Grid">
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Eric Ablang</h2>
                        <h4 style={{color: 'green'}}>Student Programmer</h4>
                        <hr style={{borderTop: '3px solid #27221F', width: '50%'}}/>
                        <h2>Location</h2>
                        <p style ={{fontSize: '20px'}}>Chicago, Illinois</p>
                        <hr style={{borderTop: '3px solid #27221F', width: '50%'}}/>
                        <h2>Phone</h2>
                        <p style ={{fontSize: '20px'}}>(847) 431-7513</p>
                        <hr style={{borderTop: '3px solid #27221F', width: '50%'}}/>
                        <h2>Email</h2>
                        <p style ={{fontSize: '20px'}}>ablange.eric@gmail.com</p>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear = {2016}
                        endYear = {2021}
                        schoolName = "University of Illinois at Chicago"
                        major = "Bachelor of Science - Computer Science Engineering"
                        />

                        <img
                        src = {logo}
                        alt = "logo"
                        className = "logo"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={"05/2018"}
                            endYear={"Present"}
                            jobName = "Student Manager - UIC Recreation"
                            jobDescription = "Leading a team of other students and having on-the-spot problem solving skills, adaptability, accountability, and customer service."
                        />
                        <Experience
                            startYear={"05/2017"}
                            endYear={"08/2017"}
                            jobName = "Team Member - Affintiv"
                            jobDescription = "Communicated with customers of all ages and backgrounds in order to set-up car service appointments that potentially led to more sales."
                        />
                        <Experience
                            startYear={"10/2015"}
                            endYear={"07/2016"}
                            jobName = "Computer Sales Associate - Best Buy"
                            jobDescription = "Sold and informed customers about various computer hardware and software.
                            Completed online modules for more knowledge on computer hardware.
                            Gained knowledge Mac OS, Windows, and Linux."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>


                        <h2>Skills</h2>
                        <Skills
                        skill="C       "
                        progress={70}
                        />
                        <Skills
                        skill="C++     "
                        progress={70}
                        />
                        <Skills
                        skill="Java          "
                        progress={75}
                        />
                        <Skills
                        skill="HTML/CSS"
                        progress={40}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Related Courses</h2>

                        <Courses
                        courseName="CS 111 - Program Design I"
                        courseDescription="Introduction to programming: control structures; variables and data types; problem decomposition and procedural programming; input and output; aggregate data structures including arrays; programming exercises."
                        />

                        <Courses
                        courseName="CS 141 - Program Design II"
                        courseDescription="Data abstraction and modular design; recursion; lists and stacks; dynamic memory allocation; file manipulation; programming exercises."
                        />

                        <Courses
                        courseName="CS 151 - Mathematical Foundations of Computing"
                        courseDescription="Discrete mathematics concepts fundamental to computing: propositional logic, predicates and quantifiers; proofs; sets; recursive definitions and induction; functions, relations and graphs; combinatorics and discrete probability; applications."
                        />

                        <Courses
                        courseName="CS 211 - Programming Practicum"
                        courseDescription="Software development tools and practices; debugging and testing; advanced language features; standard libraries; code management."
                        />

                        <Courses
                        courseName="CS 251 - Data Structures"
                        courseDescription="Design, usage and analysis of data structures: review of lists, stacks and queues; hash tables, priority queues, search trees, introduction to graphs; searching and sorting; runtime analysis; programming projects and lab exercises."
                        />

                        <Courses
                        courseName="CS 261 - Machine Organization"
                        courseDescription="Data representation and computer arithmetic; machine language; addressing; memory hierarchy; subroutines; data structures; processor architecture: hardwdare components, pipelining."
                        />

                        <Courses
                        courseName="CS 301 - Languages and Automata"
                        courseDescription="Regular sets and finite automata. Context-free languages and push-down automata. Parsing. Computability theory including Turing machines and decidability. "
                        />

                        <Courses
                        courseName="CS 341 - Programming Language Design and Implementation"
                        courseDescription="Programming language paradigms, design and implementation: syntax and semantics; parsing; runtime systems; control; data types; subroutines and exceptions; data and procedural abstraction; functional programming."
                        />

                        <Courses
                        courseName="CS 342 - Software Design"
                        courseDescription="Software design principles and practices: Object-oriented design; design patterns; software reuse; testing; event driven programming and concurrency; graphical user interface design and development; Team development."
                        />

                        <Courses
                        courseName="CS 361 - Systems Programming"
                        courseDescription="Study of computer systems emphasizing impact on application level programming. Virtual memory and memory management; code optimization; system-level I/O; concurrency: processes, threads, synchronization; introduction to network programming."
                        />

                        <Courses
                        courseName="CS 377 - Communication and Ethical Issues in Computing"
                        courseDescription="Communication skills for computing professionals: presentation organization, visual aides, delivery techniques, argument support. Ethical and societal issues in computing: privacy, intellectual property and ownership, crime."
                        />

                        <Courses
                        courseName="CS 401 - Computer Algorithms I"
                        courseDescription="Design and analysis of computer algorithms. Divide-and-conquer, dynamic programming, greedy method, backtracking. Algorithms for sorting, searching, graph computations, pattern matching, NP-complete problems."
                        />

                        <h2>In Progress Courses</h2>

                        <Courses
                        courseName="CS 362 - Computer Design"
                        courseDescription="Computer hardware building blocks. logic gates; combinational circuits; arithmetic circuits; flip flops and sequential circuits; registers and memory; CPU design; I/O design. Course Information: 3 hours. Extensive computer use required."
                        />

                        <Courses
                        courseName="CS 428 - Virtual, Augmented and Mixed Reality"
                        courseDescription="Virtual reality, augmented reality, and mixed reality environments, display devices, input devices, tracking, navigation, interaction, collaboration, generating visuals and sounds, software tools, applications, evaluation, safety."
                        />

                        <Courses
                        courseName="CS 478 - Programming Language Design"
                        courseDescription="Design and implementation of mobile applications; operating systems, object-oriented languages and programming environments for mobile platforms; integration with hardware components; and location-aware applications. Programming assignments required."
                        />

                        <Courses
                        courseName="CS 480 - Software Development for Mobile Platforms"
                        courseDescription="Database design, logical design, physical design. Relational databases. Recovery, concurrency control."
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
