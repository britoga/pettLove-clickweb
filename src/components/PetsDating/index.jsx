import styles from "./PetsDating.module.css";

function PetsDating(props) {
  return (
    <div className={styles.PetsDating}>
      <div className={styles.Container}></div>

      <div className={styles.GroupImages}>
        <img src={props.imgFirstPet} alt="Primeiro Pet" />
        <img src={props.imgSecondPet} alt="logo" />
        <img src={props.imgThirdPet} alt="Segundo" />
      </div>

      <p className={styles.NameCouplePett}>{props.nameCouple}</p>
    </div>
  );
}

export default PetsDating;
