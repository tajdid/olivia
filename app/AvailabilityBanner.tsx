"use client";

import { useEffect, useState } from "react";

export default function AvailabilityBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#top");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className={`availability-banner${visible ? " is-visible" : ""}`}
      aria-label="Current availability"
      aria-hidden={!visible}
    >
      <div className="availability-inner page-shell">
        <div className="availability-message">
          <span className="status-dot" aria-hidden="true" />
          <p><strong>Currently available</strong><span className="availability-detail"> for the right next opportunity.</span></p>
        </div>
        <div className="availability-types" aria-label="Opportunity types">
          <span>Full-time roles</span>
          <span>Freelance projects</span>
        </div>
        <a href="mailto:livy.blackett@gmail.com?subject=Opportunity%20for%20Olivia" aria-label="Email Olivia about an opportunity">
          <span className="availability-cta-label">Start a conversation</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.75 5.75h16.5v12.5H3.75z" />
            <path d="m4.5 6.5 7.5 6 7.5-6" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
