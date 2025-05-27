import Header from "@/components/header";
import styles from "./page.module.css";
import TestimonialsSection from "@/components/testimonial";
import NewsletterSection from "@/components/newsletter";
import Footer from "@/components/footer";
import MainCardSection from "@/components/mainCardSection";
import CategoriesSection from "@/components/categoriesSection";
import CarouselSection from "@/components/carouselSection";
import QuickTipsSection from "@/components/dicas";
import CtaSection from "@/components/ctaSection";
import VideoCarousel from "@/components/videoCarrosel";

export default function Home() {
  const navItens = [
    { label: "Início", href: "/", active: true },
    // { label: "Dicas", href: "/feed", active: false },
    { label: "Curiosidades", href: "/curiosidades", active: false },
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
      title: "Cuidados com a Pele",
      embedUrl: "https://www.youtube.com/embed/QbjfJwqv2AM",
    },
  ];

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
          <CtaSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
