"use client";

import styles from "./finalSobrenos.module.css";

const criadoras = [
  { name: "Maria Eduarda", url: "https://github.com/Mariaeduardar07" },
  { name: "Mariana Cardoso", url: "https://github.com/mariccardoso" },
  { name: "Sophia Balico", url: "https://github.com/sophiabalico" },
  { name: "Anna Fiochi", url: "https://github.com/annafiochi" },
  { name: "Sophia Gomes", url: "https://github.com/sosogomess" },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="#3574bb"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.926.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const FinalSobreNos = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Acesse o GitHub das nossas criadoras:</p>
      <ul className={styles.list}>
        {criadoras.map(({ name, url }) => (
          <li key={url} className={styles.item}>
            <GitHubIcon />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FinalSobreNos;
