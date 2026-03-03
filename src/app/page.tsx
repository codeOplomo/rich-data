import { lazy, Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

const Hero = lazy(() => import("@/components/Hero"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const InfiniteGallery = lazy(() => import("@/components/InfiniteGallery"));
const Services = lazy(() => import("@/components/Services"));
const Features = lazy(() => import("@/components/Features"));
const Process = lazy(() => import("@/components/Process"));
const CTASection = lazy(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-muted" />}>
        <InfiniteGallery />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <CTASection />
      </Suspense>
    </>
  );
}