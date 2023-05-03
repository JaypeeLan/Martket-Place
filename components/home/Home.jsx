import Typewriter from "typewriter-effect";
import moneyRain from "../../money-rain.gif";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div>
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
        <button>Get Started</button>
      </div>
      <div>
        <img src={moneyRain} alt="spending" />
      </div>
    </section>
  );
}

export default Home;
