
import Content from "../components/Content";
import AboutImg from "../assets/img_4.png";
import "./UniversityData.css";

function UniversityData() {
  return (
    <>

      <Content
        contentImg={AboutImg}
        cName="cont-mid"
        title="About Information"
        btnClass="hide"
      />
    <div className="page university-data-page">
      <p>
        LaunchCode University offers high-quality, career-focused education that blends technical training with real-world experience. Our inclusive environment helps students grow academically and professionally.
      </p>
    </div>
    </>
  );
}

export default UniversityData;