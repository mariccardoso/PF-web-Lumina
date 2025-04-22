import styles from "./cardAboutUs.module.css";
import { CheckCircle, Users, Lightbulb, Star, Heart } from "lucide-react";

const CardAboutUs = () => {
  const teamMembers = [
    {
      name: "Maria Eduarda",
      position: "Product Owner",
      image:
        "https://arcosmodels.com/wp-content/uploads/2022/07/JULIA-QUEIROZ-CAPA-SITE-ARCOS-MODELS-2-290x380.jpg",
    },
    {
      name: "Mariana Cardoso",
      position: "Scrum Master",
      image:
        "https://arcosmodels.com/wp-content/uploads/2022/10/AMORA-CAPA-SITE-ARCOS-MODELS-290x380.jpg",
    },
    {
      name: "Anna Clara Fiochi",
      position: "Desenvolvedora",
      image:
        "https://arcosmodels.com/wp-content/uploads/2022/08/AMANDA-ADAM-CAPA-SITE-ARCOS-MODELS-290x380.jpg",
    },
    {
      name: "Sophia Balico",
      position: "Desenvolvedora",
      image:
        "https://arcosmodels.com/wp-content/uploads/2024/07/BRUNA-ARGOLLO-PORT-8-1-e1722438294682-290x380.jpeg",
    },
    {
      name: "Sophia Gomes",
      position: "Desenvolvedora",
      image:
        "https://arcosmodels.com/wp-content/uploads/2021/08/capa-site-1-290x380.jpg",
    },
  ];
  
  const objectives = [
    {
      icon: <CheckCircle size={40} color="#3574bb" />,
      description: "Garantir a qualidade e excelência em cada entrega.",
    },
    {
      icon: <Users size={40} color="#3574bb" />,
      description: "Promover a colaboração e o trabalho em equipe.",
    },
    {
      icon: <Lightbulb size={40} color="#3574bb" />,
      description: "Inovar e criar soluções criativas para nossos desafios.",
    },
    {
      icon: <Star size={40} color="#3574bb" />,
      description: "Alcançar reconhecimento por meio de resultados excepcionais.",
    },
    {
      icon: <Heart size={40} color="#3574bb" />,
      description: "Fomentar um ambiente de trabalho saudável e inclusivo.",
    },
  
  ];


  return (
    <div>
      <div className={styles.cardContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.objectives}>#OBJETIVOSLUMINA</p>
      <div className={styles.objectiveCards}>
        {objectives.map((objective, index) => (
          <div key={index} className={styles.objectiveCard}>
            {objective.icon}
            <p className={styles.objectiveDescription}>{objective.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAboutUs;
