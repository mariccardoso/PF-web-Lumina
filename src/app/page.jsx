import Header from "@/components/header";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import MainCardSection from "@/components/mainCardSection";
import CategoriesCard from "@/components/categoriesCard";
import CarouselSection from "@/components/carouselSection";
import CategoriesSection from "@/components/categoriesSection";

export default function Home() {

  // Categorias de memes
  const categories = [
    {
      id: 1,
      name: "Cuidados Capilares",
      image:
        "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2FCWIrM9mY133F45QD0DxwmtFT1iyH3DFPm93HdhxEnS4.jpg?csig=AAAAAAAAAAAAAAAAAAAAAJ3-g-UH3PIYPww1t7KMkuI5j9cdEmS-c-wNLGQ2Mo4v&exp=1744325557&signer=media-rpc&token=AAIAAU0AL0NXSXJNOW1ZMTMzRjQ1UUQwRHh3bXRGVDFpeUgzREZQbTkzSGRoeEVuUzQuanBnAAAAAAGWIee7CEtV60hWHHb-GwcYhL6-pVwviLeusIz-dYVpwma8aLuG",
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
        "https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F3EqTNCefc-AyufnEbaUALX0Gg-ZdoQLDIbcjzpYEvQ4.jpg?csig=AAAAAAAAAAAAAAAAAAAAABaesHUPV7IgYhlQwnVJK5nPKo0OLNObFO71D3z7QcK8&exp=1744327491&signer=media-rpc&token=AAIAAU0ALzNFcVROQ2VmYy1BeXVmbkViYVVBTFgwR2ctWmRvUUxESWJjanpwWUV2UTQuanBnAAAAAAGWIgU9uLb9RmxEVwkxEeknFuUduIfHQU426ys2gPQ_RDHHge6j%201600w,%20https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2FgK0KhBI2F-cM0Ni3i77VE4ixC4M97QI9UGoYsbOejUY.jpg?csig=AAAAAAAAAAAAAAAAAAAAAARyROuRUkl1KD3tsW771ZUEQj35cyHen20w_tqVmgci&exp=1744326534&signer=media-rpc&token=AAIAAU0AL2dLMEtoQkkyRi1jTTBOaTNpNzdWRTRpeEM0TTk3UUk5VUdvWXNiT2VqVVkuanBnAAAAAAGWIfajcOXkQgx7qNA4VJdD1FDDBTNxAnvrzOYcBaUL1xTWvK0u%20800w,%20https://marketplace.canva.com/MADT2h8YN6E/1/thumbnail_large-2/canva-woman-at-home-having-skin-care-routine-MADT2h8YN6E.jpg%20550w,%20https://marketplace.canva.com/MADT2h8YN6E/1/thumbnail-2/canva-woman-at-home-having-skin-care-routine-MADT2h8YN6E.jpg%20200w",
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
          <CarouselSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
