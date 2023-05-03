import "./card.css";
import { motion } from "framer-motion";

const Card = ({ src, alt, text }) => {
  return (
    <motion.div
      className="card"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 30 }}
    >
      <img src={src} alt={alt} />
      <p>{text}</p>
    </motion.div>
  );
};

export default Card;
