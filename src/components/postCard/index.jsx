import { useState } from 'react';
import styles from '../carouselSection/carousel.module.css';
import { Heart, MessageCircle } from 'lucide-react';
import { FaHeart } from "react-icons/fa";

const PostCard = ({ post, liked, onLikeToggle, comments, onAddComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      onAddComment(commentInput);
      setCommentInput('');
    }
  };

  return (
    <div className={styles.postCard} style={{ backgroundImage: `url(${post.imageUrl})` }}>
      <div className={styles.overlay}>
        <div className={styles.icons}>
          <span
            className={`${styles.likeIcon} ${liked ? styles.animateLike : ''}`}
            onClick={onLikeToggle}
          >
            {liked ? (
              <FaHeart color='red' size={20} />
            ) : (
              <Heart size={18} color="white" style={{ cursor: 'pointer' }} />
            )}
          </span>
          <MessageCircle
            size={18}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowComments((prev) => !prev)}
          />
        </div>

        <h3>{post.title}</h3>

        {showComments && (
          <div className={styles.commentsSection}>
            <form onSubmit={handleSubmitComment} className={styles.commentForm}>
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Digite um comentário..."
                className={styles.commentInput}
              />
              <button type="submit" className={styles.commentButton}>Enviar</button>
            </form>
            <ul className={styles.commentsList}>
              {comments.map((comment, idx) => (
                <li key={idx} className={styles.commentItem}>
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
