import CardMakeup from "@/components/cardMakeup";
import styles from "./skinCare.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainCardSection from "@/components/mainCardSection";
import VideoSection from "@/components/videoSection";
import VideoSectionRight from "@/components/videoSectionRight";
import CardHair from "@/components/cardHair";

export default function SkinCare() {
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
      <Header logo="Lumina" navItens={navItens} />
      <MainCardSection
        mainCardTitle={"Descubra o segredo para uma pele saudável."}
        mainCardDescription={
          "Bem-vindo à nossa seção de Skin Care do Lumina!"
        }
        mainCardImage={
          "https://s2.glbimg.com/kQcijW7kCWWdfS6r83Wnn0Wk3vk=/e.glbimg.com/og/ed/f/original/2020/03/23/mandylikesbeingbroke.jpg"
        }
        mainCardImageAlt={"Cuidados com a pele"}
        mainCardButton={"Saiba mais"}
      />

      <CardMakeup
        hashtag="#SkinCare"
        description="Realce a beleza natural da sua pele com dicas e produtos especiais."
        cards={[
          {
            image:
              "https://blog.oceane.com.br/wp-content/uploads/2023/10/destaque1909skincare.jpg",
            alt: "Limpeza",
            text: "Limpeza facial para remover impurezas e oleosidade.",
          },
          {
            image:
              "https://blog.oceane.com.br/wp-content/uploads/2023/06/DESTAQUE_SKIN_18.04.jpg",
            alt: "Hidratação",
            text: "Hidratação que mantém a pele macia e saudável.",
          },
          {
            image:
              "https://i.pinimg.com/736x/5a/a0/69/5aa069b92775edf2f4c557ef5d69371f.jpg",
            alt: "Proteção Solar",
            text: "Proteção solar para prevenir o envelhecimento precoce.",
          },
        ]}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/embed/yixhqoJCc_U"
        title="Rotina de cuidados com a pele: passo a passo"
        description="Aprenda como montar uma rotina de skin care eficiente para todos os tipos de pele. No vídeo, veja dicas de limpeza, hidratação e proteção solar. Baixe o PDF com um guia completo para cuidar da sua pele diariamente."
        pdfLink="/assets/pdf/RotinaSkinCare.pdf"
        buttonText="Baixar PDF"
      />

      <CardHair
        hashtag="#DicasSkinCare"
        cards={[
          {
            image: "https://www.cetaphil.com.br/dw/image/v2/BGGN_PRD/on/demandware.static/-/Sites-Galderma-BR-Library/pt_BR/dw5339aa0f/skincare-tips-pages/como-melhorar-a-pele-do-rosto%20.jpg?sw=500",
            alt: "Limpeza",
            text: "Limpeza de pele para remover impurezas.",
            buttonText: "Saiba mais",
            buttonLink: "https://www.garnier.com.br/dicas/pele/limpeza/limpeza-de-pele-em-casa?gad_source=1&gad_campaignid=10326011003&gbraid=0AAAAACfr97iLDu1JNefive0XcemVvJId4&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6jZ3cW2puOtvz53IZ_kSzD3c2c-qc6TFJ3o94sUY_hdVU1twLJiaV8aAv1JEALw_wcB#:~:text=Use%20%C3%A1gua%20micelar%20para%20acalmar,produtos%20e%20impurezas%20da%20pele."
          },
          {
            image: "https://media.istockphoto.com/id/1352840704/pt/foto/portrait-of-an-attractive-young-woman-applying-moisturiser-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=U0DfdoinMFL8kKxUQEUDwu-JQh18CCfIlMk00wn_H4E=",
            alt: "Hidratação",
            text: "Hidratação para todos os tipos de pele.",
            buttonText: "Saiba mais",
            buttonLink: "https://www.garnier.com.br/dicas/pele/limpeza/rotina-de-limpeza-hidratacao-e-protecao-para-pele-oleosa?gad_source=1&gad_campaignid=10326011024&gbraid=0AAAAACfr97i0jK7AJASz9kC7bYMBN8U-b&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6iF5pxTzlhGigWRKk9OTkXguASf2VmW9QktCg_M-WlAl1VpOrbZVUsaAlRpEALw_wcB"
          },
          {
            image: "https://thumbs.dreamstime.com/b/m%C3%A1scara-do-ouro-da-mulher-modelo-bonito-com-o-cosm%C3%A9tico-dourado-pele-beleza-skincare-e-tratamento-tiro-sobre-fundo-branco-140288770.jpg",
            alt: "Proteção Solar",
            text: "A importância do protetor solar no seu dia.",
            buttonText: "Saiba mais",
            buttonLink: "https://quintal-lab.com/blogs/quintal/protetor-solar-entenda-a-importancia-do-cuidado-com-a-pele-em-todas-as-estacoes-do-ano?srsltid=AfmBOoqppDFjdRXIhBl-EY-5nzudSnTtIheWRXSu2sdv9EH6GrNj4_a3"
          },
          {
            image: "https://static.vecteezy.com/ti/fotos-gratis/p1/7907200-retrato-de-mulher-europeia-satisfeita-fecha-olhos-fica-semi-nua-com-toalha-enrolada-na-cabeca-tem-pele-suave-saudavel-posa-ombros-nus-fica-em-casa-mulheres-conceito-de-beleza-cuidados-pessoais-gratis-foto.jpg",
            alt: "Esfoliação",
            text: "Esfoliação para renovar a pele.",
            buttonText: "Saiba mais",
            buttonLink: "https://www.dermotivin.com.br/article/como-esfoliar-a-pele?gad_source=1&gad_campaignid=19313067111&gbraid=0AAAAACe-VYr522cS_xxkhsWt5MQBH9GDV&gclid=Cj0KCQjwxdXBBhDEARIsAAUkP6j88lD0oooedCtDeLNhVE67MnhH_aq0uvuxWMxVC72qLbBnHYSi7r0aAhL8EALw_wcB"
          },
        ]}
      />
      <Footer />
    </div>
  );
}