"use client";
import { motion } from "framer-motion";
import {
  Headphones,
  BarChart3,
  TrendingUp,
  MessageSquare,
  Code2,
  Smartphone,
  Layers,
  Zap,
  Globe,
  Shield,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "developpement-web",
    title: "Architectures Web & Applications Métier",
    subtitle: "INGÉNIERIE WEB & MOBILE",
    description:
      "Conception d'architectures web robustes et évolutives. Nous développons des portails métiers, des outils internes et des solutions SaaS capables de supporter une forte charge utilisateur sans compromis sur la stabilité.",
    icon: Code2,
    features: [
      { icon: Layers, text: "Plateformes SaaS & B2B", description: "Développement d'outils internes et de solutions logicielles capables d'encaisser de fortes charges (React.js, Next.js, Node.js)." },
      { icon: Zap, text: "Ingénierie Mobile", description: "Conception d'applications (iOS/Android) natives et cross-platform performantes pour environnements critiques (Flutter, Swift, Kotlin)." },
      { icon: Shield, text: "Modernisation & Refactoring", description: "Audit de sécurité, résorption de la dette technique de votre code legacy et refactoring progressif." },
      { icon: Palette, text: "Infrastructure & Cloud", description: "Conteneurisation et orchestration de vos services vers des environnements cloud modernes (Docker, Kubernetes, AWS)." },
    ],
    benefits: [
      "Architecture orientée microservices et API REST/GraphQL",
      "Gestion des états complexes et bases de données optimisées",
      "Synchronisation hors-ligne (offline-first)",
      "Migration cloud sans interruption (Zero Downtime)",
    ],
    accentClass: "text-accent",
    glowClass: "glow-accent",
  },
  {
    id: "veille-sociale",
    title: "Intelligence Artificielle & Modèles Privés",
    subtitle: "DATA SCIENCE & IA",
    description:
      "Automatisez vos processus métiers grâce à l'Intelligence Artificielle, sans exposer vos données confidentielles. Nous intégrons des algorithmes sur-mesure pour la génération, l'analyse et la décision.",
    icon: Headphones,
    features: [
      { icon: BarChart3, text: "IA Privée & LLMs", description: "Intégration de modèles de langage sur-mesure pour l'analyse de texte et les assistants virtuels (OpenAI API, LangChain)." },
      { icon: TrendingUp, text: "Machine Learning", description: "Entraînement et déploiement d'algorithmes prédictifs intégrés directement à vos flux métiers (TensorFlow, PyTorch)." },
      { icon: MessageSquare, text: "Ingénierie Data (ETL)", description: "Construction de pipelines robustes pour collecter, nettoyer et unifier vos données disparates (ERP, CRM, Web)." },
      { icon: Globe, text: "Tableaux de Bord (BI)", description: "Restitution de vos données dans des interfaces interactives et décisionnelles (BigQuery, PowerBI, Looker Studio)." },
    ],
    benefits: [
      "Déploiement d'IA sur des serveurs isolés",
      "Fine-tuning de modèles (LLMs)",
      "Traitement avancé du langage naturel (NLP)",
      "Data Warehousing et requêtes complexes",
    ],
    accentClass: "text-primary",
    glowClass: "glow-cyan",
  },
  {
    id: "developpement-mobile",
    title: "Intelligence Sociale Temps Réel",
    subtitle: "DATA MINING & SOCIAL LISTENING",
    description:
      "Déploiement de solutions de collecte massive d'informations sur le web. Nous structurons le bruit numérique pour en extraire des indicateurs de performance (KPIs) exploitables pour votre stratégie.",
    icon: Smartphone,
    features: [
      { icon: Smartphone, text: "Moteurs NLP Propriétaires", description: "Compréhension algorithmique poussée pour décrypter les émotions et le contexte derrière chaque interaction en ligne." },
      { icon: Cpu, text: "Tracking Chirurgical", description: "Surveillance multiplateforme et suivi en temps réel des mentions de votre marque (Bases NoSQL, MongoDB)." },
      { icon: Shield, text: "Alertes Prédictives", description: "Anticipation des tendances et des crises potentielles grâce à la détection automatisée des pics d'activité." },
      { icon: Zap, text: "Reporting Automatisé", description: "Génération de rapports stratégiques instantanés, réduisant de 80% le temps d'analyse de vos équipes." },
    ],
    benefits: [
      "Web scraping éthique et collecte massive",
      "Analyse de sentiment algorithmique",
      "Détection d'anomalies et de signaux faibles",
      "Interopérabilité totale avec vos outils existants",
    ],
    accentClass: "text-primary",
    glowClass: "glow-cyan",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
          <div className="absolute inset-0 grid-pattern" />
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ background: "hsl(187 100% 50%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
            style={{ background: "hsl(258 90% 66%)" }}
          />

          <div className="container relative z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                NOS EXPERTISES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                L'ingénierie de pointe pour vos{" "}
                <span className="gradient-text">ambitions digitales</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De l'audit architectural au déploiement d'écosystèmes data complexes, nous concevons des solutions sur-mesure pour transformer vos défis technologiques en leviers de croissance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="section-padding relative"
          >
            <div className="container px-6">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? "md:col-start-2" : ""}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.accentClass} neon-border`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.accentClass} shrink-0`} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button variant="hero" size="lg" className="group">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`grid grid-cols-2 gap-4 ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature.text}
                      variants={itemVariants}
                      className="glass-card-hover p-5 group"
                    >
                      <feature.icon
                        className={`w-8 h-8 ${service.accentClass} mb-3`}
                      />
                      <h3 className="font-semibold text-sm mb-1">{feature.text}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Divider */}
            {index < services.length - 1 && (
              <div className="gradient-divider max-w-4xl mx-auto mt-24" />
            )}
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Contactez-nous pour une consultation gratuite et découvrez comment
                nous pouvons transformer votre vision en réalité.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="hero" size="lg">
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline-glow" size="lg">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
