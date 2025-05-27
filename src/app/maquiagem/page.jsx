import CardMakeup from "@/components/cardMakeup";
import styles from "./maquiagem.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";
import CardHair from "@/components/cardHair";

export default function Maquiagem() {
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
        mainCardTitle={"Descubra o poder de uma boa maquiagem."}
        mainCardDescription={"Bem-vindo à nossa seção do Lumina Maquiagens!"}
        mainCardImage={
          "https://dicas.lovestoremakeup.com.br/wp-content/uploads/2023/03/make-up.jpg"
        }
        mainCardImageAlt={"Pinguins"}
        mainCardButton={"learn more"}
      />

      <CardMakeup
        hashtag="#CuidadosCapilares"
        description="Destaque a beleza dos seus cabelos com dicas e produtos especiais."
        cards={[
          {
            image:
              "https://i.pinimg.com/736x/1f/cd/e9/1fcde9e6358970db68499980d3c0640b.jpg",
            alt: "Hidratação",
            text: "Hidratação profunda para fios saudáveis.",
          },
          {
            image:
              "https://i.pinimg.com/736x/24/4a/65/244a65303801795d8c3c612a8ebc49c9.jpg",
            alt: "Nutrição",
            text: "Nutrição que devolve o brilho natural.",
          },
          {
            image:
              "https://i.pinimg.com/736x/02/e2/57/02e257a48b4348478d022a8616f9f8c5.jpg",
            alt: "Reconstrução",
            text: "Reconstrução para cabelos fortes e resistentes.",
          },
        ]}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/embed/f9s3fDAqLa0"
        title="Dicas de Maquiagem"
        description="Aprenda a fazer um delineado perfeito, veja dicas rápidas de produtos para sua pele e truques para destacar o olhar. Descubra como escolher a base ideal e como preparar a pele para uma maquiagem duradoura. Baixe nosso PDF com sugestões!"
        pdfLink="/assets/pdf/Produtosparapele.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/r2aBr0dfKbI"
        title="Produtos para Olhos"
        description="Descubra truques para destacar o olhar, dicas de produtos para olhos e recomendações de sombras e máscaras. Veja como aplicar delineador e rímel corretamente para valorizar seu olhar. Baixe o PDF exclusivo!"
        pdfLink="/assets/pdf/Produtosparaolhos.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/bBRjOuNFdgM"
        title="Lábios em Destaque"
        description="Dicas para contorno e acabamento dos lábios, sugestões de batons e glosses e truques para lábios perfeitos. Aprenda a escolher o tom ideal para cada ocasião e como hidratar os lábios antes da maquiagem. Baixe o PDF com recomendações!"
        pdfLink="/assets/pdf/Produtoparalabios.pdf"
        buttonText="Baixar PDF"
      />
      <CardHair
        hashtag="#DicasDeMaquiagem"
        cards={[
          {
            image:
              "https://s2-marieclaire.glbimg.com/u3pyS_24sOhyp3Fa5um-delyfiM=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2024/Z/c/biQi1vRKGb4bxixP5jKQ/snapinsta.app-328093634-521383383438965-291788460572024409-n-1080.jpg",
            alt: "Preparação da Pele",
            text: "Saiba como preparar a pele.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://www.belezanaweb.com.br/loucas-por-beleza/como-preparar-a-pele-para-maquiagem/",
          },
          {
            image:
              "https://media.istockphoto.com/id/1442518256/pt/foto/face-makeup-and-brush-with-a-woman-black-model-applying-foundation-to-her-skin-in-studio-for.jpg?s=612x612&w=0&k=20&c=awU0Hj8PN2s25MDq5uLmIHmG0wbfn2rMMl_M5EI8Q2M=",
            alt: "Base Ideal",
            text: "Descubra como escolher a base certa.",
            buttonText: "Saiba mais",
            buttonLink: "https://simpleorganic.com.br/blogs/simple-blog/como-encontrar-a-cor-ideal-de-base?utm_source=google&utm_medium=cpc&utm_campaign=20119148876&utm_content=154682190171&utm_term=&gad_source=1&gad_campaignid=20119148876&gbraid=0AAAAACNtaOOmRu0U-HfJErNsbQx75moH4&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6jhwjRiDwA1Pe-hYWNIAmTUylm5cp30K_07c139_sklQdYw_kEdP_QaAsjLEALw_wcB",
          },
          {
            image:
              "https://s2.glbimg.com/LLkLVLJIpwNQLN_dj5KKAW4RbHg=/e.glbimg.com/og/ed/f/original/2019/10/28/tamaragatinho_vLs5eWU.jpg",
            alt: "Olhos Marcantes",
            text: "Aprenda aplicar delineador.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://gshow.globo.com/comportamento/beleza/noticia/como-usar-o-delineador-sem-borrar-aprenda-3-dicas-faceis.ghtml",
          },
          {
            image:
              "https://plus.unsplash.com/premium_photo-1664304143731-dd6b1eac784d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
            alt: "Lábios Perfeitos",
            text: "Escolha o batom ideal para cada ocasião.",
            buttonText: "Saiba mais",
            buttonLink: "https://www.maybelline.com.br/dicas-de-maquiagem/labios/batom/guia-do-batom",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
