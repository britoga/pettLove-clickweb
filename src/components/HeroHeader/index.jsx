import styles from "./HeroHeader.module.css";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

function HeroHeader() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const nextPage = () => {
    navigate("/list");
  };

  return (
    <div className={styles.HeroHeader}>
      <div className={styles.HowItWorks}>COMO FUNCIONA</div>
      <div className={styles.FindSuitor}>
        {isMobile
          ? "Encontre um love para o seu animal sem sair de casa."
          : "Encontre um pretendente para o seu animal"}
      </div>
      <button className={styles.BtnStart} onClick={nextPage}>
        {" "}
        Comece agora!{" "}
      </button>
    </div>
  );
}

export default HeroHeader;
