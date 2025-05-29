
import Content from "../components/Content";
import AboutImg from "../assets/img_5.png";
import "./UniversityData.css";

const universityList = [
  { id: 1, name: "LaunchCode Tech", location: "St. Louis, MO", students: 5000 },
  { id: 2, name: "Code University", location: "San Francisco, CA", students: 7000 },
  { id: 3, name: "Tech Valley College", location: "Austin, TX", students: 6200 },
];

function UniversityData() {
  return (
    <>
      <Content
        contentImg={AboutImg}
        cName="cont-mid"
        title="University Information"
        btnClass="hide"
      />

      <div className="page university-data-page">
        <p>
          LaunchCode University offers high-quality, career-focused education that blends technical training with real-world experience. Our inclusive environment helps students grow academically and professionally.
        </p>

        <h2>Partner Universities</h2>
        <table className="university-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {universityList.map((uni) => (
              <tr key={uni.id}>
                <td>{uni.name}</td>
                <td>{uni.location}</td>
                <td>{uni.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UniversityData;