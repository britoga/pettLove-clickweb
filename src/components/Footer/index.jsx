import styles from "./Footer.module.css";
import logoText from "../../assets/logo-footer.svg";
import facebook from "../../assets/logo-facebook.svg";
import instagram from "../../assets/logo-instagram.svg";
import youtube from "../../assets/logo-youtube.svg";
import clickweb from "../../assets/logo-clickweb.svg";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";
import { MdOutlineFileCopy } from "react-icons/md";
import useCopyToClipboard from "../../hooks/useToClipBoard";

function Footer() {
  // eslint-disable-next-line no-unused-vars
  const [value, copy] = useCopyToClipboard();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // função para copiar o valor do pix no clipboard do rodapé
  const CopyClipboardPix = (pix) => {
    copy(pix);

    return value;
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <img src={logoText} alt="logo" width="450px" height="112px" />
          <div className={styles.About}>
            <div className={styles.AboutText}>
              <p>Sobre nós</p>
              <p>Como funciona</p>
              <p>Dúvidas frequentes</p>
              <p>Blog</p>
            </div>

            <div className={styles.AboutText}>
              <p>Pets namorando</p>
              <p>Comece agora!</p>
              <p>Contato</p>
              <p />
            </div>

            <div className={styles.AboutText}>
              <p className={styles.Help}>Ajude uma entidade</p>
              <div>
                <p className={styles.Bank}>
                  SOS Vida Animal <IoIosArrowDown />
                </p>
                <p className={styles.Bank}>
                  Banco Itaú: Ag <span>8804</span> Conta <span>01234-5</span>{" "}
                  PIX: <span>43.660.696/0001-95</span>{" "}
                  <button
                    className={styles.CopyButton}
                    onClick={() => CopyClipboardPix("43.660.696/0001-95")}
                  >
                    <MdOutlineFileCopy />
                  </button>
                </p>
                <p />
                <p />
              </div>
            </div>
          </div>
          <div className={styles.Policy}>
            <p>Política de privacidade</p>
            <div className={styles.Bullet} />
            <p>Termos de uso</p>
            <div className={styles.Bullet} />
            <p>Política de Cookies</p>
            <div className={styles.Bullet} />
            <p>Política de cancelamento</p>
          </div>
        </div>
        <div className={styles.Contacts}>
          <div className={styles.ContainerInput}>
            <label>Receba nossas novidades</label>
            <div className={styles.InputContact}>
              <input type="text" placeholder="Digite seu e-mail" />
              <button> Cadastrar </button>
            </div>
          </div>
          <div className={styles.IconsFooter}>
            <div className={styles.ContainerIconFooter}>
              <img src={facebook} alt="logo" />
            </div>
            <div className={styles.ContainerIconFooter}>
              <img src={instagram} alt="logo" />
            </div>
            <div className={styles.ContainerIconFooter}>
              <img src={youtube} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Bottom}>
        <p>
          Pett Love - Relacionamento <span>|</span> CNPJ: 43.660.696/0001-95
        </p>
        <a className={styles.ArrowUp} onClick={scrollToTop} href>
          <SlArrowUp />
        </a>
        <img src={clickweb} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
