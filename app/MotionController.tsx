"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type GsapContext = { revert: () => void };
type GsapRuntime = {
  context: (callback: () => void) => GsapContext;
  fromTo: (targets: string | Element | Element[], from: object, to: object) => void;
};

declare global {
  interface Window {
    gsap?: GsapRuntime;
  }
}

export default function MotionController() {
  const started = useRef(false);
  const cleanup = useRef<(() => void) | null>(null);

  const initialiseMotion = useCallback(() => {
    if (started.current || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    started.current = true;
    const gsap = window.gsap;
    const revealTargets = Array.from(document.querySelectorAll(
      ".about-grid, .services-heading, .service-grid, .metrics-grid, .skills-grid, .experience-heading, .timeline, .contact-card",
    ));

    const context = gsap.context(() => {
      gsap.fromTo(".hero-feature h1", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "opacity,visibility,transform" });
      gsap.fromTo(".hero-portrait", { autoAlpha: 0, x: 28, rotation: 4 }, { autoAlpha: 1, x: 0, rotation: 1.6, duration: 0.9, delay: 0.12, ease: "power3.out", clearProps: "opacity,visibility,transform" });
      gsap.fromTo(".hero-bottom", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, delay: 0.35, ease: "power2.out", clearProps: "opacity,visibility,transform" });
      gsap.fromTo(".hero-stamp", { autoAlpha: 0, scale: 0.88, rotation: -3 }, { autoAlpha: 1, scale: 1, rotation: 8, duration: 0.65, delay: 0.5, ease: "back.out(1.35)", clearProps: "opacity,visibility,transform" });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        gsap.fromTo(entry.target, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.72, ease: "power2.out", clearProps: "opacity,visibility,transform" });
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    revealTargets.forEach((target) => observer.observe(target));
    cleanup.current = () => {
      observer.disconnect();
      context.revert();
    };
  }, []);

  useEffect(() => {
    if (window.gsap) initialiseMotion();
    return () => cleanup.current?.();
  }, [initialiseMotion]);

  return <Script src="/vendor/gsap.min.js" strategy="afterInteractive" onLoad={initialiseMotion} />;
}
