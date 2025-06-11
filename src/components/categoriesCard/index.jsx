import styles from "./categoriesCard.module.css";

const CategoriesCard = ({ category }) => {
  return (
    <a href={category.link}>
      <div
        style={{ backgroundImage: `url(${category.image})` }}
        className={styles.categoriesCard}
      >
        <div className={styles.categoriesCardImageContainer}>
          <h2 className={styles.categoriesCardTitle}>{category.name}</h2>
        </div>
      </div>
    </a>
  );
};

export default CategoriesCard;
