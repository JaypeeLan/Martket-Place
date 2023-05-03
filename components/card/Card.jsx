import "./card.css";

const Card = ({ src, alt, text }) => {
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default Card;
