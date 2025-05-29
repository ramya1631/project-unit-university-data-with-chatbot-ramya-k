import './Button.css';

function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button type={type} onClick={onClick} className={`custom-btn ${className}`}>
      {text}
    </button>
  );
}

export default Button;