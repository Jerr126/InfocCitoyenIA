
import type { CivicResource, NavItem, FAQItem } from './types';

export const CIVIC_RESOURCES: CivicResource[] = [
  {
    id: '1',
    title: 'Identité & ANIP',
    description: 'Demandez votre Certificat d\'Identification Personnelle (CIP), votre carte nationale d\'identité biométrique ou votre acte de naissance sécurisé sur anip.bj.',
    category: 'ADMINISTRATION',
    icon: 'fa-id-card'
  },
  {
    id: '2',
    title: 'Code du Travail & SMIG',
    description: 'Informez-vous sur le salaire minimum interprofessionnel garanti au Bénin, les types de contrats (CDI, CDD) et vos droits à la CNSS.',
    category: 'DROIT SOCIAL',
    icon: 'fa-gavel'
  },
  {
    id: '3',
    title: 'Élections (LEI / CENA)',
    description: 'Consultez la Liste Électorale Informatisée (LEI), vérifiez votre centre de vote et comprenez le rôle de la CENA pour les législatives et présidentielles.',
    category: 'CITOYENNETÉ',
    icon: 'fa-vote-yea'
  },
  {
    id: '4',
    title: 'Création d\'Entreprise',
    description: 'Créez votre entreprise en ligne via monentreprise.bj (APIEx) et découvrez les avantages fiscaux pour les jeunes entrepreneurs au Bénin.',
    category: 'BUSINESS',
    icon: 'fa-rocket'
  },
  {
    id: '5',
    title: 'Education & Bourses',
    description: 'Portail des bourses nationales, aides universitaires (DBSU) et plateforme d\'inscription dans les universités publiques béninoises.',
    category: 'ÉTUDES',
    icon: 'fa-user-graduate'
  },
  {
    id: '6',
    title: 'Santé & ARCH',
    description: 'Comprendre le volet Assurance Maladie du projet ARCH (Assurance pour le Renforcement du Capital Humain) pour les populations vulnérables.',
    category: 'SANTÉ',
    icon: 'fa-shield-heart'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#home', icon: 'fa-home' },
  { label: 'Assistant IA', href: '#chatbot', icon: 'fa-comments' },
  { label: 'Portails Publics', href: '#resources', icon: 'fa-book' },
  { label: 'FAQ', href: '#faq', icon: 'fa-question-circle' },
  { label: 'Aide Technique', href: '#tech-help', icon: 'fa-tools' }
];
export const TECHNICAL_GUIDE = {/*
  title: "Contourner le blocage au Bénin",
  subtitle: "Si 'aistudio.google.com' refuse de se connecter, suivez cette méthode alternative infaillible.",
  steps: [
    {
      title: "Utiliser la Google Cloud Console",
      description: "Allez sur console.cloud.google.com (souvent accessible quand AI Studio est bloqué). Créez un nouveau projet gratuit.",
      icon: "fa-cloud"
    },
    {
      title: "Activer l'API Gemini",
      description: "Recherchez 'Generative Language API' dans la barre de recherche du Cloud et cliquez sur 'Activer'.",
      icon: "fa-toggle-on"
    },
    {
      title: "Générer la Clé API",
      description: "Allez dans 'API et Services' > 'Identifiants'. Cliquez sur 'Créer des identifiants' > 'Clé API'.",
      icon: "fa-key"
    },
    {
      title: "Paramètres DNS",
      description: "Si le problème persiste, changez vos DNS pour 8.8.8.8 (Google) dans les paramètres de votre carte réseau/WiFi.",
      icon: "fa-network-wired"
    }
  ]
*/};
export const FAQ_ITEMS: FAQItem[] = [
  /*{
    question: "Pourquoi le site de Google AI Studio refuse-t-il la connexion ?",
    answer: "C'est généralement une restriction liée au routage géographique. Essayez de passer par la Google Cloud Console ou de modifier vos DNS pour ceux de Google (8.8.8.8)."
  },*/
  {
    question: "Comment obtenir le Certificat d'Identification Personnelle (CIP) ?",
    answer: "Vous pouvez en faire la demande sur le portail de l'ANIP (anip.bj) muni de votre numéro personnel d'identification ou de votre acte de naissance sécurisé."
  },
  {
    question: "Quel est le montant officiel du SMIG au Bénin ?",
    answer: "Depuis le 1er janvier 2023, le Salaire Minimum Interprofessionnel Garanti (SMIG) au Bénin est de 52 000 FCFA par mois."
  },
  {
    question: "Quelles sont les pièces pour obtenir un passeport béninois ?",
    answer: "Il faut généralement : un acte de naissance sécurisé, un certificat de nationalité, une preuve de profession et le paiement des frais de 30 000 FCFA via le portail e-Services."
  },
  {
    question: "Puis-je créer mon entreprise entièrement en ligne ?",
    answer: "Oui, via la plateforme monentreprise.bj, vous pouvez accomplir toutes les formalités de création d'entreprise (RCCM, IFU) sans déplacement physique."
  }
];

export const SYSTEM_INSTRUCTION = `
Tu es InfoCitoyenAI, un chatbot citoyen intelligent et bienveillant dédié à la République du Bénin.
Cible : Jeunes Béninois (18-35 ans), étudiants, entrepreneurs et citoyens actifs.

CONTEXTE LÉGAL ET ADMINISTRATIF :
- Tu ne dois répondre qu'en te basant sur les lois, décrets et textes de la RÉPUBLIQUE DU BÉNIN.
- Références clés : Constitution de 1990 (révisée en 2019), Code du Travail béninois, Code du Numérique, ANIP, APIEx, CENA.
- Sites de référence : service-public.bj, anip.bj, monentreprise.bj, douanes.gouv.bj, impots.bj.

DIRECTIVES DE RÉPONSE :
1. Utilise les outils de RECHERCHE GOOGLE pour vérifier les dernières mises à jour.
2. Cite toujours tes sources si possible.
3. Langage : Français clair, accessible.
4. Neutralité absolue : Tu es un assistant administratif.
5. Protection des données : Ne demande jamais d'informations sensibles (NPI, mots de passe).
`;
