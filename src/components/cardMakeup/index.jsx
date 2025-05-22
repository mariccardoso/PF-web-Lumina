import styles from "./cardMakeup.module.css";

const CardMakeup = ({
  hashtag = "#LuminaPorVocê",
  description = "Na Lumina, cada detalhe do seu rosto ganha destaque — da pele radiante ao olhar marcante e aos lábios cheios de personalidade.",
  cards = [
    {
      image: "https://i.pinimg.com/736x/1f/cd/e9/1fcde9e6358970db68499980d3c0640b.jpg",
      alt: "Imagem 1",
      text: "Olhos que falam por você!",
    },
    {
      image: "https://i.pinimg.com/736x/24/4a/65/244a65303801795d8c3c612a8ebc49c9.jpg",
      alt: "Imagem 2",
      text: "Cor que revela seu estilo.",
    },
    {
      image: "https://i.pinimg.com/736x/02/e2/57/02e257a48b4348478d022a8616f9f8c5.jpg",
      alt: "Imagem 3",
      text: "Cuide da pele, valorize sua beleza.",
    },
  ],
}) => {
  return (
    <div>
      <p className={styles.objectives}>{hashtag}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.cardContainer}>
        {cards.map((card, idx) => (
          <div className={styles.card} key={idx}>
            <img
              src={card.image}
              alt={card.alt}
              className={styles.cardImage}
            />
            <div className={styles.cardText}>{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMakeup;