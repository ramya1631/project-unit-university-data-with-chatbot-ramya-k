import './Content.css'

function Content(props) {
  return (
    <div className={props.cName}>
      <img alt="ContentImg" src={props.contentImg} />

      <div className="content-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
    </div>
  );
}

export default Content;