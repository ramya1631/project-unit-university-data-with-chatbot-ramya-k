  import Content from "../components/Content";
  import StudentImg from "../assets/img_2.png";
  import ServiceItem from "../components/ServiceItem";
  import "./Students.css";

  const services = [
    {
      title: "Academic Advising",
      description: "One-on-one support for coursework planning, choosing majors, and setting goals."
    },
    {
      title: "Career Counseling",
      description: "Resume reviews, mock interviews, and networking events to prepare for your career."
    },
    {
      title: "IT Help Desk",
      description: "24/7 support for tech issues like campus email, Blackboard, and online tools."
    }
  ];

  function Students() {
    return (
      <>
        <div className="students-hero">
          <img src={StudentImg} alt="Students Background" className="students-hero__image" />
          <div className="students-hero__overlay">
            <h1>Students Desk</h1>
            <p>Explore our range of student services designed to support your academic journey and career goals.</p>
          </div>
        </div>

        <div className="page students-page">
          <h2>Student Support Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                className="fade-in-card"
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  export default Students;