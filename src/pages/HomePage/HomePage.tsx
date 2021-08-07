import "./HomePage.style.scss";
import Navbar from "../../components/Navbar/Navbar";
import StarBackground from "../../components/StarBackground/StarBackground";
import Countdown from "../../components/Countdown/Countdown";

const HomePage = () => {
  return (
    <div className="container">
      <StarBackground />
      <div className="content-container">
        <Navbar />
        <Countdown />
      </div>
    </div>
  );
};

export default HomePage;
