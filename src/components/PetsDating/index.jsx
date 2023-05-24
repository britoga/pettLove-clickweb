import styles from "./PetsDating.module.css";

function PetsDating(props) {
  return (
    <div className={styles.PetsDating}>
      <div className={styles.Container}></div>

      <div className={styles.GroupImages}>
        <img src={props.firstPetCouple} alt="Primeiro Pet" />
        <img src={props.heart} alt="Coração" />
        <img src={props.thirdPetCouple} alt="Segundo Pet" />
      </div>

      <p className={styles.NameCouplePet}>{props.nameCouple}</p>
    </div>
  );
}

export default PetsDating;
