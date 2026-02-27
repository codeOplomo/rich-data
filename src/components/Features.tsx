"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Shield,
  Cpu,
  LineChart,
  Palette,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Couverture mondiale",
    description: "Surveillez les conversations dans plus de 50 langues et sur toutes les grandes plateformes sociales du monde.",
  },
  {
    icon: Shield,
    title: "Sécurité d'entreprise",
    description: "Infrastructure conforme SOC 2 avec chiffrement de bout en bout pour vos données sensibles.",
  },
  {
    icon: Cpu,
    title: "Analyse par IA",
    description: "Modèles d'apprentissage automatique entraînés sur des milliards de points de données pour une précision inégalée.",
  },
  {
    icon: LineChart,
    title: "Insights prédictifs",
    description: "Anticipez les tendances avant qu'elles n'arrivent et gardez une longueur d'avance sur la concurrence.",
  },
  {
    icon: Palette,
    title: "Design remarquable",
    description: "Interfaces pixel-perfect offrant une expérience utilisateur exceptionnelle sur tous les appareils.",
  },
  {
    icon: Rocket,
    title: "Déploiement rapide",
    description: "De l'idée à la production en quelques semaines, pas en mois. Méthodologie agile à son meilleur.",
  },
];

const stats = [
  { target: 500, suffix: "+", label: "Projets" },
  { target: 98, suffix: "%", label: "Satisfaction" },
  { target: 50, suffix: "M+", label: "Points de données" },
  { target: 15, suffix: "+", label: "Secteurs" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
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

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      {/* Subtle gradient orb */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px] -translate-y-1/2"
        style={{ background: "hsl(187 100% 50%)" }}
      />

      <div className="container px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Pourquoi RichData
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Conçu pour la <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Chaque fonctionnalité est pensée pour vous donner un avantage compétitif dans le paysage numérique.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card-hover p-6 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 neon-border text-primary group-hover:glow-cyan transition-all duration-500">
                <feature.icon className="w-5 h-5" />
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
  );
};

export default Features;
