"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Server,
  Shield,
  Cpu,
  FileCode,
  Rocket,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Architecture Scalable",
    description: "Nous concevons des infrastructures cloud prêtes à évoluer pour encaisser la charge de votre hyper-croissance sans aucun ralentissement.",
  },
  {
    icon: Shield,
    title: "Sécurité & Privacy by Design",
    description: "Nous déployons des architectures sécurisées avec chiffrement de bout en bout, strictement conformes aux normes de protection (CNDP, RGPD).",
  },
  {
    icon: Cpu,
    title: "IA Privée & Maîtrisée",
    description: "Nous intégrons la puissance des LLMs et du Machine Learning dans vos outils métiers, sans jamais exposer vos données confidentielles.",
  },
  {
    icon: FileCode,
    title: "Code Clean & Documenté",
    description: "Nous livrons un code source propre, rigoureusement testé, versionné et documenté pour garantir une maintenance sans friction par vos équipes.",
  },
  {
    icon: Zap,
    title: "Performance Brute",
    description: "Nous optimisons chaque milliseconde de vos bases de données et de vos requêtes API pour offrir une expérience utilisateur sans aucune latence.",
  },
  {
    icon: Rocket,
    title: "DevOps & CI/CD",
    description: "Nous automatisons vos processus de mise en production pour vous assurer des itérations rapides, continues et sans interruption de service.",
  },
];

const stats = [
  { target: 100, suffix: "%", label: "Ingénierie en interne" },
  { target: 99.9, suffix: "%", label: "Taux de disponibilité" },
  { target: 50, suffix: "M+", label: "Points de données traités" },
  { target: 150, suffix: "+", label: "Écosystèmes déployés" },
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
            NOTRE EMPREINTE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            La performance à <span className="gradient-text">grande échelle</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Déployer des infrastructures logicielles stables, sécurisées et capables de traiter massivement vos données sans aucun compromis.
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
