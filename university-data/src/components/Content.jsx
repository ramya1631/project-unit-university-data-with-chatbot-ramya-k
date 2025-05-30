import './Content.css';
import Button from './Button';

function Content(props) {
  return (
    <div className="content-container">
      <div className={props.cName}>
        <img alt="ContentImg" src={props.contentImg} className="content-image" />
        <div className="content-overlay" />
        <div className="content-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>

          {/* ✅ Reusable Button */}
          <Button to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Content;