"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building2,
  Tag,
  Clock,
  Users,
  Layers,
  Smartphone,
  Headphones,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { use } from "react";

const projectsData: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    longDescription: string;
    client: string;
    year: string;
    duration: string;
    team: string;
    tags: string[];
    icon: React.ComponentType<{ className?: string }>;
    challenge: string;
    solution: string;
    results: { value: string; label: string }[];
    features: string[];
    technologies: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
    nextProject: string;
    prevProject: string;
  }
> = {
  "ecommerce-luxe": {
    title: "Boutique Luxe Paris",
    category: "Développement Web",
    description: "Plateforme e-commerce haut de gamme avec expérience d'achat immersive",
    longDescription:
      "Développement d'une plateforme e-commerce complète pour une maison de luxe parisienne. Le projet incluait une refonte totale de l'expérience utilisateur, l'intégration d'un système de paiement sécurisé et un CMS sur mesure pour la gestion du catalogue produits.",
    client: "Maison de Luxe",
    year: "2024",
    duration: "4 mois",
    team: "5 personnes",
    tags: ["Next.js", "Stripe", "Sanity", "Tailwind CSS"],
    icon: Layers,
    challenge:
      "Le client souhaitait une expérience d'achat en ligne qui reflète l'exclusivité de sa marque tout en offrant des performances optimales. Le site devait gérer un catalogue de plus de 500 produits avec des variantes complexes et supporter un trafic important lors des collections saisonnières.",
    solution:
      "Nous avons développé une architecture headless avec Next.js pour des performances optimales et Sanity comme CMS pour une gestion flexible du contenu. L'intégration Stripe gère les paiements sécurisés avec 3D Secure, et un système de cache intelligent optimise les temps de chargement.",
    results: [
      { value: "+180%", label: "Conversion" },
      { value: "-60%", label: "Temps de chargement" },
      { value: "+250%", label: "Trafic mobile" },
      { value: "99.9%", label: "Uptime" },
    ],
    features: [
      "Catalogue produits avec filtres avancés",
      "Panier persistant et wishlist",
      "Checkout optimisé en 3 étapes",
      "Système de reviews et notations",
      "Programme de fidélité intégré",
      "Dashboard analytics temps réel",
    ],
    technologies: ["Next.js 14", "TypeScript", "Sanity CMS", "Stripe", "Tailwind CSS", "Vercel"],
    testimonial: {
      quote:
        "RichData a parfaitement compris notre vision et l'a traduite en une expérience digitale exceptionnelle. Les résultats dépassent toutes nos attentes.",
      author: "Marie Lefèvre",
      role: "Directrice Marketing",
    },
    nextProject: "app-fitness",
    prevProject: "app-sante",
  },
  "app-fitness": {
    title: "FitTrack Pro",
    category: "Application Mobile",
    description: "Application de suivi fitness avec coaching IA personnalisé",
    longDescription:
      "Développement d'une application mobile cross-platform pour le suivi fitness et le coaching personnalisé. L'application utilise l'intelligence artificielle pour adapter les programmes d'entraînement en fonction des progrès et objectifs de chaque utilisateur.",
    client: "FitTech Startup",
    year: "2024",
    duration: "6 mois",
    team: "4 personnes",
    tags: ["React Native", "Firebase", "TensorFlow", "Node.js"],
    icon: Smartphone,
    challenge:
      "Créer une application qui se démarque sur un marché saturé en offrant une expérience véritablement personnalisée. L'app devait fonctionner hors ligne, synchroniser les données fitness des appareils connectés et proposer des recommandations intelligentes.",
    solution:
      "Nous avons développé une application React Native avec un modèle ML embarqué pour les recommandations en temps réel. L'intégration avec HealthKit et Google Fit permet de centraliser toutes les données de santé, et Firebase assure une synchronisation fluide multi-appareils.",
    results: [
      { value: "50K+", label: "Téléchargements" },
      { value: "4.8★", label: "Note App Store" },
      { value: "85%", label: "Rétention J30" },
      { value: "+40%", label: "Engagement" },
    ],
    features: [
      "Programmes d'entraînement adaptatifs",
      "Suivi nutritionnel avec scanner",
      "Intégration objets connectés",
      "Défis et achievements",
      "Coaching vocal en temps réel",
      "Partage social intégré",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite", "Node.js", "AWS"],
    testimonial: {
      quote:
        "L'équipe RichData a su allier expertise technique et compréhension de notre marché pour créer une app que nos utilisateurs adorent.",
      author: "Thomas Petit",
      role: "CEO FitTech",
    },
    nextProject: "veille-cosmetiques",
    prevProject: "ecommerce-luxe",
  },
  "veille-cosmetiques": {
    title: "Beauty Insights",
    category: "Veille Sociale",
    description: "Plateforme de veille sociale pour l'industrie cosmétique",
    longDescription:
      "Mise en place d'une solution de veille sociale complète pour un acteur majeur de l'industrie cosmétique. La plateforme analyse en temps réel les conversations sur les réseaux sociaux, forums et blogs pour identifier les tendances émergentes et le sentiment des consommateurs.",
    client: "Groupe L'Oréal",
    year: "2023",
    duration: "8 mois",
    team: "6 personnes",
    tags: ["NLP", "Python", "Dashboard", "BigQuery"],
    icon: Headphones,
    challenge:
      "Le client avait besoin de monitorer des millions de conversations quotidiennes dans plus de 20 langues pour anticiper les tendances beauté et réagir rapidement aux crises potentielles. Les outils existants ne permettaient pas une analyse assez fine du sentiment.",
    solution:
      "Nous avons développé une plateforme sur mesure utilisant des modèles NLP avancés entraînés spécifiquement pour le secteur beauté. Le système collecte et analyse automatiquement les données de plus de 50 sources et génère des alertes personnalisées en temps réel.",
    results: [
      { value: "10M+", label: "Messages/jour" },
      { value: "95%", label: "Précision NLP" },
      { value: "-70%", label: "Temps d'analyse" },
      { value: "24/7", label: "Monitoring" },
    ],
    features: [
      "Analyse de sentiment multilingue",
      "Détection de tendances émergentes",
      "Alertes crises en temps réel",
      "Rapports automatisés personnalisés",
      "Analyse concurrentielle",
      "API d'intégration",
    ],
    technologies: ["Python", "TensorFlow", "BigQuery", "React", "Elasticsearch", "GCP"],
    testimonial: {
      quote:
        "Cette plateforme nous permet d'avoir une longueur d'avance sur les tendances et de réagir immédiatement aux retours consommateurs.",
      author: "Claire Dubois",
      role: "Directrice Insights",
    },
    nextProject: "saas-immobilier",
    prevProject: "app-fitness",
  },
  "saas-immobilier": {
    title: "ImmoCloud",
    category: "Développement Web",
    description: "Solution SaaS complète pour les agences immobilières",
    longDescription:
      "Développement d'une plateforme SaaS B2B permettant aux agences immobilières de digitaliser l'ensemble de leurs processus : gestion des biens, CRM clients, génération de mandats, et diffusion automatisée sur les portails.",
    client: "ImmoTech",
    year: "2023",
    duration: "10 mois",
    team: "7 personnes",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    icon: Globe,
    challenge:
      "Créer une solution tout-en-un qui remplace les multiples outils utilisés par les agences immobilières. La plateforme devait être intuitive, performante et capable de gérer des milliers d'utilisateurs simultanés avec des données sensibles.",
    solution:
      "Architecture microservices évolutive déployée sur AWS, avec une interface React moderne et des API RESTful documentées. Nous avons intégré des fonctionnalités d'IA pour l'estimation automatique des biens et la qualification des leads.",
    results: [
      { value: "200+", label: "Agences clientes" },
      { value: "+45%", label: "Productivité" },
      { value: "99.9%", label: "Disponibilité" },
      { value: "-30%", label: "Coûts opérationnels" },
    ],
    features: [
      "Gestion complète des biens",
      "CRM intégré avec scoring leads",
      "Signature électronique des mandats",
      "Diffusion multi-portails automatique",
      "Estimation par IA",
      "Reporting et analytics",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Terraform"],
    nextProject: "app-banking",
    prevProject: "veille-cosmetiques",
  },
  "app-banking": {
    title: "NeoBank App",
    category: "Application Mobile",
    description: "Application bancaire nouvelle génération avec paiements instantanés",
    longDescription:
      "Développement de l'application mobile pour une néobanque française, offrant une expérience bancaire moderne avec ouverture de compte instantanée, paiements en temps réel et gestion financière intelligente.",
    client: "Fintech France",
    year: "2024",
    duration: "12 mois",
    team: "8 personnes",
    tags: ["Flutter", "Stripe", "AWS", "Compliance"],
    icon: Smartphone,
    challenge:
      "Développer une application bancaire conforme aux régulations strictes (PSD2, RGPD) tout en offrant une expérience utilisateur fluide et des fonctionnalités innovantes. La sécurité était primordiale sans compromettre l'ergonomie.",
    solution:
      "Architecture sécurisée avec chiffrement end-to-end et authentification biométrique. L'application Flutter offre des performances natives sur iOS et Android, avec une intégration banking-as-a-service pour les fonctionnalités réglementées.",
    results: [
      { value: "100K+", label: "Utilisateurs" },
      { value: "4.9★", label: "Note stores" },
      { value: "< 2min", label: "Ouverture compte" },
      { value: "0", label: "Incidents sécurité" },
    ],
    features: [
      "Ouverture de compte KYC vidéo",
      "Paiements instantanés SEPA",
      "Carte virtuelle et physique",
      "Catégorisation automatique dépenses",
      "Épargne automatique intelligente",
      "Support chat intégré",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    testimonial: {
      quote:
        "RichData a relevé le défi technique et réglementaire avec brio. Notre app est devenue une référence sur le marché.",
      author: "Jean Moreau",
      role: "CTO Fintech France",
    },
    nextProject: "veille-automobile",
    prevProject: "saas-immobilier",
  },
  "veille-automobile": {
    title: "AutoPulse",
    category: "Veille Sociale",
    description: "Monitoring en temps réel de l'industrie automobile mondiale",
    longDescription:
      "Plateforme de veille stratégique pour un constructeur automobile, analysant l'ensemble des conversations mondiales sur les véhicules électriques, les tendances de mobilité et les retours consommateurs.",
    client: "Groupe PSA",
    year: "2023",
    duration: "6 mois",
    team: "5 personnes",
    tags: ["AI", "BigData", "Analytics", "Python"],
    icon: Headphones,
    challenge:
      "Agréger et analyser des données provenant de sources très diverses (réseaux sociaux, forums auto, presse spécialisée, documents réglementaires) pour fournir une vision 360° du marché automobile mondial.",
    solution:
      "Pipeline de données robuste traitant plusieurs millions de documents par jour, avec des modèles NLP spécialisés pour le vocabulaire automobile. Dashboard interactif avec capacités de drill-down et exports personnalisés.",
    results: [
      { value: "5M+", label: "Documents/jour" },
      { value: "40+", label: "Pays couverts" },
      { value: "15", label: "Langues" },
      { value: "-50%", label: "Temps insights" },
    ],
    features: [
      "Veille concurrentielle automatisée",
      "Analyse sentiment par modèle/marque",
      "Tracking influenceurs secteur",
      "Alertes réglementaires",
      "Rapports exécutifs automatiques",
      "Benchmark concurrentiel",
    ],
    technologies: ["Python", "Apache Kafka", "Elasticsearch", "React", "GCP", "BigQuery"],
    nextProject: "marketplace-artisans",
    prevProject: "app-banking",
  },
  "marketplace-artisans": {
    title: "Artisan Connect",
    category: "Développement Web",
    description: "Marketplace reliant artisans locaux et consommateurs",
    longDescription:
      "Création d'une marketplace éco-responsable mettant en relation les artisans locaux avec des consommateurs à la recherche de produits authentiques et de qualité. La plateforme inclut gestion des commandes, paiements et logistique.",
    client: "Collectif Artisans",
    year: "2024",
    duration: "5 mois",
    team: "4 personnes",
    tags: ["Vue.js", "Stripe", "MongoDB", "Algolia"],
    icon: Layers,
    challenge:
      "Créer une plateforme accessible aux artisans peu familiers avec le digital, tout en offrant une expérience d'achat premium aux consommateurs. La gestion des stocks et de la logistique multi-vendeurs représentait un défi technique majeur.",
    solution:
      "Interface vendeur simplifiée avec onboarding guidé, moteur de recherche Algolia pour une découverte optimale des produits, et intégration avec des partenaires logistiques pour une livraison éco-responsable.",
    results: [
      { value: "500+", label: "Artisans" },
      { value: "15K+", label: "Produits" },
      { value: "+300%", label: "CA artisans" },
      { value: "4.7★", label: "Satisfaction" },
    ],
    features: [
      "Profils artisans personnalisables",
      "Recherche produits avancée",
      "Messagerie acheteur-vendeur",
      "Gestion commandes et stocks",
      "Paiement sécurisé multi-vendeurs",
      "Éco-score produits",
    ],
    technologies: ["Vue.js 3", "Node.js", "MongoDB", "Stripe Connect", "Algolia", "Vercel"],
    nextProject: "app-sante",
    prevProject: "veille-automobile",
  },
  "app-sante": {
    title: "MedAssist",
    category: "Application Mobile",
    description: "Application de suivi médical avec rappels intelligents",
    longDescription:
      "Application mobile de santé permettant le suivi des traitements médicaux, les rappels de prise de médicaments et le partage sécurisé des données avec les professionnels de santé. Certification CE Class IIa.",
    client: "Groupe Hospitalier",
    year: "2024",
    duration: "8 mois",
    team: "6 personnes",
    tags: ["React Native", "HealthKit", "FHIR", "HIPAA"],
    icon: Smartphone,
    challenge:
      "Développer une application médicale conforme aux normes strictes de certification (CE, HIPAA) tout en restant intuitive pour des patients de tous âges. L'interopérabilité avec les systèmes hospitaliers était essentielle.",
    solution:
      "Architecture conforme aux standards FHIR pour l'interopérabilité, chiffrement de bout en bout des données de santé, et interface accessible conçue avec des associations de patients. Processus de certification mené en parallèle du développement.",
    results: [
      { value: "30K+", label: "Patients actifs" },
      { value: "98%", label: "Observance" },
      { value: "CE IIa", label: "Certification" },
      { value: "-40%", label: "Réhospitalisations" },
    ],
    features: [
      "Rappels médicaments intelligents",
      "Suivi des constantes vitales",
      "Partage données avec médecins",
      "Historique des traitements",
      "Téléconsultation intégrée",
      "Export dossier médical",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "FHIR", "AWS"],
    testimonial: {
      quote:
        "Cette application a transformé l'accompagnement de nos patients chroniques. L'adhésion au traitement a considérablement augmenté.",
      author: "Dr. Anne Martin",
      role: "Chef de service",
    },
    nextProject: "ecommerce-luxe",
    prevProject: "marketplace-artisans",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-32 pb-16">
          <div className="absolute inset-0 grid-pattern" />
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ background: "hsl(187 100% 50%)" }}
          />

          <div className="container relative z-10 px-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center neon-border text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4 text-primary" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  {project.team}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Image Placeholder */}
        <section className="py-8">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-2 max-w-5xl mx-auto overflow-hidden"
            >
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <Icon className="w-24 h-24 text-muted-foreground/30" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="section-padding relative">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section-padding relative">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-border text-accent">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Le défi</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-border text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Notre solution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Fonctionnalités <span className="gradient-text">clés</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {project.features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={itemVariants}
                  className="glass-card p-5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl glass-card text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="section-padding relative">
            <div className="container px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 max-w-3xl mx-auto text-center"
              >
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.role}, {project.client}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16">
          <div className="container px-6">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Link
                href={`/portfolio/${project.prevProject}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Projet précédent
              </Link>
              <Link
                href={`/portfolio/${project.nextProject}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Projet suivant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Un projet similaire en tête ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Discutons de votre projet et voyons comment nous pouvons vous aider à obtenir des résultats similaires.
              </p>
              <Link href="/contact">
                <Button variant="hero" size="lg" className="group">
                  Démarrer un projet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
    </>
  );
}
