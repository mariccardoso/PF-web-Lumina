import styles from "./videoSection.module.css";

const VideoSection = ({ videoSrc, title, description, pdfLink, buttonText }) => {
  return (
    <div className={styles.videoSectionContainer}>
      <div className={styles.videoAndDescription}>
        {/* Vídeo */}
        <div className={styles.videoContainer}>
          <iframe
            src={videoSrc}
            title="Vídeo tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Descrição e Botão */}
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}>
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
