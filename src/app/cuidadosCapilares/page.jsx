import CardMakeup from "@/components/cardMakeup";
import styles from "./cuidadosCapilares.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";

export default function CuidadosCapilares() {
  const navItens = [
    { label: "Início", href: "/", active: false },
    { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/curiosidades", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className={styles.container}>
      <Header logo="MemeVerse" navItens={navItens} />
      <MainCardSection
        mainCardTitle={"Descubra o segredo para cabelos saudáveis."}
        mainCardDescription={
          "Bem-vindo à nossa seção de Cuidados Capilares do Lumina!"
        }
        mainCardImage={
          "https://www.dicasdemulher.com.br/wp-content/uploads/2020/06/cuidados-com-o-cabelo-1.jpg"
        }
        mainCardImageAlt={"Cuidados Capilares"}
        mainCardButton={"Saiba mais"}
      />

      <CardMakeup
        hashtag="#CuidadosCapilares"
        description="Destaque a beleza dos seus cabelos com dicas e produtos especiais."
        cards={[
          {
            image: "/images/hidratacao.jpg",
            alt: "Hidratação",
            text: "Hidratação profunda para fios saudáveis.",
          },
          {
            image: "/images/nutrição.jpg",
            alt: "Nutrição",
            text: "Nutrição que devolve o brilho natural.",
          },
          {
            image: "/images/reconstrucao.jpg",
            alt: "Reconstrução",
            text: "Reconstrução para cabelos fortes e resistentes.",
          },
        ]}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/embed/4Q1Q1Q1Q1Q1?autoplay=1&mute=1"
        title="Dicas essenciais para manter seus cabelos lindos e fortes"
        description="Aqui você encontra tudo sobre cuidados capilares! Assista ao vídeo ao lado para aprender como lavar corretamente os fios, escolher o shampoo ideal e evitar danos diários. Logo abaixo, baixe um PDF com dicas de rotina capilar, hidratação e proteção térmica para todos os tipos de cabelo."
        pdfLink="/assets/pdf/RotinaCapilar.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/4Q1Q1Q1Q1Q1?autoplay=1&mute=1"
        title="Tratamentos para crescimento e fortalecimento dos fios"
        description="Descubra tratamentos eficazes para estimular o crescimento saudável dos cabelos e fortalecer a raiz. No vídeo, mostramos receitas caseiras e produtos recomendados. Baixe o PDF com um guia completo de ingredientes naturais e dicas para evitar a queda capilar."
        pdfLink="/assets/pdf/CrescimentoCapilar.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/4Q1Q1Q1Q1Q1?autoplay=1&mute=1"
        title="Como proteger os cabelos do calor e da química"
        description="Saiba como proteger seus fios do uso frequente de secador, chapinha e procedimentos químicos. No vídeo, veja técnicas de proteção térmica e cuidados pós-química. Baixe o PDF com recomendações de produtos e cronograma capilar para manter os cabelos sempre saudáveis."
        pdfLink="/assets/pdf/ProtecaoCapilar.pdf"
        buttonText="Baixar PDF"
      />

      <Footer />
    </div>
  );
}
