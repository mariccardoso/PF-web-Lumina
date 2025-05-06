import styles from "./cardMakeup.module.css";

const CardMakeup = () => {
  return (
    <div>
      <p className={styles.objectives}>#LuminaPorVocê</p>
      <p className={styles.description}>
        Na Lumina, cada detalhe do seu rosto ganha destaque — da pele radiante ao olhar marcante e aos lábios cheios de personalidade.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="https://i.pinimg.com/736x/1f/cd/e9/1fcde9e6358970db68499980d3c0640b.jpg"
            alt="Imagem 1"
            className={styles.cardImage}
          />
          <div className={styles.cardText}>Olhos que falam por você!</div>
        </div>
        <div className={styles.card}>
          <img
            src="https://i.pinimg.com/736x/24/4a/65/244a65303801795d8c3c612a8ebc49c9.jpg"
            alt="Imagem 2"
            className={styles.cardImage}
          />
          <div className={styles.cardText}>Cor que revela seu estilo.</div>
        </div>
        <div className={styles.card}>
          <img
            src="https://i.pinimg.com/736x/02/e2/57/02e257a48b4348478d022a8616f9f8c5.jpg"
            alt="Imagem 3"
            className={styles.cardImage}
          />
          <div className={styles.cardText}>Cuide da pele, valorize sua beleza.</div>
        </div>
      </div>
    </div>
  );
};

export default CardMakeup;