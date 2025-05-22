import CardMakeup from "@/components/cardMakeup";
import styles from "./cuidadosCapilares.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";
import CardHair from "@/components/cardHair";

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
          "https://www.assai.com.br/sites/default/files/embalagens_com_produtos_capilares_e_uma_escova_de_cabelo_em_um_fundo_branco_-_cronograma_capilar_-_assai_atacadista.jpg"
        }
        mainCardImageAlt={"Cuidados Capilares"}
        mainCardButton={"Saiba mais"}
      />

      <CardMakeup
        hashtag="#CuidadosCapilares"
        description="Destaque a beleza dos seus cabelos com dicas e produtos especiais."
        cards={[
          {
            image:
              "https://img.freepik.com/fotos-gratis/pentear-e-cuidar-do-cabelo-castanho-longo-e-brilhante_23-2151968677.jpg?semt=ais_hybrid&w=740",
            alt: "Hidratação",
            text: "Hidratação profunda para fios saudáveis.",
          },
          {
            image:
              "https://abcdoabc.com.br/wp-content/uploads/2024/02/Estrategias-para-manter-seus-cabelos-saudaveis-no-verao-3.jpg",
            alt: "Nutrição",
            text: "Nutrição que devolve o brilho natural.",
          },
          {
            image:
              "https://realesimples.com.br/wp-content/uploads/2025/01/Como-finalizar-cabelo-ondulado-.jpg",
            alt: "Reconstrução",
            text: "Reconstrução para cabelos fortes e resistentes.",
          },
        ]}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/embed/SoRNzs0MvKQ"
        title="Dicas essenciais para manter seus cabelos lindos e fortes"
        description="Aqui você encontra tudo sobre cuidados capilares! Assista ao vídeo ao lado para aprender como lavar corretamente os fios, escolher o shampoo ideal e evitar danos diários. Logo abaixo, baixe um PDF com dicas de rotina capilar, hidratação e proteção térmica para todos os tipos de cabelo."
        pdfLink="/assets/pdf/RotinaCapilar.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/c7SRPDpkxf8"
        title="Tratamentos para crescimento e fortalecimento dos fios"
        description="Descubra tratamentos eficazes para estimular o crescimento saudável dos cabelos e fortalecer a raiz. No vídeo, mostramos receitas caseiras e produtos recomendados. Baixe o PDF com um guia completo de ingredientes naturais e dicas para evitar a queda capilar."
        pdfLink="/assets/pdf/CrescimentoCapilar.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/Zsg9KQWABB4"
        title="Como proteger os cabelos do calor e da química"
        description="Saiba como proteger seus fios do uso frequente de secador, chapinha e procedimentos químicos. No vídeo, veja técnicas de proteção térmica e cuidados pós-química. Baixe o PDF com recomendações de produtos e cronograma capilar para manter os cabelos sempre saudáveis."
        pdfLink="/assets/pdf/ProtecaoCapilar.pdf"
        buttonText="Baixar PDF"
      />
     <CardHair 
     hashtag="#DicasCapilares"
  cards={[
    {
      image: "https://www.segs.com.br/media/k2/items/cache/0149e3a2a6780712e9869e50498bae57_XL.jpg",
      alt: "Hidratação",
      text: "Hidratação profunda para fios saudáveis.",
      buttonText: "Saiba mais",
      buttonLink: "https://www.eudora.com.br/guia-da-beleza/5-dicas-para-fazer-uma-hidratacao-poderosa/"
    },
    {
      image: "https://topview.com.br/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-04-at-14.48.06-450x450.jpeg",
      alt: "Nutrição",
      text: "Nutrição que devolve o brilho natural.",
      buttonText: "Saiba mais",
      buttonLink: "https://www.loreal-paris.com.br/cabelo-danificado?&&&&gad_source=1&gad_campaignid=21517385425&gbraid=0AAAAADpCDXgIZSHTWiW4MlrMH3Be0PNxI&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgOTxoc_y7Jx4U5IpNjbMIGj1Is9pk5VK8qJvJjAQSi5TrofGhBd2ohEaAsZMEALw_wcB&gclsrc=aw.ds"
    },
    {
      image: "https://img.freepik.com/fotos-premium/mulher-morena-linda-de-cabelos-longos-com-modelo-feminino-de-penteado-de-beleza-tiro-do-estudio-branco-isolado_431835-4170.jpg",
      alt: "Reconstrução",
      text: "Para cabelos fortes e resistentes.",
      buttonText: "Saiba mais",
      buttonLink: "https://casakose.com.br/dicas-para-o-cabelo-crescer/?srsltid=AfmBOorBctgu_j-tSqXSZbCUrnYESI6dOYhKafwyeOuJxEmY-wSjxkwV"
    },
    {
      image: "https://riuspjr.com.br/wp-content/uploads/2024/06/produto-capilar-instagram.webp",
      alt: "Proteção",
      text: "Proteção térmica para evitar danos.",
      buttonText: "Saiba mais",
      buttonLink: "https://www.mreviews.com.br/1281/top-10-melhores-protetores-termicos-de-cabelo-de-2024?gad_source=1&gad_campaignid=21113390563&gbraid=0AAAAAo77clWJ4DkCRuQx9_tA5jAaP0Kkb&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgOT-sWUh6OrGCkhX-uCHmIeyoniKsfie-JWGbqL7_1QfVghPaNSxuMAaArLAEALw_wcB"
    },
  ]}
/>
      <Footer />
    </div>
  );
}
