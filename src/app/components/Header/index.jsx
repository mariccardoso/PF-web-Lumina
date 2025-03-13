import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <a className={styles.contact}>Contato</a>
                <Image className={styles.logo} src={"logo_principal.svg"} alt='Logo' width={200} height={100}/>
                <a href="">Administração</a>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/about">Dicas</a></li>
                    <li><a href="/contact">Podcast</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header