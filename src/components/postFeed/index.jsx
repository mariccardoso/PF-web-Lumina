import { useEffect, useState } from "react";
import styles from "./postFeed.module.css";

const API_URL = "http://localhost:5000/post";

export default function PostFeed({ filter = "" }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        let postsArray = [];
        if (Array.isArray(data)) {
          postsArray = data;
        } else if (data && Array.isArray(data.posts)) {
          postsArray = data.posts;
        }
        setPosts(Array.isArray(postsArray) ? postsArray : []);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <section className={styles.feedSection}>
      <h2 className={styles.sectionTitle}>Postagens Recentes</h2>
      <div className={styles.feedGrid}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              className={styles.postCard}
              key={post.id}
              onClick={() => setSelectedPost(post)}
              style={{ cursor: "pointer" }}
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={styles.postImage}
                />
              )}
              <h3 className={styles.postTitle}>{post.title}</h3>
            </div>
          ))
        ) : (
          <div>Nenhuma postagem encontrada.</div>
        )}
      </div>

      {selectedPost && (
        <div className={styles.popupOverlay} onClick={() => setSelectedPost(null)}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.popupTitle}>{selectedPost.title}</h2>
            {selectedPost.imageUrl && (
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className={styles.popupImage}
              />
            )}
            <p className={styles.popupText}>{selectedPost.content}</p>
            <button
              className={styles.popupClose}
              onClick={() => setSelectedPost(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}