import Image from "next/image";
import styles from "./styles.module.scss";
import ProfileImage from "../../assets/profile.jpeg";

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <div className={styles["container--avatar"]}>
        <Image src={ProfileImage} alt="avatar" width={249} height={249} />
        <div>Meu perfil</div>
      </div>

      <h1>Raphael Raasch fialho</h1>
      <span>RaaschDev</span>
      <p>
        Desenvolvedor de software, apaixonado por tecnologia, gosto de tema
        claro.
      </p>
      <div className={styles["items-container"]}>
        <span>&copy; NOBA</span>
        <span>Rio Piracicaba</span>
        <span>devraasch@gmail.com</span>
      </div>
    </div>
  );
}
