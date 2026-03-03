"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { use } from "react";

const servicesData = {
  "veille-sociale": {
    title: "Veille Sociale",
    subtitle: "Intelligence sociale en temps réel",
    description:
      "Captez le pouls des conversations en ligne. Notre plateforme alimentée par l'IA surveille, analyse et fournit des insights exploitables depuis chaque recoin du paysage numérique.",
    longDescription: `Notre service de veille sociale vous permet de comprendre en profondeur ce que pensent vos clients, vos prospects et votre marché. Grâce à nos algorithmes d'intelligence artificielle avancés, nous analysons des millions de conversations en temps réel pour vous fournir des insights actionnables.

Nous couvrons toutes les plateformes majeures : Twitter/X, Facebook, Instagram, LinkedIn, TikTok, Reddit, forums spécialisés, blogs et sites d'actualités. Notre système multilingue comprend plus de 50 langues et détecte automatiquement les nuances culturelles.`,
    icon: Headphones,
    features: [
      { icon: BarChart3, title: "Analyse de sentiment", description: "Comprenez les émotions derrière chaque mention de votre marque avec une précision de 95%." },
      { icon: TrendingUp, title: "Détection des tendances", description: "Anticipez les tendances avant qu'elles ne deviennent virales grâce à notre IA prédictive." },
      { icon: MessageSquare, title: "Suivi des mentions", description: "Ne manquez jamais une conversation importante sur votre marque, vos produits ou vos concurrents." },
      { icon: Globe, title: "Couverture mondiale", description: "Surveillez les conversations dans plus de 50 langues sur toutes les plateformes." },
      { icon: Shield, title: "Gestion de crise", description: "Alertes en temps réel pour une réaction rapide aux situations critiques." },
      { icon: Cpu, title: "Rapports automatisés", description: "Rapports personnalisés générés automatiquement selon vos KPIs." },
    ],
    process: [
      { step: "01", title: "Configuration", description: "Définition de vos mots-clés, marques et sujets à surveiller." },
      { step: "02", title: "Collecte", description: "Notre IA collecte et filtre les données pertinentes en temps réel." },
      { step: "03", title: "Analyse", description: "Traitement NLP avancé pour extraire les insights clés." },
      { step: "04", title: "Livraison", description: "Tableaux de bord interactifs et alertes personnalisées." },
    ],
    stats: [
      { value: "500M+", label: "Messages analysés/jour" },
      { value: "95%", label: "Précision sentiment" },
      { value: "50+", label: "Langues supportées" },
      { value: "24/7", label: "Monitoring continu" },
    ],
    pricing: [
      { name: "Starter", price: "499€", period: "/mois", features: ["5 mots-clés", "10K mentions/mois", "1 utilisateur", "Rapports hebdomadaires"] },
      { name: "Business", price: "1499€", period: "/mois", features: ["25 mots-clés", "100K mentions/mois", "5 utilisateurs", "Rapports quotidiens", "Alertes temps réel"], popular: true },
      { name: "Enterprise", price: "Sur devis", period: "", features: ["Mots-clés illimités", "Mentions illimitées", "Utilisateurs illimités", "API dédiée", "Support prioritaire"] },
    ],
    accentClass: "text-primary",
  },
  "developpement-web": {
    title: "Développement Web",
    subtitle: "Sites et applications web modernes",
    description:
      "Du concept au lancement, nous créons des sites web et applications ultra-rapides et élégants avec des technologies de pointe qui évoluent avec vos ambitions.",
    longDescription: `Notre équipe de développeurs experts crée des expériences web exceptionnelles qui convertissent vos visiteurs en clients. Nous utilisons les technologies les plus modernes pour garantir performance, sécurité et évolutivité.

Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce robuste ou d'une application web complexe, nous avons l'expertise pour concrétiser votre vision. Chaque projet est développé sur mesure, avec une attention particulière portée au SEO et à l'expérience utilisateur.`,
    icon: Code2,
    features: [
      { icon: Layers, title: "Architecture moderne", description: "Next.js, React, Vue.js - nous maîtrisons les frameworks les plus performants du marché." },
      { icon: Zap, title: "Performance optimale", description: "Sites ultra-rapides avec des scores Lighthouse parfaits (90+)." },
      { icon: Shield, title: "Sécurité renforcée", description: "Conformité OWASP, HTTPS, protection contre les attaques XSS et CSRF." },
      { icon: Palette, title: "Design sur mesure", description: "Interfaces uniques créées par nos designers UX/UI expérimentés." },
      { icon: Globe, title: "SEO optimisé", description: "Structure et contenu optimisés pour les moteurs de recherche." },
      { icon: Cpu, title: "CMS intégré", description: "Gérez votre contenu facilement avec des interfaces d'administration intuitives." },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Analyse de vos besoins, objectifs et de votre audience cible." },
      { step: "02", title: "Design", description: "Création des maquettes et prototypes interactifs." },
      { step: "03", title: "Développement", description: "Codage avec les meilleures pratiques et tests rigoureux." },
      { step: "04", title: "Lancement", description: "Déploiement, monitoring et optimisation continue." },
    ],
    stats: [
      { value: "150+", label: "Sites livrés" },
      { value: "99.9%", label: "Uptime garanti" },
      { value: "<2s", label: "Temps de chargement" },
      { value: "90+", label: "Score Lighthouse" },
    ],
    pricing: [
      { name: "Site Vitrine", price: "3 500€", period: "", features: ["5-10 pages", "Design responsive", "SEO de base", "Formulaire de contact", "3 mois de support"] },
      { name: "E-commerce", price: "8 000€", period: "", features: ["Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Dashboard admin", "6 mois de support"], popular: true },
      { name: "Application Web", price: "Sur devis", period: "", features: ["Fonctionnalités sur mesure", "Intégrations API", "Base de données", "Authentification", "Support dédié"] },
    ],
    accentClass: "text-accent",
  },
  "developpement-mobile": {
    title: "Applications Mobile",
    subtitle: "iOS & Android natifs et cross-platform",
    description:
      "Créez des expériences mobiles exceptionnelles. Nous développons des applications natives et cross-platform qui séduisent vos utilisateurs et boostent votre croissance.",
    longDescription: `Le mobile est au cœur de l'expérience utilisateur moderne. Notre équipe développe des applications performantes et intuitives pour iOS et Android, en utilisant les technologies cross-platform les plus efficaces.

Avec React Native et Flutter, nous créons des applications qui offrent une expérience native tout en optimisant les coûts et les délais de développement. Chaque application est conçue pour maximiser l'engagement utilisateur et atteindre vos objectifs business.`,
    icon: Smartphone,
    features: [
      { icon: Smartphone, title: "Cross-platform", description: "React Native et Flutter pour un développement rapide sur iOS et Android." },
      { icon: Cpu, title: "Performance native", description: "Des applications fluides à 60fps qui rivalisent avec les apps natives pures." },
      { icon: Shield, title: "Sécurité des données", description: "Chiffrement end-to-end et stockage sécurisé des données sensibles." },
      { icon: Zap, title: "Mises à jour OTA", description: "Déploiement de mises à jour sans passer par les stores." },
      { icon: BarChart3, title: "Analytics intégrés", description: "Suivez l'engagement et le comportement de vos utilisateurs." },
      { icon: Globe, title: "Notifications push", description: "Engagez vos utilisateurs avec des notifications personnalisées." },
    ],
    process: [
      { step: "01", title: "Stratégie", description: "Définition des fonctionnalités et de l'architecture de l'app." },
      { step: "02", title: "UX/UI Design", description: "Création d'interfaces intuitives adaptées au mobile." },
      { step: "03", title: "Développement", description: "Codage agile avec sprints et démos régulières." },
      { step: "04", title: "Publication", description: "Soumission aux stores et accompagnement post-lancement." },
    ],
    stats: [
      { value: "80+", label: "Apps publiées" },
      { value: "4.8★", label: "Note moyenne" },
      { value: "2M+", label: "Téléchargements" },
      { value: "95%", label: "Code partagé" },
    ],
    pricing: [
      { name: "MVP", price: "12 000€", period: "", features: ["3-5 écrans", "Design iOS/Android", "Backend basique", "Publication stores", "2 mois de support"] },
      { name: "Standard", price: "25 000€", period: "", features: ["10-15 écrans", "Authentification", "API personnalisée", "Analytics", "6 mois de support"], popular: true },
      { name: "Premium", price: "Sur devis", period: "", features: ["Fonctionnalités avancées", "Intégrations tierces", "Backend scalable", "Support prioritaire", "Maintenance incluse"] },
    ],
    accentClass: "text-primary",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

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
              href="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.accentClass} neon-border`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                {service.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {service.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  En détail
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {service.longDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
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
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {service.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="glass-card-hover p-6 group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 neon-border ${service.accentClass}`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Notre <span className="gradient-text">processus</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center relative"
                >
                  <div className="text-4xl font-bold gradient-text mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Nos <span className="gradient-text">tarifs</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Des formules adaptées à tous les besoins et budgets.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {service.pricing.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={`glass-card p-8 relative ${
                    plan.popular ? "border-primary/30 glow-cyan" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Populaire
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block">
                    <Button
                      variant={plan.popular ? "hero" : "outline-glow"}
                      className="w-full"
                    >
                      Choisir
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
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
                Prêt à démarrer ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Contactez-nous pour une consultation gratuite et un devis personnalisé.
              </p>
              <Link href="/contact">
                <Button variant="hero" size="lg" className="group">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
    </>
  );
}
