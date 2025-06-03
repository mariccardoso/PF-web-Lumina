"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./videoCarrosel.module.css";

const videosMock = [
  {
    title: "Dicas de Autocuidado em 60s",
    embedUrl: "https://www.youtube.com/embed/uY8HW4ggoKU",
  },
  {
    title: "Tutorial de Maquiagem Natural",
    embedUrl: "https://www.youtube.com/embed/vvqWgM1ipCM",
  },
  {
    title: "Cuidados com a Pele",
    embedUrl: "https://www.youtube.com/embed/GLyJoSqaLd8",
  },
];

const VideoCarousel = ({
  carouselTitle = "Inspire-se com vídeos rápidos",
  videos = videosMock,
  autoplayInterval = 7000,
  prevButtonText = "&lt;",
  nextButtonText = "&gt;",
  captionSuffix = "Assistir no YouTube",
  showControls = true,
  autoplay = true,
  muted = true,
  showRelated = false,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, autoplay, autoplayInterval]);

  const getIndex = (offset) =>
    (currentIndex + offset + videos.length) % videos.length;

  return (
    <section className={`${styles.carouselSection} ${className}`}>
      {carouselTitle && <h2 className={styles.title}>{carouselTitle}</h2>}
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={prevSlide}
          dangerouslySetInnerHTML={{ __html: prevButtonText }}
        />

        <div className={styles.videoContainer}>
          {[getIndex(-1), getIndex(0), getIndex(1)].map((index, i) => (
            <div
              key={index}
              className={`${styles.slide} ${
                i === 1 ? styles.activeSlide : styles.sideSlide
              }`}
            >
              <iframe
                src={`${videos[index].embedUrl}?autoplay=${
                  i === 1 && autoplay ? "1" : "0"
                }&mute=${muted ? "1" : "0"}&controls=${
                  showControls ? "1" : "0"
                }&rel=${showRelated ? "1" : "0"}`}
                title={videos[index].title}
                className={styles.iframe}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className={styles.caption}>
                {videos[index].title} •{" "}
                <a
                  href={videos[index].embedUrl.replace("embed/", "watch?v=")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {captionSuffix}
                </a>
              </p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={nextSlide}
          dangerouslySetInnerHTML={{ __html: nextButtonText }}
        />
      </div>
    </section>
  );
};

export default VideoCarousel;