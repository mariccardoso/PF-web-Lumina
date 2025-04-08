// Arquivo: CarouselSection.jsx
'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './carousel.module.css'
import PostCard from '../postCard'

const CarouselSection = ({ posts, carouselTitle }) => {
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
    }, 2000); // Muda a cada 5 segundos
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
          <div className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.leftSlide}`}>
            <PostCard post={posts[getSlideIndex(currentIndex - 1)]} />
          </div>
          
          {/* Card central (ativo) */}
          <div className={`${styles.carouselSlide} ${styles.activeSlide}`}>
            <PostCard post={posts[currentIndex]} />
          </div>
          
          {/* Card da direita */}
          <div className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.rightSlide}`}>
            <PostCard post={posts[getSlideIndex(currentIndex + 1)]} />
          </div>
        </div>
        
        {/* Botões de navegação */}
        <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>
          &lt;
        </button>
        <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>
          &gt;
        </button>
        
        {/* Paginação */}
        <div className={styles.pagination}>
          {posts.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;