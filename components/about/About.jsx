import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      >
        MarketPlace is a startup founded in 2021 to provide a seamless platform
        for individuals looking to sell or rent their properties when migrating
        out of a country. Our team of tech and real estate experts recognized
        the challenges that individuals face when trying to sell or rent their
        properties in a timely and efficient manner, especially in the current
        climate of increasing waves of migrating Nigerians. Our platform offers
        users the ability to easily list their properties for sale or rent,
        connect with potential buyers or renters, and receive expert guidance
        and support throughout the entire process. We are committed to using
        technology to revolutionize the real estate industry and provide a
        trusted, user-friendly, and efficient platform.
      </motion.p>
      <br />
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 50 }}
      >
        At MarketPlace, our mission is to simplify the property selling and
        renting process for our users. We understand the importance of a
        seamless experience when it comes to making major life changes, such as
        relocating to a new country. With MarketPlace, users can take control of
        their property selling or renting experience and receive the best
        possible guidance and support.
      </motion.p>
    </section>
  );
};

export default About;
