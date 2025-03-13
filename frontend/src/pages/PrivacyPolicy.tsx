import Section from "../components/Section";
import ContactInfo from "../components/ContactInfo";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Politique de Confidentialité</h1>
      <p>
        Nous accordons une grande importance à la protection de vos données
        personnelles. Cette politique de confidentialité explique comment nous
        collectons, utilisons et protégeons vos informations.
      </p>

      <Section title="📄 Données collectées">
        <p>
          Nous collectons uniquement les données nécessaires pour améliorer
          notre service, comme les images téléchargées et des informations de
          connexion (si applicable).
        </p>
      </Section>

      <Section title="🔒 Sécurité des données">
        <p>
          Vos données sont stockées de manière sécurisée et ne sont jamais
          partagées avec des tiers sans votre consentement.
        </p>
      </Section>

      <Section title="⚖️ Vos droits">
        <p>
          Vous pouvez demander l'accès, la modification ou la suppression de vos
          données à tout moment en nous contactant.
        </p>
      </Section>

      <ContactInfo />
    </div>
  );
};

export default PrivacyPolicy;
