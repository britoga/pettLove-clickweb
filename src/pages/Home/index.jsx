import Hero from "../../components/HeroHeader";
import InstructionDate from "../../components/InstructionDate";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import FirstImage from "../../assets/hugging-dog.svg";
import SecondImage from "../../assets/two-gods-smile.svg";
import ThirdImage from "../../assets/one-cat.svg";
import Paw from "../../assets/icon-paw.svg";
import Sear from "../../assets/icon-sear.svg";
import Agende from "../../assets/icon-schedule.svg";
import Dashed from "../../assets/dashed-desktop.svg";
import DashedMin from "../../assets/dashed-mobile.svg";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  const stepOneTitle = "Cadastre seu";
  const stepOneTitleEmphasis = "animal";
  const stepSecondTitle = "Procuro";
  const stepSecondTitleEmphasis = "pretendentes";
  const stepThirdTitle = "Marque um";
  const stepThirdTitleEmphasis = "encontro";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Home">
      <Header />
      <Hero />

      <div className={styles.Content}>
        <InstructionDate
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal
          image={FirstImage}
          icon={Paw}
        />

        <div className={styles.Dashed}>
          <img src={Dashed} alt="dashed" />
        </div>

        <div className={styles.DashedMin}>
          <img src={DashedMin} alt="dashed" />
        </div>

        <InstructionDate
          title={stepSecondTitle}
          emphasisis={stepSecondTitleEmphasis}
          image={SecondImage}
          icon={Sear}
        />

        <div className={styles.DashedTransform}>
          <img src={Dashed} alt="dashed" />
        </div>

        <div className={styles.DashedMinTransform}>
          <img src={DashedMin} alt="dashed" />
        </div>

        <InstructionDate
          title={stepThirdTitle}
          emphasisis={stepThirdTitleEmphasis}
          orderHorizontal
          image={ThirdImage}
          icon={Agende}
        />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
