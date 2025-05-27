import CardMakeup from "@/components/cardMakeup";
import styles from "./maquiagem.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";
import CardHair from "@/components/cardHair";
import VideoCarousel from "@/components/videoCarrosel";
import QuizTest from "@/components/quizTest";
import FinalPage from "@/components/finalPage";

export default function Maquiagem() {
  const meusVideos = [
    {
      title: "Maquiagem para o Dia a Dia",
      embedUrl: "https://www.youtube.com/embed/wzufDmAPEw8", // Corrigido para embed
    },
    {
      title: "Tutorial de Maquiagem",
      embedUrl: "https://www.youtube.com/embed/HqudDVhshHY", // Corrigido para embed
    },
    {
      title: "Maquiagem neutra para Iniciantes",
      embedUrl: "https://www.youtube.com/embed/3jh9pWacbo4", // Corrigido para embed
    },
  ];
  const navItens = [
    { label: "Início", href: "/", active: false },
    // { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
    { label: "Contato", href: "/contato", active: false },
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
            buttonLink:
              "https://simpleorganic.com.br/blogs/simple-blog/como-encontrar-a-cor-ideal-de-base?utm_source=google&utm_medium=cpc&utm_campaign=20119148876&utm_content=154682190171&utm_term=&gad_source=1&gad_campaignid=20119148876&gbraid=0AAAAACNtaOOmRu0U-HfJErNsbQx75moH4&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6jhwjRiDwA1Pe-hYWNIAmTUylm5cp30K_07c139_sklQdYw_kEdP_QaAsjLEALw_wcB",
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
            buttonLink:
              "https://www.maybelline.com.br/dicas-de-maquiagem/labios/batom/guia-do-batom",
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
            question: "Qual produto você considera indispensável na maquiagem?",
            options: [
              { label: "Base", tag: "base" },
              { label: "Máscara de cílios", tag: "cilios" },
              { label: "Batom", tag: "batom" },
              { label: "Blush", tag: "blush" },
            ],
          },
          {
            question: "Qual estilo de maquiagem você mais gosta?",
            options: [
              { label: "Natural", tag: "natural" },
              { label: "Glamourosa", tag: "glam" },
              { label: "Colorida", tag: "colorida" },
              { label: "Clássica", tag: "classica" },
            ],
          },
          {
            question: "O que você faz primeiro na sua rotina de maquiagem?",
            options: [
              { label: "Preparo da pele", tag: "pele" },
              { label: "Maquiagem dos olhos", tag: "olhos" },
              { label: "Passa batom", tag: "batom" },
              { label: "Corrige sobrancelha", tag: "sobrancelha" },
            ],
          },
        ]}
        results={{
          base: {
            title: "Você ama uma pele perfeita!",
            description:
              "A base é seu item indispensável. Você gosta de uma pele uniforme e bem preparada, apostando em uma maquiagem impecável.",
          },
          cilios: {
            title: "Olhar marcante!",
            description:
              "Você não abre mão de destacar os olhos. Máscara de cílios é seu must-have para um olhar poderoso em qualquer ocasião.",
          },
          batom: {
            title: "Lábios em destaque!",
            description:
              "O batom é seu melhor amigo. Você adora dar cor e vida ao sorriso, seja com tons vibrantes ou discretos.",
          },
          blush: {
            title: "Toque de saúde!",
            description:
              "Você valoriza um visual saudável e corado. O blush é essencial para dar aquele ar de frescor ao rosto.",
          },
          natural: {
            title: "Estilo Natural",
            description:
              "Você prefere uma maquiagem leve, realçando sua beleza de forma sutil e elegante.",
          },
          glam: {
            title: "Estilo Glamouroso",
            description:
              "Você adora brilhar! Maquiagem marcante, com muito brilho e destaque, é a sua cara.",
          },
          colorida: {
            title: "Estilo Colorido",
            description:
              "Você ama ousar nas cores e criar looks criativos e divertidos.",
          },
          classica: {
            title: "Estilo Clássico",
            description:
              "Você prefere makes atemporais, com delineado, batom vermelho e muita elegância.",
          },
          pele: {
            title: "Pele bem preparada!",
            description:
              "Você sabe que uma boa maquiagem começa com a preparação da pele. Parabéns pelo cuidado!",
          },
          olhos: {
            title: "Olhos em destaque!",
            description:
              "Você gosta de valorizar o olhar e começa sua make pelos olhos.",
          },
          sobrancelha: {
            title: "Detalhes que fazem a diferença!",
            description:
              "Você não esquece das sobrancelhas e sabe que elas moldam o rosto.",
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
