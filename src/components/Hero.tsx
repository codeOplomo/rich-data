"use client";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Twitter, Youtube, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";

// Floating badge data
import { BarChart2, Brain, Rocket } from "lucide-react";

const floatingBadges = [
  {
    icon: BarChart2,
    title: "Veille Sociale",
    subtitle: "Analyse en temps réel",
    position: "top-[10%] right-[-5%] md:right-[-10%]",
    delay: 0,
  },
  {
    icon: Brain,
    title: "IA Analytics",
    subtitle: "Insights prédictifs",
    position: "bottom-[20%] right-[-8%] md:right-[-15%]",
    delay: 1,
  },
  {
    icon: Rocket,
    title: "Digital Products",
    subtitle: "Web & Apps modernes",
    position: "top-[50%] left-[-8%] md:left-[-15%]",
    delay: 2,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "hsl(187 100% 50%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: "hsl(258 90% 66%)" }}
      />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Animated Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first md:order-last flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,200,200,0.2) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Central Frame */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-primary/50 overflow-hidden flex items-center justify-center"
                style={{
                  background: "hsl(222 35% 14% / 0.8)",
                  boxShadow: "0 0 30px rgba(0,200,200,0.3), 0 0 60px rgba(0,200,200,0.1)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0,200,200,0.3), 0 0 60px rgba(0,200,200,0.1)",
                    "0 0 40px rgba(0,200,200,0.4), 0 0 80px rgba(0,200,200,0.15)",
                    "0 0 30px rgba(0,200,200,0.3), 0 0 60px rgba(0,200,200,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2 className="w-24 h-24 md:w-32 md:h-32 text-primary/30" />
              </motion.div>

              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${badge.position} bg-background/90 backdrop-blur-sm border border-border rounded-2xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 shadow-lg min-w-[140px] md:min-w-[180px] cursor-pointer z-10`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -15, 0],
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      borderColor: "hsl(187 100% 50%)",
                      boxShadow: "0 5px 25px rgba(0,200,200,0.3)",
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: badge.delay * 0.3 + 0.5 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay,
                      },
                    }}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm md:text-base font-bold text-foreground">{badge.title}</span>
                      <span className="text-[10px] md:text-xs text-muted-foreground leading-tight">{badge.subtitle}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Orbiting Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/60"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 120 * Math.PI) / 180) * 140,
                      Math.cos(((i * 120 + 360) * Math.PI) / 180) * 140,
                    ],
                    y: [
                      Math.sin((i * 120 * Math.PI) / 180) * 140,
                      Math.sin(((i * 120 + 360) * Math.PI) / 180) * 140,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col items-start gap-6">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Écoutez. Construisez.{" "}
              <span className="gradient-text-hero">Dominez</span>{" "}
              l'espace numérique.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Nous transformons les conversations sociales en intelligence exploitable et créons
              des produits numériques performants qui vous distinguent.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Button variant="hero" size="xl" className="group">
                Découvrir maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Social links - visible on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:flex flex-col items-center gap-4 absolute right-6 top-1/2 -translate-y-1/2"
        >
          <div className="w-px h-16 bg-muted-foreground/30" />
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <div className="w-px h-16 bg-muted-foreground/30" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, hsl(222 35% 14%), transparent)",
        }}
      />
    </section>
  );
};

export default Hero;
