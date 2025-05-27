'use client';
import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import styles from './finalPage.module.css';

const FinalPage = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <section className={styles.container}>
      {!feedback ? (
        <>
          <p className={styles.prompt}>Gostou do conteúdo?</p>
          <div className={styles.buttons}>
            <button
              onClick={() => setFeedback('yes')}
              className={styles.button}
              aria-label="Gostei"
            >
              <ThumbsUp size={16} color="#3574bb" />
              <span>Sim</span>
            </button>
            <button
              onClick={() => setFeedback('no')}
              className={styles.button}
              aria-label="Não gostei"
            >
              <ThumbsDown size={16} color="#a7d6ed" />
              <span>Não</span>
            </button>
          </div>
        </>
      ) : (
        <p className={`${styles.message} ${styles.fadeIn}`}>
          {feedback === 'yes'
            ? 'Obrigado pelo seu feedback! 💙'
            : 'Vamos melhorar! Obrigado pelo retorno 😊'}
        </p>
      )}
    </section>
  );
};

export default FinalPage;
