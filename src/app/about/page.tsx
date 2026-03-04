"use client";
import { motion } from "framer-motion";
import { Users, Target, Award, Heart, Rocket, Code2, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Pérennité Technologique",
    description: "Nous concevons des architectures logicielles évolutives et rigoureusement documentées. Chaque projet est pensé pour minimiser la dette technique et accompagner sereinement la croissance de vos opérations sur le long terme.",
  },
  {
    icon: Target,
    title: "Sécurité & Conformité",
    description: "La protection de vos actifs numériques est au cœur de nos protocoles. Nous déployons des infrastructures chiffrées de bout en bout, en stricte conformité avec les standards internationaux et les directives de la CNDP (Loi 09-08).",
  },
  {
    icon: Users,
    title: "Transparence Opérationnelle",
    description: "Notre méthodologie garantit une visibilité absolue sur l'avancement de vos projets. Grâce à des cycles de développement itératifs (Agile), vous gardez un contrôle continu sur chaque phase de validation avant la mise en production.",
  },
  {
    icon: Rocket,
    title: "Performance Mesurable",
    description: "Le choix de vos technologies (IA, Cloud, Data Analytics) ne doit pas être guidé par la tendance, mais par l'efficacité. Notre objectif est d'optimiser vos processus internes, d'accélérer vos performances et de maximiser votre retour sur investissement.",
  },
];

const team = [
  {
    name: "Alexandre Dupont",
    role: "CEO & Fondateur",
    image: "/team-1.webp",
    description: "15 ans d'expérience en stratégie digitale et développement d'entreprise.",
  },
  {
    name: "Marie Laurent",
    role: "Directrice Technique",
    image: "/team-2.webp",
    description: "Experte en architecture logicielle et technologies cloud.",
  },
  {
    name: "Thomas Bernard",
    role: "Lead Designer",
    image: "/team-3.webp",
    description: "Designer UX/UI primé avec une passion pour les interfaces innovantes.",
  },
  {
    name: "Sophie Martin",
    role: "Data Scientist",
    image: "/team-4.webp",
    description: "Spécialiste en IA et analyse prédictive pour la veille sociale.",
  },
];

const milestones = [
  { year: "2018", title: "Création de RichData", description: "Fondation de l'entreprise avec une vision claire : démocratiser l'intelligence sociale." },
  { year: "2019", title: "Premiers grands clients", description: "Collaboration avec des marques Fortune 500 pour la veille sociale." },
  { year: "2021", title: "Expansion des services", description: "Lancement de notre division développement web & mobile." },
  { year: "2023", title: "IA de nouvelle génération", description: "Déploiement de modèles IA propriétaires pour l'analyse de sentiment." },
  { year: "2024", title: "500+ projets livrés", description: "Cap symbolique franchi avec une satisfaction client de 98%." },
];

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

export default function AboutPage() {
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
                QUI SOMMES-NOUS ?
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                L'ingénierie de pointe propulsée par l&apos;
                <span className="gradient-text">Intelligence Artificielle</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Née du développement d'algorithmes complexes d'analyse de données, notre équipe d'experts 100% interne vous accompagne de la conception architecturale jusqu'au déploiement de vos applications métiers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Notre Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Transformer la complexité en <span className="gradient-text">performance brute</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Notre mission est de concevoir les fondations technologiques et data qui soutiennent la croissance de votre entreprise. Au-delà du développement web traditionnel, nous architecturons des bases de données complexes et intégrons des modèles d'intelligence artificielle sur-mesure pour créer des écosystèmes digitaux hautement performants.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous appliquons une rigueur d'ingénierie stricte à chaque projet, alliant sécurité, vitesse et innovation. 
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Code2, label: "Écosystèmes déployés", value: "150+" },
                  { icon: Brain, label: "Points de données traités", value: "50M+" },
                  { icon: Palette, label: "Temps de réponse API", value: "< 100ms" },
                  { icon: Award, label: "Code & Ingénierie interne", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                NOTRE ENGAGEMENT
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Nos principes d'<span className="gradient-text">ingénierie</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="glass-card-hover p-6 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 neon-border text-primary group-hover:glow-cyan transition-all duration-500">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                NOTRE STACK TECHNIQUE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Les technologies derrière nos <span className="gradient-text">performances</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                Nous déployons les frameworks, les langages et les infrastructures cloud les plus robustes du marché pour garantir la scalabilité et la sécurité de vos écosystèmes.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-cyan -translate-x-1/2 mt-5 z-10" />
                    <div className="w-12 shrink-0 md:hidden" />
                    <div
                      className={`flex-1 glass-card p-6 ${
                        isLeft ? "md:mr-10" : "md:ml-10"
                      }`}
                    >
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                NOTRE EXPERTISE HUMAINE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Le noyau dur de <span className="gradient-text">RichData</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Une équipe d'ingénierie experte, sans sous-traitance, dédiée à la performance et à la sécurité de vos infrastructures.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="glass-card-hover p-6 text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <Users className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
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
              transition={{ duration: 0.6 }}
              className="glass-card p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à bâtir votre infrastructure de demain ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Discutons de vos enjeux technologiques et définissons ensemble l'architecture capable de porter vos ambitions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="hero" size="lg">
                    Démarrer une consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline-glow" size="lg">
                    Explorer nos expertises
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
