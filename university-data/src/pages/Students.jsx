
import Content from "../components/Content";
import StudentImg from "../assets/img_2.png";
import "./Students.css";  // new CSS for the page

function Students() {
  return (
    <>

      <Content
        contentImg={StudentImg}
        cName="cont-mid"
        title="Students Desk"
        text=""              // keep blank so it doesn’t render a <p>
        btnClass="hide"
      />


      <div className="page students-page">
        <p>
          At launch code Student Desk, we’re dedicated to supporting you every step of your academic journey.
          Our team of academic advisors is available for one-on-one appointments to help you plan your coursework,
          choose your major, and set milestones for graduation.
        </p>

        <p>
          Beyond academics, we offer career counseling services—including resume reviews, mock interviews,
          and industry networking events—to prepare you for life after graduation. Our online portal
          features internship listings and alumni connections in over 50 fields.
        </p>

        <p>
          Need technical help? Our 24/7 IT support desk can assist with everything from setting up your campus email
          to troubleshooting Blackboard uploads. We also host weekly “Tech Tips” webinars to keep you up to date
          on the latest productivity tools.
        </p>

      </div>
    </>
  );
}

export default Students;