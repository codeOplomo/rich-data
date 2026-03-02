"use client";
import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & Architecture",
    description:
      "Nous analysons vos flux de données et concevons une architecture logicielle scalable (Cloud, API, Database) avant d'écrire la première ligne de code.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Développement Agile",
    description:
      "Nous codons votre solution par sprints itératifs. Vous accédez à des environnements de pré-production pour valider chaque fonctionnalité en temps réel.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "QA & Intégration IA",
    description:
      "Nous intégrons vos modèles d'IA et soumettons l'infrastructure à des tests de charge et de sécurité stricts pour garantir une stabilité totale.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Déploiement CI/CD",
    description:
      "Nous automatisons la mise en production et activons un monitoring 24/7 pour assurer la haute disponibilité (Uptime) de vos services.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative">
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
            Notre Méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Une méthodologie éprouvée qui transforme les défis complexes en solutions élégantes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-cyan -translate-x-1/2 mt-5 z-10" />

                {/* Spacer for mobile (left offset past the line) */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Card */}
                <div
                  className={`flex-1 glass-card p-6 md:p-8 group hover:border-primary/20 transition-all duration-500 ${
                    isLeft ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-border text-primary">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-primary tracking-widest uppercase">
                      Étape {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hidden spacer for md layout alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
