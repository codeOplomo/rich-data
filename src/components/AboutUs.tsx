"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Shield } from "lucide-react";

const teamCards = [
  {
    title: "Développeurs",
    description:
      "Nous maîtrisons les stacks modernes pour construire des applications natives et web robustes, prêtes à encaisser la charge.",
    image: "/visual-1.webp", // Place dev.png in public/
  },
  {
    title: "Product Design & UI/UX",
    description:
      "Nous transformons des données complexes et des dashboards en expériences utilisateur intuitives.",
    image: "/visual-1-uiux.png", // Place design.png in public/
  },
  {
    title: "Data Science & IA Appliquée",
    description:
      "Exploitation avancée de vos données. Intégration d'IA générative (LLMs), automatisation des processus, pipelines de données et tracking analytique (GA4) pointu.",
    image: "/visual-1-data.png", // Place data.png in public/
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

const AboutUs = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background stars/particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        {/* Subtle light streaks */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

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
            Qui sommes-nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Plus qu'une agence.{" "}
            <span className="gradient-text">Un partenaire</span> technologique.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Nous sommes une équipe interne spécialisée dans le développement digital et l'intelligence artificielle.
            <br />
            Pas de sous-traitance, nous vous accompagnons de la conception à l'optimisation continue.
          </p>
        </motion.div>

        {/* Team cards with glowing borders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {teamCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="glow-border-card group"
            >
              {/* Rotating glow element */}
              <span className="glow"></span>
              {/* Full border glow on hover */}
              <span className="border-glow"></span>
              <div className="card-inner p-2 h-full flex flex-col items-center text-center">
                {/* Image */}
                <div className="mb-2 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-52 h-52 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
