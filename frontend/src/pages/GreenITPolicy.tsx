import Section from "../components/Section";
import ContactInfo from "../components/ContactInfo";

const GreenITPolicy = () => {
  return (
    <div className="greenit-container">
      <h1>Politique Green IT</h1>
      <p>
        Nous nous engageons à réduire notre impact environnemental en adoptant
        des pratiques respectueuses de l’environnement dans le développement et
        l’hébergement de notre plateforme.
      </p>

      <Section title="🌍 Objectif du Green IT">
        <p>
          Le Green IT vise à minimiser l'empreinte écologique des technologies
          numériques en réduisant la consommation d’énergie et les déchets
          électroniques.
        </p>
      </Section>

      <Section title="⚡ Nos engagements">
        <ul>
          <li>
            Optimisation du chargement des images pour réduire la bande passante
            utilisée.
          </li>
          <li>
            Utilisation d'hébergements verts qui fonctionnent avec des énergies
            renouvelables.
          </li>
          <li>
            Minimisation des requêtes serveurs et compression des fichiers
            statiques.
          </li>
          <li>
            Encouragement aux bonnes pratiques d’éco-conception pour le web.
          </li>
        </ul>
      </Section>

      <Section title="♻️ Pratiques adoptées">
        <p>
          Nous adoptons une approche responsable en réduisant l'impact
          énergétique de notre plateforme :
        </p>
        <ul>
          <li>
            Lazy loading des images pour ne charger que les éléments
            nécessaires.
          </li>
          <li>Utilisation de formats d’images compressés (WebP, AVIF).</li>
          <li>
            Design épuré et léger pour limiter la consommation de ressources.
          </li>
        </ul>
      </Section>

      <ContactInfo />
    </div>
  );
};

export default GreenITPolicy;
