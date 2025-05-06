import styles from "./categoriesCard.module.css";

const CategoriesCard = ({categories}) => {

  return (
    <>
      {categories.map((category) => (
        <a key={category.id} href={category.link}>
        <div style={{backgroundImage: `url(${category.image})`}} className={styles.categoriesCard} > 
          {/* <div className={styles.categoriesCardContent}>
            <h2 className={styles.categoriesCardTitle}>{category.name}</h2>
          </div> */}
            <div className={styles.categoriesCardImageContainer}>
            <h2 className={styles.categoriesCardTitle}>{category.name}</h2>
            </div>
        </div>
        </a>        
      ))}

    </>
  );
};

export default CategoriesCard;
