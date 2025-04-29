import Header from "@/components/header";
import Footer from "@/components/footer";
import MainCardSection from "@/components/mainCardSection";
import styles from "./cabelos.module.css";

export default function Cabelos() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.mainContent}>
                <div className={styles.contentArea}>
                    <MainCardSection
                        mainCardTitle={"Seja bem Vindo ao Blog Lumina!"}
                        mainCardDescription={
                            "Whether you love modern minimalism, timeless classics, or bold statement pieces."
                        }
                        mainCardImage={
                            "https://media-public.canva.com/V3too/MAD2__V3too/1/tl.jpg"
                        }
                        mainCardImageAlt={"Pinguins"}
                        mainCardButton={"learn more"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}