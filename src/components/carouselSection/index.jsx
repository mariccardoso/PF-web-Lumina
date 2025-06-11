"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.css";
import PostCard from "../postCard";
import axios from "axios";

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isDesktop;
}

const CarouselSection = ({ carouselTitle }) => {
  const url = "https://lumina.coolify.fps92.dev/post";
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const isDesktop = useIsDesktop();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao buscar postagens:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), commentText]
    }));
  };

  const handleToggleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const goToSlide = (index) => {
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

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsTouching(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const getSlideIndex = (baseIndex) => {
    let index = baseIndex;
    if (index < 0) index = posts.length - 1;
    else if (index >= posts.length) index = 0;
    return index;
  };

  const renderPostCard = (indexOffset) => {
    if (posts.length === 0) return null;
    const post = posts[getSlideIndex(currentIndex + indexOffset)];
    return (
      <PostCard
        post={post}
        liked={likedPosts[post.id] || false}
        onLikeToggle={() => handleToggleLike(post.id)}
        comments={comments[post.id] || []}
        onAddComment={(text) => handleAddComment(post.id, text)}
      />
    );
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
          {isDesktop && (
            <div className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.leftSlide}`}>
              {renderPostCard(-1)}
            </div>
          )}
          <div className={`${styles.carouselSlide} ${styles.activeSlide}`}>
            {renderPostCard(0)}
          </div>
          {isDesktop && (
            <div className={`${styles.carouselSlide} ${styles.sideSlide} ${styles.rightSlide}`}>
              {renderPostCard(1)}
            </div>
          )}
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
