import Typewriter from "typewriter-effect";
import moneyRain from "../../money-rain.gif";
import "./home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 10 }}
      >
        <Typewriter
          options={{
            strings: ["Sell", "Rent out"],
            autoStart: true,
            loop: true,
          }}
        />
        <p>your properties</p>
        <p>At ease for free</p>
        <p>Put up your properties for sale or rent before you JAPA! </p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {" "}
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 60 }}
      >
        <img src={moneyRain} alt="spending" />
      </motion.div>
    </section>
  );
}

export default Home;
