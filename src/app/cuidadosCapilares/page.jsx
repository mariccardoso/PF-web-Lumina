import CardMakeup from "@/components/cardMakeup";
import styles from "./cuidadosCapilares.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";
import CardHair from "@/components/cardHair";
import VideoCarousel from "@/components/videoCarrosel";
import QuizTest from "@/components/quizTest";
import FinalPage from "@/components/finalPage";

export default function CuidadosCapilares() {
  const meusVideos = [
    {
      title: "Dicas de Autocuidado",
      embedUrl: "https://www.youtube.com/embed/zJbPDbyqxpQ", // Corrigido para embed
    },
    {
      title: "Cuidados com os cabelos",
      embedUrl: "https://www.youtube.com/embed/5zRPlFxIMFg", // Corrigido para embed
    },
    {
      title: "Penteados fáceis para o dia a dia",
      embedUrl: "https://www.youtube.com/embed/pAv68rPG2ZI", // Corrigido para embed
    },
  ];
  const navItens = [
    { label: "Início", href: "/", active: false },
    // { label: "Dicas", href: "/feed", active: false },
    { label: "Feed", href: "/Feed", active: false },
    { label: "Contato", href: "/contato", active: false },
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
        videoSrc="https://www.youtube.com/embed/cnKNFUohw84"
        title="Dicas essenciais para manter seus cabelos lindos e fortes"
        description="Tudo sobre cuidados para cabelos lisos! Veja no vídeo como lavar corretamente, escolher o shampoo ideal e evitar danos comuns. Baixe o PDF com dicas de rotina, hidratação e proteção térmica específicas para fios lisos."
        pdfLink="/assets/pdf/cabelosLisos.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/c7SRPDpkxf8"
        title="Tratamentos para crescimento e fortalecimento dos fios"
        description="Aqui você encontra tudo sobre cuidados para cabelos crespos e cacheados! Assista ao vídeo ao lado para aprender técnicas de lavagem, escolha de produtos ideais e como evitar o ressecamento. Logo abaixo, baixe um PDF com dicas de rotina capilar, hidratação, finalização e proteção para valorizar seus cachos e crespos."
        pdfLink="/assets/pdf/cabelosCrespos.pdf"
        buttonText="Baixar PDF"
      />

      <CardHair
        hashtag="#DicasCapilares"
        cards={[
          {
            image:
              "https://www.segs.com.br/media/k2/items/cache/0149e3a2a6780712e9869e50498bae57_XL.jpg",
            alt: "Hidratação",
            text: "Hidratação profunda para fios saudáveis.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://www.eudora.com.br/guia-da-beleza/5-dicas-para-fazer-uma-hidratacao-poderosa/",
          },
          {
            image:
              "https://topview.com.br/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-04-at-14.48.06-450x450.jpeg",
            alt: "Nutrição",
            text: "Nutrição que devolve o brilho natural.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://www.loreal-paris.com.br/cabelo-danificado?&&&&gad_source=1&gad_campaignid=21517385425&gbraid=0AAAAADpCDXgIZSHTWiW4MlrMH3Be0PNxI&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgOTxoc_y7Jx4U5IpNjbMIGj1Is9pk5VK8qJvJjAQSi5TrofGhBd2ohEaAsZMEALw_wcB&gclsrc=aw.ds",
          },
          {
            image:
              "https://img.freepik.com/fotos-premium/mulher-morena-linda-de-cabelos-longos-com-modelo-feminino-de-penteado-de-beleza-tiro-do-estudio-branco-isolado_431835-4170.jpg",
            alt: "Reconstrução",
            text: "Para cabelos fortes e resistentes.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://casakose.com.br/dicas-para-o-cabelo-crescer/?srsltid=AfmBOorBctgu_j-tSqXSZbCUrnYESI6dOYhKafwyeOuJxEmY-wSjxkwV",
          },
          {
            image:
              "https://riuspjr.com.br/wp-content/uploads/2024/06/produto-capilar-instagram.webp",
            alt: "Proteção",
            text: "Proteção térmica para evitar danos.",
            buttonText: "Saiba mais",
            buttonLink:
              "https://www.mreviews.com.br/1281/top-10-melhores-protetores-termicos-de-cabelo-de-2024?gad_source=1&gad_campaignid=21113390563&gbraid=0AAAAAo77clWJ4DkCRuQx9_tA5jAaP0Kkb&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgOT-sWUh6OrGCkhX-uCHmIeyoniKsfie-JWGbqL7_1QfVghPaNSxuMAaArLAEALw_wcB",
          },
        ]}
      />
      <VideoCarousel
        carouselTitle="#LuminaVideos"
        videos={meusVideos}
        autoplayInterval={5000}
        prevButtonText="←"
        nextButtonText="→"
        captionSuffix="Ver no YouTube"
        showControls={false}
        autoplay={false}
        muted={false}
        showRelated={true}
        className="meu-carrossel-personalizado"
      />

      <QuizTest
        quiz={[
          {
            question: "Com que frequência você hidrata seu cabelo?",
            options: [
              { label: "Toda semana", tag: "hidratacao" },
              { label: "A cada 15 dias", tag: "hidrata_menos" },
              { label: "Raramente", tag: "raro" },
              { label: "Nunca", tag: "nunca" },
            ],
          },
          {
            question: "Qual seu maior desafio com os cabelos?",
            options: [
              { label: "Ressecamento", tag: "ressecado" },
              { label: "Frizz", tag: "frizz" },
              { label: "Queda", tag: "queda" },
              { label: "Oleosidade", tag: "oleoso" },
            ],
          },
          {
            question: "Que tipo de produto você mais usa?",
            options: [
              { label: "Máscara de hidratação", tag: "hidratacao" },
              { label: "Óleo capilar", tag: "oleo" },
              { label: "Shampoo/Condicionador", tag: "shampoo" },
              { label: "Leave-in/creme para pentear", tag: "leavein" },
            ],
          },
        ]}
        results={{
          hidratacao: {
            title: "Parabéns pelo cuidado!",
            description:
              "Você mantém uma rotina de hidratação, o que é essencial para cabelos saudáveis e bonitos.",
          },
          hidrata_menos: {
            title: "Que tal hidratar mais?",
            description:
              "Hidratar o cabelo a cada 15 dias é bom, mas semanalmente pode trazer resultados ainda melhores!",
          },
          raro: {
            title: "Atenção à hidratação!",
            description:
              "Seu cabelo pode estar precisando de mais hidratação. Experimente incluir esse passo na sua rotina.",
          },
          nunca: {
            title: "Inclua hidratação já!",
            description:
              "Hidratar é fundamental para a saúde dos fios. Comece hoje mesmo!",
          },
          ressecado: {
            title: "Cabelos ressecados",
            description:
              "Invista em máscaras nutritivas e óleos para devolver a maciez e o brilho aos fios.",
          },
          frizz: {
            title: "Frizz sob controle",
            description:
              "Use produtos antifrizz e finalize com óleos leves para manter os fios alinhados.",
          },
          queda: {
            title: "Queda de cabelo",
            description:
              "Procure produtos fortalecedores e, se necessário, consulte um especialista.",
          },
          oleoso: {
            title: "Cabelos oleosos",
            description:
              "Prefira shampoos específicos e evite produtos muito pesados na raiz.",
          },
          oleo: {
            title: "Você ama óleos capilares!",
            description:
              "Óleos são ótimos para nutrir e dar brilho, mas use com moderação para não pesar.",
          },
          shampoo: {
            title: "Básico e eficiente!",
            description:
              "Shampoo e condicionador são essenciais, mas lembre-se de complementar com hidratação.",
          },
          leavein: {
            title: "Leave-in é seu aliado!",
            description:
              "Ótima escolha para proteger e modelar os fios no dia a dia.",
          },
        }}
        buttonText="Avançar"
        restartText="Tentar novamente"
      />

      <FinalPage />
      <Footer />
    </div>
  );
}
