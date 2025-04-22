import styles from '../carouselSection/carousel.module.css'
import { Heart, MessageCircle } from 'lucide-react'

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard} style={{ backgroundImage: `url(${post.imageUrl})` }}>
      <div className={styles.overlay}>
        <div className={styles.icons}>
          <Heart size={18} />
          <MessageCircle size={18} />
        </div>
        <h3>{post.title}</h3>
      </div>
    </div>
  )
}

export default PostCard