import CategoriesCard from "../categoriesCard";
import styles from "./categoriesSection.module.css";

const CategoriesSection = ({ categories, categoriesTitle }) => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.categoriesTitle}>{categoriesTitle}</h2>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
