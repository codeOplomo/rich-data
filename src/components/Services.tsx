"use client";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  TrendingUp,
  MessageSquare,
  Code2,
  Smartphone,
  Layers,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Intelligence Économique & Automatisation",
    description:
      "Nous transformons vos données brutes en tableaux de bord décisionnels et automatisons vos processus métier les plus complexes grâce à l'Intelligence Artificielle.",
    icon: Brain,
    features: [
      { icon: BarChart3, text: "Intégration d'IA générative" },
      { icon: TrendingUp, text: "Pipelines Data & Dashboards avancés" },
      { icon: MessageSquare, text: "Analyse de données sociales en temps réel" },
    ],
    accentClass: "text-primary",
    glowClass: "glow-cyan",
  },
  {
    title: "Plateformes & Applications Métier",
    description:
      "Nous concevons des portails web, des plateformes SaaS et des applications mobiles sur-mesure dotés d'architectures robustes, sécurisées et prêtes à évoluer. ",
    icon: Code2,
    features: [
      { icon: Smartphone, text: "Architectures Web & Cloud haute performance" },
      { icon: Layers, text: "Applications Mobiles natives et cross-platform" },
      { icon: Zap, text: "Développement de solutions SaaS sur-mesure" },
    ],
    accentClass: "text-accent",
    glowClass: "glow-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            NOTRE EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Nos Pôles d'<span className="gradient-text">Ingénierie Avancée</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transformez vos défis techniques en solutions performantes grâce à notre double expertise en architecture logicielle sur-mesure et en ingénierie de la donnée.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-card-hover p-8 md:p-10 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.accentClass} neon-border transition-all duration-500 group-hover:${service.glowClass}`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title & description */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Feature list */}
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                  >
                    <feature.icon className={`w-4 h-4 ${service.accentClass} shrink-0`} />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
