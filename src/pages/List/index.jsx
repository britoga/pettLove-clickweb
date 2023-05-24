import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./List.module.css";
import AnouncerDesktop from "../../assets/anouncer-desktop.svg";
import AnouncerMobile from "../../assets/anouncer-mobile.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import Lottie from "lottie-react";
import PawLoading from "../../assets/paw.json";
import { useState } from "react";
import PetsDatingGroup from "../../components/PetsDatingGroup";

function List() {
  const isMobile = useMediaQuery("(max-width: 880px)");
  const isMobileBig = useMediaQuery("(max-width: 1400px)");

  const [loadIcon, setLoadIcon] = useState(false);
  const [loadListPlus, setloadListPlus] = useState(false);

  const loadList = () => {
    // setloadListPlus(true);
    setLoadIcon(true);
    setloadListPlus(false);
    setTimeout(() => {
      setLoadIcon(false);
      setloadListPlus(true);
    }, 4000);
  };

  return (
    <div className={styles.List}>
      <Header pageList />
      <section className={styles.Section}>
        <p>
          Pets <span>namorando</span>
        </p>
        <span>Duis aute irure dolor in reprehenderit in voluptate</span>
      </section>

      <PetsDatingGroup />

      {isMobileBig ? "" : <PetsDatingGroup />}

      {isMobile ? (
        <div className={styles.Anouncer}>
          <img src={AnouncerMobile} alt="logo" />
        </div>
      ) : (
        <div className={styles.Anouncer}>
          <img src={AnouncerDesktop} alt="logo" />
          
        </div>
      )}

      <PetsDatingGroup />

      {isMobileBig ? "" : <PetsDatingGroup />}

      <button
        className={styles.ButtonStart}
        onClick={loadList}
        disabled={loadIcon}
        style={
          loadIcon
            ? { backgroundColor: "#c9c9c9", color: "black", border: "none" }
            : { backgroundColor: "" }
        }
      >
        {" "}
        Carregar mais antigos{" "}
      </button>

      {loadIcon && (
        <Lottie
          animationData={PawLoading}
          style={{ height: 100, marginTop: 15 }}
        />
      )}

      {loadListPlus && <PetsDatingGroup />}
      {loadListPlus && <PetsDatingGroup />}

      <Footer />
    </div>
  );
}

export default List;
