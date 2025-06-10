import Header from "@/components/header";
import styles from "./page.module.css";
import TestimonialsSection from "@/components/testimonial";
import NewsletterSection from "@/components/newsletter";
import Footer from "@/components/footer";
import MainCardSection from "@/components/mainCardSection";
import CategoriesSection from "@/components/categoriesSection";
import CarouselSection from "@/components/carouselSection";
import QuickTipsSection from "@/components/dicas";
import VideoCarousel from "@/components/videoCarrosel";
import QuizTest from "@/components/quizTest";

export default function Home() {
  const navItens = [
    { label: "Início", href: "/", active: true },
    // { label: "Dicas", href: "/feed", active: false },
    { label: "Feed", href: "/Feed", active: false },
    { label: "Contato", href: "/contato", active: false },
    { label: "Sobre Nós", href: "/sobrenos", active: false },
    { label: "Login", href: "/login", active: false },
  ];


  // Categorias de memes
  const categories = [
    {
      id: 1,
      name: "Cuidados Capilares",
      image:
        "https://tudoela.com/wp-content/uploads/2017/08/pentear-o-cabelo-corretamente-e1503367651507.jpg",
      link: "/cuidadosCapilares",
    },
    {
      id: 2,
      name: "Maquiagem",
      image:
        "https://marketplace.canva.com/zrvHo/MAEL3YzrvHo/1/s2/canva-eye-shadow-palette-on-marble-background%2C-make-up-and-cosmetics-product-for-luxury-beauty-brand-sale-promotion-and-holiday-flatlay-design-MAEL3YzrvHo.jpg",
      link: "/maquiagem",
    },
    {
      id: 3,
      name: "Skin Care",
      image:
        "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2021/04/o-que-e-skincare.jpg",
      link: "/skinCare",
    },
  ];

  const meusVideos = [
    {
      title: "Receita de Máscara capilar Caseira",
      embedUrl: "https://www.youtube.com/embed/0NmpSLkwAo8",
    },
    {
      title: "Tutorial de Maquiagem Natural",
      embedUrl: "https://www.youtube.com/embed/cosjlPfFDS0",
    },
    {
      title: "Esfoliação de pele",
      embedUrl: "https://www.youtube.com/embed/dvDdSDXiJpc",
    },
    {
      title: "Um novo jeito de transformar sua franja",
      embedUrl: "https://www.youtube.com/embed/DKWglMk8Pxc",
    }
  ];

  const quiz = [
    {
      question: "Você dedica quanto tempo para o seu autocuidado diariamente?",
      options: [
        { label: "Menos de 30 minutos", tag: "quick" },
        { label: "30 minutos a 1 hora", tag: "moderate" },
        { label: "Mais de 1 hora", tag: "extended" },
      ],
    },
    {
      question: "Qual é o seu maior desafio quando se trata de autocuidado?",
      options: [
        { label: "Falta de tempo", tag: "time" },
        { label: "Dificuldade em encontrar produtos adequados", tag: "products" },
        { label: "Manter uma rotina consistente", tag: "routine" },
      ],
    },
    {
      question: "Qual é o seu objetivo principal com o autocuidado?",
      options: [
        { label: "Relaxamento e redução do estresse", tag: "relaxation" },
        { label: "Melhora da aparência", tag: "appearance" },
        { label: "Saúde mental e emocional", tag: "mentalHealth" },
      ],
    },
    {
      question: "Você prefere produtos de autocuidado mais naturais ou convencionais?",
      options: [
        { label: "Naturais e orgânicos", tag: "natural" },
        { label: "Convencionais e acessíveis", tag: "conventional" },
      ],
    }
  ]

  const results = {
    quick: {
      title: "Você é do tipo prático!",
      description: "Seu autocuidado é rápido e eficiente, focando no essencial.",
    },
    moderate: {
      title: "Você valoriza o equilíbrio!",
      description: "Você dedica um tempo razoável para cuidar de si mesmo.",
    },
    extended: {
      title: "Você é um verdadeiro entusiasta do autocuidado!",
      description: "Você investe tempo e esforço para se sentir bem.",
    },
    time: {
      title: "Falta de tempo não é um obstáculo!",
      description: "Você busca soluções rápidas e práticas.",
    },
    products: {
      title: "Você adora experimentar novos produtos!",
      description: "Sua curiosidade te leva a descobrir novas marcas e tendências.",
    },
    routine: {
      title: "Você é disciplinado(a) com sua rotina!",
      description: "Manter uma rotina consistente é fundamental para você.",
    },
    relaxation: {
      title: "Seu foco é relaxamento e bem-estar!",
      description: "Você prioriza momentos de tranquilidade e autocuidado.",
    },
    appearance: {
      title: "Aparência é importante para você!",
      description: "Você investe em produtos que realçam sua beleza.",
    },
    mentalHealth: {
      title: "Saúde mental é prioridade!",
      description: "Você busca autocuidado para manter o equilíbrio emocional.",
    },
    natural: {
      title: "Você ama o natural!",
      description:
        "Produtos naturais são sua escolha preferida, valorizando a pureza.",
    },
    conventional: {
      title:
        "Você prefere a praticidade dos produtos convencionais!",
      description:
        "Acessibilidade e eficácia são suas prioridades na hora de escolher produtos.",
    },
  };



  return (
    <div className={styles.container}>
      <Header logo="MemeVerse" navItens={navItens} />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <MainCardSection
            mainCardTitle={"Seja bem Vindo ao Blog Lumina!"}
            mainCardDescription={
              "Whether you love modern minimalism, timeless classics, or bold statement pieces."
            }
            mainCardImage={
              "https://media-public.canva.com/oiOcw/MAEL-DoiOcw/1/s2.jpg"
            }
            mainCardImageAlt={"Pinguins"}
            mainCardButton={"learn more"}
          />
          <CategoriesSection categories={categories} categoriesTitle={"Confira o melhor do autocuidado"} />
          <QuickTipsSection />
          <CarouselSection carouselTitle={"Confira nossas principais Postagens"} />
          <TestimonialsSection />
          <VideoCarousel
            carouselTitle="#DicasDeBeleza"
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
          <NewsletterSection />
          <QuizTest quiz={quiz} results={results} buttonText="Próxima" restartText="Refazer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
