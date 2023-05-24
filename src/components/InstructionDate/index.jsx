import styles from "./InstructionDate.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function InstructionDate({ title, emphasisis, orderHorizontal, image, icon }) {
  const { width } = useWindowDimensions();

  return (
    <div
      className={styles.InstructionDate}
      data-aos="fade-up"
      style={
        width < 850
          ? orderHorizontal
            ? { flexDirection: "column" }
            : { flexDirection: "column" }
          : orderHorizontal
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <div className={styles.Image}>
        <img src={image} alt="logo"  />
      </div>

      <div className={styles.Description}>
        <img src={icon} alt="logo" />
        <div className={styles.Title}>
          {title}
          <span> {emphasisis} </span>
        </div>
        <div className={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          egestas, erat et convallis gravida, nisl libero imperdiet dolor, et
          vestibulum tortor quam in nunc.
        </div>
      </div>
    </div>
  );
}

export default InstructionDate;
