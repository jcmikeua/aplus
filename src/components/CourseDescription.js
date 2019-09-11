import React from 'react';
import '../App.css';


class CourseDescription extends React.Component {

    render(){
        return(
            <div>
                <h3 style={{marginTop: '1em'}}>Course Information</h3>
                
                <h5>Course Design</h5>
                <p>NICERC’s CompTIA A+ curricula is designed to be a full year course where students take the Core
1 (220-1001) and Core 2 (220-1002) exams at the completion of the course/school year. The course
supplies hands-on activities and guided research for the students to go along with textbooks that are
designed for the exams. The school/teacher has the option of which textbook they would like to utilize
along with the projects in this course. Please note that it is not recommended that the schools provide
all three textbooks to go along with the course. The course is designed to be as hands on or off as
teachers want to be. If a teacher wants to be completely hands-off, they can hand the students the
supplies and the notes will guide them through the project. A teacher also has the ability to walk
through the project with the students.</p>
                
                <h5>Lessons</h5>
                <p>Every lesson contains a Teacher’s Notes and Student’s Notes.</p>
                <ul>
                    <li>The teacher’s notes contain the objective(s) that the lesson covers, an overview of the student’s
project, materials needed for the project, where research information can be located in certain
textbooks, as well as definitions to keywords.</li>
                    <li>The student’s notes contain an overview of the lesson as well as step by step instructions for the
project aligned with the objective(s).</li>
                </ul>
                <h5>Textbooks</h5>
                <ul>
                    <li>Andrews, Jean, et al. CompTIA A+ Guide to IT Technical Support. Cengage Learning, 2020.</li>
                    <li>Meyers, Mike. CompTIA A+ Certification All-In-One Exam Guide, Tenth Edition (Exams
220-1001 &amp; 220-1002). McGraw-Hill Education, 2019.</li>
                    <li>Wempen, Faithe. Comptia A+ Certification Study Guide, Exams 220 -1001 &amp; 220-1002.
McGraw-Hill Education, 2019.</li>
                </ul>

                <h5>Supplies</h5>
                <p>Please note that the curricula contains projects with various types of different hardware. It is understood
that every school has different hardware and software. It is recommended to have at least one old
or broken computer as well as one working system (preferably that the students build) in which the
students have full admin rights. The old/broken system will allow students to explore the hardware
without the worry of damaging the system while the working system will allow students to explore
the software side. While other supplies (router, printer, mobile devices, etc...) are encouraged, we
understand that not every classroom will be able to obtain all of these parts, thus they are not vital to
the course.</p>
            </div>

        )
    }

}

export default CourseDescription;