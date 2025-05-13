import styles from "./carrosselTest.module.css";

const CarrosselTest = () => {
  const videos = [
    "https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1",
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {videos.map((src, index) => (
          <div key={index} className={styles.videoCard}>
            <iframe
              src={src}
              title={`Vídeo ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrosselTest;
