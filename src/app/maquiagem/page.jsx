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
            image: "https://i.pinimg.com/736x/1f/cd/e9/1fcde9e6358970db68499980d3c0640b.jpg",
            alt: "Hidratação",
            text: "Hidratação profunda para fios saudáveis.",
          },
          {
            image: "https://i.pinimg.com/736x/24/4a/65/244a65303801795d8c3c612a8ebc49c9.jpg",
            alt: "Nutrição",
            text: "Nutrição que devolve o brilho natural.",
          },
          {
            image: "https://i.pinimg.com/736x/02/e2/57/02e257a48b4348478d022a8616f9f8c5.jpg",
            alt: "Reconstrução",
            text: "Reconstrução para cabelos fortes e resistentes.",
          },
        ]}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Deixe sua beleza brilhar com nossas dicas de maquiagem."
        description="Na nossa seção de Maquiagem, você vai encontrar tudo o que precisa para aprimorar seu visual! Ao lado, temos um tutorial exclusivo em vídeo onde ensinamos como fazer um delineado perfeito, com dicas essenciais para garantir um look de respeito e que dure o dia todo. Além disso, logo abaixo do vídeo, você pode acessar um PDF recheado de dicas valiosas sobre os melhores produtos para a pele, com sugestões que atendem a diferentes tipos de pele e necessidades. Não perca essas recomendações e comece a criar sua maquiagem dos sonhos!"
        pdfLink="/assets/pdf/Produtosparapele.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSectionRight
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Seção de Produtos para os Olhos."
        description="Na nossa seção de produtos para os olhos, você vai encontrar tudo o que precisa para destacar o seu olhar! Ao lado, temos um tutorial exclusivo em vídeo ensinando como fazer um delineado perfeito, com dicas essenciais para garantir um visual marcante que dura o dia todo. Logo abaixo do vídeo, você também pode acessar um PDF cheio de recomendações sobre os melhores produtos específicos para a área dos olhos — incluindo sombras, máscaras de cílios e lápis — com sugestões ideais para diferentes estilos e ocasiões. Não perca essas dicas e realce ainda mais a beleza do seu olhar!"
        pdfLink="/assets/pdf/Produtosparaolhos.pdf"
        buttonText="Baixar PDF"
      />
      <VideoSection
        videoSrc="https://www.youtube.com/embed/tO0U_QM4Gjc?autoplay=1&mute=1"
        title="Destaque Seus Lábios com Estilo"
        description="Se você ama realçar os lábios, esta seção é para você! Aqui reunimos os melhores produtos para deixar sua boca ainda mais bonita — batons, glosses, lápis e muito mais. Ao lado, você confere um vídeo exclusivo com truques para conquistar um contorno perfeito e um acabamento profissional. Logo abaixo, baixe um PDF completo com dicas sobre texturas, cores ideais para cada ocasião e cuidados essenciais para manter os lábios hidratados e saudáveis. Explore nossas sugestões e transforme seu look com um toque de cor e sofisticação!"
        pdfLink="/assets/pdf/Produtoparalabios.pdf"
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
