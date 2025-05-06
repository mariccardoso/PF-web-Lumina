// Arquivo: CarouselSection.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.css";
import PostCard from "../postCard";
import axios from "axios";

const CarouselSection = ({ carouselTitle }) => {
  const url = "http://localhost:5000/post";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fecthPosts = async () => {
      try {
        const response = await axios.get(url); // Faz a requisição para a API
        setPosts(response.data); // Atualiza o estado conpmm os posts recebidos
        console.log(posts)
      } catch (error) {
        console.error("Erro ao buscar postagens:");
      }
    };

    fecthPosts(); // Chama a função para buscar os posts
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    // Garante que o índice esteja dentro dos limites
    let newIndex = index;
    if (index < 0) {
      newIndex = posts.length - 1;
    } else if (index >= posts.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Handlers para eventos de toque
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsTouching(true);

    // Limpa o intervalo durante o toque
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Evitar mudanças acidentais - requer movimento mínimo
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);

    // Reinicia o intervalo após o toque
    startAutoSlide();
  };

  // Iniciar slideshow automático
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500); // Muda a cada 3.5 segundos
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Função para obter o índice modificado que suporta looping
  const getSlideIndex = (baseIndex) => {
    let index = baseIndex;
    if (index < 0) {
      index = posts.length - 1;
    } else if (index >= posts.length) {
      index = 0;
    }
    return index;
  };
  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>{carouselTitle}</h2>
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselTrack}>
          {/* Card da esquerda */}
          <div
            className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.leftSlide}`}
          >
            {posts.length > 0 && (
              <PostCard post={posts[getSlideIndex(currentIndex - 1)]} />
            )}
          </div>

          {/* Card central (ativo) */}
          <div className={`${styles.carouselSlide} ${styles.activeSlide}`}>
            {posts.length > 0 && (
              <PostCard post={posts[getSlideIndex(currentIndex)]} />
            )}
          </div>

          {/* Card da direita */}
          <div
            className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.rightSlide}`}
          >
            {posts.length > 0 && (
              <PostCard post={posts[getSlideIndex(currentIndex + 1)]} />
            )}
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          &lt;
        </button>
        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
