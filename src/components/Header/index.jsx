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
          <img src={logoMobile} alt="logo" />
        </div>
      ) : (
        <div className={styles.imgLogo}>
          <img src={logoDesktop} alt="logo" />
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
