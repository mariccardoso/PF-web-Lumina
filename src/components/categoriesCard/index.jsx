import styles from "./categoriesCard.module.css";

const CategoriesCard = ({categories}) => {

  return (
    <>
      {categories.map((category) => (
        <div style={{backgroundImage: `url(${category.image})`}} className={styles.categoriesCard} key={category.id}>
          {/* <div className={styles.categoriesCardContent}>
            <h2 className={styles.categoriesCardTitle}>{category.name}</h2>
          </div> */}
            <div className={styles.categoriesCardImageContainer}>
            <h2 className={styles.categoriesCardTitle}>{category.name}</h2>
            </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesCard;
