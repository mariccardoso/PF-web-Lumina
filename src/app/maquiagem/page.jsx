import styles from "./maquiagem.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";

const Maquiagem = () => {
  const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/curiosidades", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Maquiagens", href: "/maquiagem", active: true },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className={styles.container}>
      <Header logo="MemeVerse" navItens={navItens} />
      <MainCardSection
        mainCardTitle={"Descubra o poder de uma boa maquiagem."}
        mainCardDescription={"Bem-vindo à nossa seção do Lumina Maquiagens!"}
        mainCardImage={
          "https://dicas.lovestoremakeup.com.br/wp-content/uploads/2023/03/make-up.jpg"
        }
        mainCardImageAlt={"Pinguins"}
        mainCardButton={"learn more"}
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Deixe sua beleza brilhar com nossas dicas de maquiagem."
        description="Na nossa seção de Maquiagem, você vai encontrar tudo o que precisa para aprimorar seu visual! Ao lado, temos um tutorial exclusivo em vídeo onde ensinamos como fazer um delineado perfeito, com dicas essenciais para garantir um look de respeito e que dure o dia todo. Além disso, logo abaixo do vídeo, você pode acessar um PDF recheado de dicas valiosas sobre os melhores produtos para a pele, com sugestões que atendem a diferentes tipos de pele e necessidades. Não perca essas recomendações e comece a criar sua maquiagem dos sonhos!"
        pdfLink="/assets/pdf/Produtosparapele.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Seção de Produtos para os Olhos."
        description="Na nossa seção de produtos para os olhos, você vai encontrar tudo o que precisa para destacar o seu olhar! Ao lado, temos um tutorial exclusivo em vídeo ensinando como fazer um delineado perfeito, com dicas essenciais para garantir um visual marcante que dura o dia todo. Logo abaixo do vídeo, você também pode acessar um PDF cheio de recomendações sobre os melhores produtos específicos para a área dos olhos — incluindo sombras, máscaras de cílios e lápis — com sugestões ideais para diferentes estilos e ocasiões. Não perca essas dicas e realce ainda mais a beleza do seu olhar!"
        pdfLink="/assets/pdf/Produtosparaolhos.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Destaque Seus Lábios com Estilo"
        description="Se você ama realçar os lábios, esta seção é para você! Aqui reunimos os melhores produtos para deixar sua boca ainda mais bonita — batons, glosses, lápis e muito mais. Ao lado, você confere um vídeo exclusivo com truques para conquistar um contorno perfeito e um acabamento profissional. Logo abaixo, baixe um PDF completo com dicas sobre texturas, cores ideais para cada ocasião e cuidados essenciais para manter os lábios hidratados e saudáveis. Explore nossas sugestões e transforme seu look com um toque de cor e sofisticação!"
        pdfLink="/assets/pdf/Produtoparalabios.pdf"
        buttonText="Baixar PDF"
      />
      <Footer />
    </div>
  );
};

export default Maquiagem;
