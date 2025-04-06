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
      image: "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F5f2cb386-6907-4591-b4d0-b103adea698c?csig=AAAAAAAAAAAAAAAAAAAAAKJFFDJdTLX1E80hRE7SkLOsJRT_BXWfvU5hluB5fiaT&exp=1743949082&signer=media-rpc&token=AAIAAU0AJDVmMmNiMzg2LTY5MDctNDU5MS1iNGQwLWIxMDNhZGVhNjk4YwAAAAABlgt3LZCqJlcBzshyWQP2SguV3B4gv7MgYmKFJP4V-J9ZtMuL-gg",
    },
    {
      id: 3,
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
        "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2FGn68jgZOfBrX86slqoNMh6dLWkErQ6VPMR3L53ZoOA0.jpg?csig=AAAAAAAAAAAAAAAAAAAAAC1dRi_3bicXYlCuE4UDWuQT1IAh3I7vQqAZOkzhuvS3&exp=1743946471&signer=media-rpc&token=AAIAAU0AL0duNjhqZ1pPZkJyWDg2c2xxb05NaDZkTFdrRXJRNlZQTVIzTDUzWm9PQTAuanBnAAAAAAGWC09WWCVHCvjeuH4dBBJM34bUTIxn7r5YLDE8h6mLWGASRA9k",
    },
    {
      id: 2,
      name: "Maquiagem",
      image:
        "https://media.canva.com/v2/image-resize/format:JPG/height:533/quality:92/uri:ifs%3A%2F%2F%2F33b7540b-1fa4-4bd0-b4c1-7ded4d1d14dc/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAADmHb8LQH81QKJVY4RQPeNj9PpG9FDS4gjKc3cMOBA-w&exp=1743946636&osig=AAAAAAAAAAAAAAAAAAAAAAifvZlOzeQH0HiCPOeFqYFjTnF3NnA83AQ2TEX5eWyH&signer=media-rpc&x-canva-quality=screen",
    },
    {
      id: 3,
      name: "Skin Care",
      image:
        "https://media.canva.com/v2/image-resize/format:JPG/height:533/quality:92/uri:ifs%3A%2F%2F%2Ff4196279-684d-4675-a005-9f80477ac64d/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAHkG2Utuah7o_cSxIXGL0UVFkkypNyTQ_T-UfuUyIT3X&exp=1743946261&osig=AAAAAAAAAAAAAAAAAAAAAHTwu_PwCNpTix6taF8cNzBEVqFlqDbs7Rb8zVZMGWeB&signer=media-rpc&x-canva-quality=screen",
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
          <CarouselSection carouselTitle={"Ultimas postagens do Lumina"} posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
