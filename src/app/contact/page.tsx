"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@richdata.dev",
    href: "mailto:contact@richdata.dev",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "75 Avenue des Champs-Élysées, 75008 Paris",
    href: "#",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun - Ven : 9h00 - 18h00",
    href: "#",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

const faqs = [
  {
    question: "Quel est le délai moyen pour un projet ?",
    answer:
      "Le délai varie selon la complexité du projet. Un site vitrine prend généralement 4-6 semaines, une application web 2-4 mois, et une application mobile 3-6 mois.",
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer:
      "Oui, nous proposons des contrats de maintenance et support adaptés à vos besoins. Cela inclut les mises à jour de sécurité, corrections de bugs et améliorations mineures.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer:
      "Nous travaillons en méthodologie agile avec des sprints de 2 semaines. Vous avez accès à un dashboard de suivi et des démos régulières pour valider l'avancement.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les virements bancaires et les paiements par carte. Les projets sont généralement facturés en 3 étapes : 30% à la signature, 40% à mi-parcours, 30% à la livraison.",
  },
];

const services = [
  "Veille Sociale",
  "Développement Web",
  "Application Mobile",
  "Consulting Digital",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
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
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Parlons de votre{" "}
                <span className="gradient-text">projet</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Que vous ayez une question, un projet en tête ou simplement envie de discuter,
                nous sommes là pour vous. Réponse garantie sous 24h.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-hover p-6 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 neon-border text-primary group-hover:glow-cyan transition-all duration-500">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding relative">
          <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Envoyez-nous un message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          required
                          className="bg-muted/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@entreprise.com"
                          required
                          className="bg-muted/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Entreprise
                        </label>
                        <Input
                          id="company"
                          placeholder="Nom de votre entreprise"
                          className="bg-muted/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          className="bg-muted/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service souhaité *
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full h-10 px-3 rounded-md bg-muted/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        className="w-full h-10 px-3 rounded-md bg-muted/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        <option value="< 5k">{"< 5 000 €"}</option>
                        <option value="5k-15k">5 000 € - 15 000 €</option>
                        <option value="15k-50k">15 000 € - 50 000 €</option>
                        <option value="> 50k">{"> 50 000 €"}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet, vos objectifs et vos délais..."
                        required
                        rows={5}
                        className="bg-muted/50 border-border/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* FAQ & Social */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* FAQ */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Questions fréquentes
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="glass-card overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <MessageSquare
                            className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-5 pb-5"
                          >
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-xl flex items-center justify-center neon-border text-muted-foreground hover:text-primary hover:glow-cyan transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Note */}
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-border text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Réponse rapide garantie</h3>
                      <p className="text-sm text-muted-foreground">
                        Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées.
                        Pour les urgences, appelez-nous directement.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-2 max-w-5xl mx-auto overflow-hidden"
            >
              <div className="aspect-[21/9] bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    75 Avenue des Champs-Élysées, 75008 Paris
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Métro : George V (ligne 1) | Franklin D. Roosevelt (lignes 1 & 9)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
