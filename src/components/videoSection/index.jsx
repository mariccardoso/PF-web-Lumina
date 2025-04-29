import styles from "./videoSection.module.css";

const VideoSection = () => {
  return (
    <div className={styles.videoSectionContainer}>
      <div className={styles.videoAndDescription}>
        {/* Vídeo */}
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/tO0U_QM4Gjc"
            title="Vídeo tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Descrição e Botão */}
        <div className={styles.textContainer}>
          <p className={styles.title}>
            Deixe sua beleza brilhar com nossas dicas de maquiagem.
          </p>
          <p className={styles.description}>
            Na nossa seção de Maquiagem, você vai encontrar tudo o que precisa
            para aprimorar seu visual! Ao lado, temos um tutorial exclusivo em
            vídeo onde ensinamos como fazer um delineado perfeito, com dicas
            essenciais para garantir um look de respeito e que dure o dia todo.
            Além disso, logo abaixo do vídeo, você pode acessar um PDF recheado
            de dicas valiosas sobre os melhores produtos para a pele, com
            sugestões que atendem a diferentes tipos de pele e necessidades. Não
            perca essas recomendações e comece a criar sua maquiagem dos sonhos!
          </p>
          <div className={styles.buttonContainer}>
            <a
              href="/assets/pdf/Produtosparapele.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.button}
            >
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
