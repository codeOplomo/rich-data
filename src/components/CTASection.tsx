"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[150px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(258 90% 66%))" }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Parlons-en
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Prêt à <span className="gradient-text">Transformer</span> votre présence digitale ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Besoin d'une veille sociale, d'une application web remarquable ou d'une stratégie digitale complète ? Nous sommes là pour concrétiser votre projet.
            </p>
            <div className="space-y-4">
              {[
                "Consultation stratégique gratuite",
                "Solution sur mesure adaptée à vos besoins",
                "Équipe projet dédiée",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nom
                  </label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary/50 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vous@entreprise.com"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary/50 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Parlez-nous de votre projet
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez ce que vous recherchez..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary/50 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
