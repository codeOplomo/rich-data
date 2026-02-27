"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SlideData {
  projectNumber: string;
  title: string;
  description: string;
  industry: string;
  techStack: string;
  results: string;
  image: string;
}

const slides: SlideData[] = [
  {
    projectNumber: "01 / Étude de cas",
    title: "Social\nPulse",
    description:
      "Un tableau de bord d'écoute sociale en temps réel pour une marque de distribution du Fortune 500. Nous avons construit une plateforme alimentée par l'IA qui surveille plus de 15 canaux sociaux, détectant les changements de sentiment de la marque en quelques minutes et permettant une réponse rapide aux tendances émergentes.",
    industry: "Commerce de détail & E-commerce",
    techStack: "React, Python, TensorFlow",
    results: "+340% de rapidité de réponse",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    projectNumber: "02 / Étude de cas",
    title: "FinTrack\nMobile",
    description:
      "Une application fintech multiplateforme desservant plus de 200 000 utilisateurs. Nous avons offert une expérience bancaire fluide avec authentification biométrique, transactions en temps réel et analyses prédictives des dépenses grâce au machine learning.",
    industry: "Services financiers",
    techStack: "React Native, Node.js, AWS",
    results: "Note App Store 4,8★",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    projectNumber: "03 / Étude de cas",
    title: "MedConnect\nPlatform",
    description:
      "Une plateforme de télémédecine conforme HIPAA connectant patients et professionnels de santé. Fonctionnalités : consultations vidéo, gestion des prescriptions et vérification des symptômes assistée par IA avec 94% de précision diagnostique.",
    industry: "Santé",
    techStack: "Next.js, PostgreSQL, WebRTC",
    results: "50K+ consultations mensuelles",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    projectNumber: "04 / Étude de cas",
    title: "Brand\nIntelligence",
    description:
      "Une suite d'analytique d'entreprise qui transforme les données sociales en insights exploitables. Nos modèles NLP analysent des millions de conversations chaque jour, identifient les influenceurs, suivent les concurrents et prévoient les tendances du marché.",
    industry: "Marketing & Publicité",
    techStack: "Vue.js, FastAPI, GPT-4",
    results: "2,5M+ points de données/jour",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const CONFIG = {
  slideCount: 4,
  spacingX: 45,
  pWidth: 14,
  pHeight: 18,
  camZ: 30,
  wallAngleY: -0.25,
  lerpSpeed: 0.08,
  scrollThreshold: 50, // Accumulated scroll needed to change slide
};

declare global {
  interface Window {
    THREE: any;
  }
}

const InfiniteGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneCreated = useRef(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  
  // Refs for scroll hijacking state
  const currentSlideRef = useRef(0);
  const isLockedRef = useRef(false);
  const accumulatedScrollRef = useRef(0);
  const isTransitioningRef = useRef(false);
  
  // Three.js state refs
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  // Scroll to gallery and lock
  const lockScroll = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    setIsLocked(true);
    document.body.style.overflow = 'hidden';
    
    // Scroll gallery into perfect view
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Unlock scroll and continue
  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;
    setIsLocked(false);
    document.body.style.overflow = '';
  }, []);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= CONFIG.slideCount) return;
    currentSlideRef.current = index;
    targetScrollRef.current = index * CONFIG.spacingX;
    setActiveSlide(index);
    isTransitioningRef.current = true;
    
    // Reset transition flag after animation
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    // Intersection Observer to detect when gallery is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Gallery is mostly visible, but don't auto-lock
            // Lock will happen on first scroll
          } else if (!entry.isIntersecting && isLockedRef.current) {
            // Gallery scrolled out of view, unlock
            unlockScroll();
          }
        });
      },
      { threshold: [0.5, 0.9] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [unlockScroll]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      
      if (!isInView) return;
      
      // If not locked yet and scrolling into gallery, lock it
      if (!isLockedRef.current && rect.top <= 50 && rect.top >= -50) {
        lockScroll();
        accumulatedScrollRef.current = 0;
        return;
      }
      
      if (!isLockedRef.current) return;
      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }
      
      // Accumulate scroll
      accumulatedScrollRef.current += e.deltaY;
      
      const currentSlide = currentSlideRef.current;
      
      // Check if we should change slide
      if (accumulatedScrollRef.current > CONFIG.scrollThreshold) {
        // Scrolling down
        if (currentSlide < CONFIG.slideCount - 1) {
          e.preventDefault();
          goToSlide(currentSlide + 1);
          accumulatedScrollRef.current = 0;
        } else {
          // On last slide, scrolling down - unlock and let page scroll
          unlockScroll();
          accumulatedScrollRef.current = 0;
        }
      } else if (accumulatedScrollRef.current < -CONFIG.scrollThreshold) {
        // Scrolling up
        if (currentSlide > 0) {
          e.preventDefault();
          goToSlide(currentSlide - 1);
          accumulatedScrollRef.current = 0;
        } else {
          // On first slide, scrolling up - unlock and let page scroll
          unlockScroll();
          accumulatedScrollRef.current = 0;
        }
      } else {
        // Still accumulating, prevent default
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
    };
  }, [lockScroll, unlockScroll, goToSlide]);

  useEffect(() => {
    if (sceneCreated.current) return;

    const initScene = () => {
      if (!containerRef.current || sceneCreated.current) return;
      createGallery();
      sceneCreated.current = true;
    };

    if (window.THREE) {
      initScene();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    script.onload = () => initScene();
    document.head.appendChild(script);
  }, []);

  const createGallery = () => {
    if (!containerRef.current) return;

    const THREE = window.THREE;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1a);
    scene.fog = new THREE.Fog(0x0a0f1a, 10, 110);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, CONFIG.camZ);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const accentLight1 = new THREE.PointLight(0x4fd1c5, 0.5, 100);
    accentLight1.position.set(-20, 10, 20);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x667eea, 0.5, 100);
    accentLight2.position.set(20, -10, 20);
    scene.add(accentLight2);

    const galleryGroup = new THREE.Group();
    scene.add(galleryGroup);

    const textureLoader = new THREE.TextureLoader();
    const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);

    const paintingGroups: any[] = [];

    for (let i = 0; i < CONFIG.slideCount; i++) {
      const group = new THREE.Group();
      group.position.set(i * CONFIG.spacingX, 0, 0);

      const mat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(slides[i].image),
      });
      const mesh = new THREE.Mesh(planeGeo, mat);

      const edges = new THREE.EdgesGeometry(planeGeo);
      const outline = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x4fd1c5 })
      );

      const shadowGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3,
      });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.position.set(0.8, -0.8, -0.5);

      const lineZ = -1;
      const lineLen = CONFIG.spacingX;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-lineLen / 2, 14, lineZ),
        new THREE.Vector3(lineLen / 2, 14, lineZ),
        new THREE.Vector3(-lineLen / 2, -14, lineZ),
        new THREE.Vector3(lineLen / 2, -14, lineZ),
      ]);
      const lines = new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0x1a2235 })
      );

      group.add(shadow);
      group.add(mesh);
      group.add(outline);
      group.add(lines);

      galleryGroup.add(group);
      paintingGroups.push(group);
    }

    galleryGroup.rotation.y = CONFIG.wallAngleY;
    galleryGroup.position.x = 8;

    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth lerp to target
      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * CONFIG.lerpSpeed;

      const xMove = currentScrollRef.current * Math.cos(CONFIG.wallAngleY);
      const zMove = currentScrollRef.current * Math.sin(CONFIG.wallAngleY);
      camera.position.x = xMove;
      camera.position.z = CONFIG.camZ - zMove;

      // Parallax effect
      camera.rotation.x = mouse.y * 0.05;
      camera.rotation.y = -mouse.x * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0a0f1a]"
    >
      {/* Canvas container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* UI Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-1/4 left-[8%] w-[30%] max-w-[450px] transition-all duration-700 ease-out ${
              index === activeSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            }`}
          >
            <span className="inline-block text-[0.7rem] uppercase tracking-[3px] text-gray-400 mb-6 border-b border-gray-700 pb-2">
              {slide.projectNumber}
            </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-none text-white whitespace-pre-line">
                {slide.title}
              </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-12 text-justify">
              {slide.description}
            </p>
            <div className="grid grid-cols-[80px_1fr] gap-y-3 border-t border-gray-700 pt-6">
              <span className="text-[0.65rem] uppercase tracking-[1.5px] text-gray-500 self-center">
                Secteur
              </span>
                <span className="font-sans text-lg text-gray-200">
                  {slide.industry}
                </span>
              <span className="text-[0.65rem] uppercase tracking-[1.5px] text-gray-500 self-center">
                Technologies
              </span>
                <span className="font-sans text-lg text-gray-200">
                  {slide.techStack}
                </span>
              <span className="text-[0.65rem] uppercase tracking-[1.5px] text-gray-500 self-center">
                Résultats
              </span>
                <span className="font-sans text-lg text-cyan-400 font-medium">
                  {slide.results}
                </span>
            </div>
          </div>
        ))}
      </div>


      {/* Progress indicator */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-3 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-1 transition-all duration-500 rounded-full ${
              index === activeSlide 
                ? "h-8 bg-cyan-400" 
                : index < activeSlide 
                  ? "h-4 bg-cyan-400/50" 
                  : "h-4 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default InfiniteGallery;
