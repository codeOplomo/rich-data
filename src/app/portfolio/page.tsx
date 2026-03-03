"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Smartphone,
  Headphones,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "veille", label: "Veille Sociale" },
];

const projects = [
  {
    id: "ecommerce-luxe",
    title: "Boutique Luxe Paris",
    category: "web",
    description: "Plateforme e-commerce haut de gamme avec expérience d'achat immersive",
    image: "/portfolio-1.webp",
    tags: ["Next.js", "Stripe", "Sanity"],
    client: "Maison de Luxe",
    year: "2024",
    icon: Layers,
  },
  {
    id: "app-fitness",
    title: "FitTrack Pro",
    category: "mobile",
    description: "Application de suivi fitness avec coaching IA personnalisé",
    image: "/portfolio-2.webp",
    tags: ["React Native", "Firebase", "TensorFlow"],
    client: "FitTech Startup",
    year: "2024",
    icon: Smartphone,
  },
  {
    id: "veille-cosmetiques",
    title: "Beauty Insights",
    category: "veille",
    description: "Plateforme de veille sociale pour l'industrie cosmétique",
    image: "/portfolio-3.webp",
    tags: ["NLP", "Python", "Dashboard"],
    client: "Groupe L'Oréal",
    year: "2023",
    icon: Headphones,
  },
  {
    id: "saas-immobilier",
    title: "ImmoCloud",
    category: "web",
    description: "Solution SaaS complète pour les agences immobilières",
    image: "/portfolio-4.webp",
    tags: ["React", "Node.js", "PostgreSQL"],
    client: "ImmoTech",
    year: "2023",
    icon: Globe,
  },
  {
    id: "app-banking",
    title: "NeoBank App",
    category: "mobile",
    description: "Application bancaire nouvelle génération avec paiements instantanés",
    image: "/portfolio-5.webp",
    tags: ["Flutter", "Stripe", "AWS"],
    client: "Fintech France",
    year: "2024",
    icon: Smartphone,
  },
  {
    id: "veille-automobile",
    title: "AutoPulse",
    category: "veille",
    description: "Monitoring en temps réel de l'industrie automobile mondiale",
    image: "/portfolio-6.webp",
    tags: ["AI", "BigData", "Analytics"],
    client: "Groupe PSA",
    year: "2023",
    icon: Headphones,
  },
  {
    id: "marketplace-artisans",
    title: "Artisan Connect",
    category: "web",
    description: "Marketplace reliant artisans locaux et consommateurs",
    image: "/portfolio-7.webp",
    tags: ["Vue.js", "Stripe", "MongoDB"],
    client: "Collectif Artisans",
    year: "2024",
    icon: Layers,
  },
  {
    id: "app-sante",
    title: "MedAssist",
    category: "mobile",
    description: "Application de suivi médical avec rappels intelligents",
    image: "/portfolio-8.webp",
    tags: ["React Native", "HealthKit", "FHIR"],
    client: "Groupe Hospitalier",
    year: "2024",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    quote:
      "RichData a transformé notre présence digitale. Leur expertise technique et leur créativité ont dépassé toutes nos attentes.",
    author: "Marie Lefèvre",
    role: "Directrice Marketing",
    company: "Maison de Luxe",
  },
  {
    quote:
      "La plateforme de veille sociale nous permet de réagir en temps réel aux tendances du marché. Un outil indispensable.",
    author: "Pierre Durand",
    role: "CEO",
    company: "Groupe Cosmétiques",
  },
  {
    quote:
      "Une équipe réactive et professionnelle. Notre application mobile a été livrée dans les temps avec une qualité exceptionnelle.",
    author: "Sophie Martin",
    role: "Product Manager",
    company: "FitTech Startup",
  },
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

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-32 pb-16">
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
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Nos <span className="gradient-text">réalisations</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Découvrez une sélection de nos projets récents et comment nous avons aidé
                nos clients à atteindre leurs objectifs digitaux.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8">
          <div className="container px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "gradient-btn text-primary-foreground"
                      : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/portfolio/${project.id}`}>
                      <div className="glass-card-hover overflow-hidden group">
                        {/* Image placeholder */}
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <project.icon className="w-16 h-16 text-muted-foreground/30" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                              Voir le projet
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-primary uppercase tracking-wider">
                              {project.client}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Témoignages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Ce que disent nos <span className="gradient-text">clients</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "150+", label: "Projets livrés" },
                  { value: "98%", label: "Clients satisfaits" },
                  { value: "50+", label: "Clients actifs" },
                  { value: "6", label: "Années d'expérience" },
                ].map((stat) => (
                  <div key={stat.label}>
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
                Prêt à créer votre projet ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Rejoignez nos clients satisfaits et transformez votre vision en réalité
                avec RichData.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline-glow" size="lg">
                    Voir nos services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
