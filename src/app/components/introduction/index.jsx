import Image from "next/image";
import styles from "./introduction.module.css";

const Introduction = () => {
    return (
        <section className={styles.containerIntroduction}>
            <h2>Colocar uma breve descrição sobre a representação dos icones aqui, ou um slogan</h2>
            <div className={styles.cardIntroduction}>
              <div className={styles.cardItem}>
                <Image className={styles.logo} src={"/alvo.png"} alt='Icone de alvo' width={62} height={62}/>
                <p>Capacitar as mulheres a se encontrarem através do autocuidado.</p>
              </div>

              <div className={styles.cardItem}>
                <Image className={styles.logo} src={"/olho.png"} alt='Icone de olho' width={62} height={62}/>
                <p>Ser o blog de referência no mercado de autocuidado.</p>
              </div>

              <div className={styles.cardItem}>
                <Image className={styles.logo} src={"/diamante.png"} alt='Icone de diamante' width={62} height={62}/>
                  <p>Autocuidado, Inclusão, Empoderamento feminino</p>   
                </div>
            </div>
        </section>
    )
};

export default Introduction;