import styles from "./PetsDatingGroup.module.css";
import YellowHeart from "../../assets/heart-yellow.svg";
import PetsDating from "../PetsDating";
import PetGuido from "../../assets/dog-name-guido.svg";
import PetAbigail from "../../assets/dog-name-abigail.svg";
import PetPancho from "../../assets/parrot-name-pancho.svg";
import PetKiwi from "../../assets/parrot-name-kiwi.svg";
import PetBingo from "../../assets/dog-name-bingo.svg";
import PetJade from "../../assets/dog-name-jade.svg";
import PetLennon from "../../assets/cat-name-lennon.svg";
import PetJujuba from "../../assets/cat-name-jujuba.svg";

function PetsDatingGroup() {
  const firstCouplePets = "Guido e Abigail";
  const secondCouplePets = "Pancho e Kiwi";
  const thirdCouplePets = "Bingo e Jade";
  const fourthCouplePets = "Lennon e Jujuba";

  return (
    <div className={styles.PetsDating}>
      <div className={styles.PetsDatingGroup}>
        <div>
          <PetsDating
            firstPetCouple={PetGuido}
            heart={YellowHeart}
            thirdPetCouple={PetAbigail}
            nameCouple={firstCouplePets}
          />
        </div>
        <div>
          <PetsDating
            firstPetCouple={PetPancho}
            heart={YellowHeart}
            thirdPetCouple={PetKiwi}
            nameCouple={secondCouplePets}
          />
        </div>
        <div>
          <PetsDating
            firstPetCouple={PetBingo}
            heart={YellowHeart}
            thirdPetCouple={PetJade}
            nameCouple={thirdCouplePets}
          />
        </div>        
      </div>

      <div className={styles.PetsDatingGroup}>
        <div>
          <PetsDating
            firstPetCouple={PetLennon}
            heart={YellowHeart}
            thirdPetCouple={PetJujuba}
            nameCouple={fourthCouplePets}
          />
        </div>
        <div>
          <PetsDating
            firstPetCouple={PetGuido}
            heart={YellowHeart}
            thirdPetCouple={PetAbigail}
            nameCouple={firstCouplePets}


          />
        </div>
        <div>
          <PetsDating
            firstPetCouple={PetPancho}
            heart={YellowHeart}
            thirdPetCouple={PetKiwi}
            nameCouple={secondCouplePets}
          />
        </div>        
      </div>
      
    </div>

    
  );
}

export default PetsDatingGroup;
