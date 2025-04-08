import Header from "@/components/header";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import MainCardSection from "@/components/mainCardSection";
import CategoriesCard from "@/components/categoriesCard";
import CarouselSection from "@/components/carouselSection";
import CategoriesSection from "@/components/categoriesSection";

export default function Home() {

  // Array de dados dos memes para serem passados como props
  const posts = [
    {
      id: 1,
      title: "Cuidar: o guia completo para cabelos saudáveis",
      image: "https://media-public.canva.com/HmC-8/MAEHpcHmC-8/1/s.jpg",
    },
    {
      id: 2,
      title: "Rotina de skincare noturna: o que não pode faltar?",
      image: "https://marketplace.canva.com/6Aaik/MAD54c6Aaik/1/s2/canva-woman-getting-a-facial-treatment-MAD54c6Aaik.jpg",
    },
    {
      id: 3,
      title: "5 erros comuns no cuidado com a pele",
      image: "https://media-public.canva.com/Stwz4/MAEoKSStwz4/1/s.jpg",
    },
    {
      id: 4,
      title: "5 erros comuns no cuidado com a pele",
      image: "https://media-public.canva.com/Stwz4/MAEoKSStwz4/1/s.jpg",
    },
  ];

  // Categorias de memes
  const categories = [
    {
      id: 1,
      name: "Cuidados Capilares",
      image:
        "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2Fn7PNFAqKDma4mr-4Fl762rA91k8vORTT_Kgpssrwxa4.jpg?csig=AAAAAAAAAAAAAAAAAAAAAPNzrP-Sxq_0dKe0awVAhmWtHq-5Ke03MKQz9fweVgeU&exp=1744147814&signer=media-rpc&token=AAIAAU0AL243UE5GQXFLRG1hNG1yLTRGbDc2MnJBOTFrOHZPUlRUX0tncHNzcnd4YTQuanBnAAAAAAGWF0-WcAcDaGShvmCQ_0LZxlpY9iOx7LhQFxGHrgjPpEPHQMdC",
    },
    {
      id: 2,
      name: "Maquiagem",
      image:
        "https://marketplace.canva.com/zrvHo/MAEL3YzrvHo/1/s2/canva-eye-shadow-palette-on-marble-background%2C-make-up-and-cosmetics-product-for-luxury-beauty-brand-sale-promotion-and-holiday-flatlay-design-MAEL3YzrvHo.jpg",
    },
    {
      id: 3,
      name: "Skin Care",
      image:
        "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F3EqTNCefc-AyufnEbaUALX0Gg-ZdoQLDIbcjzpYEvQ4.jpg?csig=AAAAAAAAAAAAAAAAAAAAAMNUgHlpJnvoQU3JaRkcTmfrWO49JvQBDo5843y2bfA0&exp=1744147491&signer=media-rpc&token=AAIAAU0ALzNFcVROQ2VmYy1BeXVmbkViYVVBTFgwR2ctWmRvUUxESWJjanpwWUV2UTQuanBnAAAAAAGWF0qouNlMevrRqNyoJYCWYWPDKde2wX1xFgbu-jv796Y6NsTf",
    },
  ];
  

  return (
    <div className={styles.container}>
      <Header logo="MemeVerse" />
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
          <CarouselSection posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
