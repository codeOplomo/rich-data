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
    id: "veille-sociale",
    title: "Veille Sociale",
    subtitle: "Intelligence sociale en temps réel",
    description:
      "Captez le pouls des conversations en ligne. Notre plateforme alimentée par l'IA surveille, analyse et fournit des insights exploitables depuis chaque recoin du paysage numérique.",
    icon: Headphones,
    features: [
      { icon: BarChart3, text: "Analyse de sentiment en temps réel", description: "Comprenez les émotions derrière chaque mention de votre marque." },
      { icon: TrendingUp, text: "Détection et prévision des tendances", description: "Anticipez les tendances avant qu'elles ne deviennent virales." },
      { icon: MessageSquare, text: "Suivi des mentions de marque", description: "Ne manquez jamais une conversation importante sur votre marque." },
      { icon: Globe, text: "Couverture multiplateforme", description: "Surveillez toutes les plateformes sociales depuis un seul tableau de bord." },
    ],
    benefits: [
      "Réduction de 80% du temps d'analyse",
      "Alertes en temps réel sur les crises potentielles",
      "Rapports personnalisés automatiques",
      "Intégration avec vos outils existants",
    ],
    accentClass: "text-primary",
    glowClass: "glow-cyan",
  },
  {
    id: "developpement-web",
    title: "Développement Web",
    subtitle: "Sites et applications web modernes",
    description:
      "Du concept au lancement, nous créons des sites web et applications ultra-rapides et élégants avec des technologies de pointe qui évoluent avec vos ambitions.",
    icon: Code2,
    features: [
      { icon: Layers, text: "Architecture moderne", description: "Next.js, React, Vue.js - nous maîtrisons les frameworks les plus performants." },
      { icon: Zap, text: "Performance optimale", description: "Sites ultra-rapides avec des scores Lighthouse parfaits." },
      { icon: Shield, text: "Sécurité renforcée", description: "Conformité aux meilleures pratiques de sécurité web." },
      { icon: Palette, text: "Design sur mesure", description: "Chaque projet est unique, tout comme votre identité visuelle." },
    ],
    benefits: [
      "Temps de chargement < 2 secondes",
      "SEO optimisé dès la conception",
      "Responsive design parfait",
      "Maintenance et support inclus",
    ],
    accentClass: "text-accent",
    glowClass: "glow-accent",
  },
  {
    id: "developpement-mobile",
    title: "Applications Mobile",
    subtitle: "iOS & Android natifs et cross-platform",
    description:
      "Créez des expériences mobiles exceptionnelles. Nous développons des applications natives et cross-platform qui séduisent vos utilisateurs et boostent votre croissance.",
    icon: Smartphone,
    features: [
      { icon: Smartphone, text: "Cross-platform efficace", description: "React Native et Flutter pour un développement rapide et économique." },
      { icon: Cpu, text: "Performance native", description: "Des applications fluides qui rivalisent avec les apps natives." },
      { icon: Shield, text: "Sécurité des données", description: "Chiffrement et protection des données utilisateurs." },
      { icon: Zap, text: "Mises à jour agiles", description: "Déploiement continu et mises à jour over-the-air." },
    ],
    benefits: [
      "Présence sur les deux stores",
      "Code partagé à 95%",
      "UI/UX native optimisée",
      "Analytics intégrés",
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
                Nos Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Des solutions complètes pour votre{" "}
                <span className="gradient-text">transformation digitale</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De la veille sociale au développement d&apos;applications, nous couvrons tous
                vos besoins digitaux avec expertise et passion.
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
