import useMediaQuery from "../../hooks/useMediaQuery";
import { BiMenuAltLeft, BiUser } from "react-icons/bi";
import logoDesktop from "../../assets/logo-desktop.svg";
import logoMobile from "../../assets/logo-mobile.svg";

import styles from "./Header.module.css";

function Header(listPage) {

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={styles.Header}
      style={listPage ? { backgroundColor: "white" } : ""} /* Mobile */
    >

      <button className={styles.BtnMenu}>
        {" "}
        <BiMenuAltLeft /> <text>Menu</text>{" "}
      </button>

      {isMobile ? (
        <div className={styles.imgLogoMobile}>
          <a href="/"> <img src={logoMobile} alt="logo" /> </a>
        </div>
      ) : (
        <div className={styles.imgLogo}>
          <a href="/"> <img src={logoDesktop} alt="logo" /> </a>
        </div>
      )}

      <button className={styles.BtnLogin}>
        {" "}
        <BiUser /> <text>Entrar</text>{" "}
      </button>
      
    </div>
  );
}

export default Header;
