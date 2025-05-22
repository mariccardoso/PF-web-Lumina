import styles from './cardHair.module.css';

export default function CardHair({ cards = [], hashtag }) {
  return (
    <div>
      {hashtag && <h2 className={styles.hashtag}>{hashtag}</h2>}
      <div className={styles.cardContainer}>
        {cards.map((card, idx) => (
          <div className={styles.card} key={idx}>
            <img src={card.image} alt={card.alt} className={styles.cardImage} />
            {card.text && (
              <p style={{ textAlign: 'center', margin: '12px 0 0 0' }}>{card.text}</p>
            )}
            {card.buttonText && card.buttonLink && (
              <a
                href={card.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                style={{ marginTop: 12 }}
              >
                {card.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}