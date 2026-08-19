const services = [
  { number: "01", title: "Press office & media relations", text: "Clear stories, considered pitching and responsive press office support that keeps brands visible in the right conversations." },
  { number: "02", title: "Campaigns & brand launches", text: "End-to-end PR campaigns for openings, seasonal moments, activations and special events — from strategy through reporting." },
  { number: "03", title: "Influencer & talent campaigns", text: "Thoughtful creator collaborations, VIP experiences and talent-led moments designed to build genuine reach and relevance." },
  { number: "04", title: "Events & on-ground delivery", text: "Guest-list curation, media hosting, crisis communications and calm coordination when every detail needs to land." },
];

const metrics = [
  { value: "100+", label: "weddings delivered", detail: "A foundation in high-pressure, guest-first events." },
  { value: "25%", label: "social growth", detail: "Built through purposeful, date-led content strategy." },
  { value: "5,000+", label: "community grown", detail: "An engaged following in the wedding industry." },
];

const experience = [
  { period: "Jul 2025 — Present", company: "CM Comms", role: "PR Account Manager", description: "Leading press office activity and campaigns for luxury hospitality, lifestyle and wellness clients across the UAE — spanning launches, media visits, influencer collaborations and performance reporting." },
  { period: "May 2025 — Jul 2025", company: "The Brill Collective", role: "Freelance PR Senior Account Executive", description: "Supported BrewDog’s Dubai launch through regional media and influencer guest lists, on-site delivery, real-time logistics and post-event coverage." },
  { period: "Oct 2024 — May 2025", company: "Bacchus Agency", role: "PR Senior Account Executive", description: "Developed strategic PR campaigns across lifestyle and F&B, led media relations, shaped press materials, managed events and translated campaign performance into actionable reporting." },
  { period: "Sep 2023 — Oct 2024", company: "StickyGinger", role: "PR Account Executive", description: "Managed tailored PR programmes from pitching, seeding and interviews through KPI tracking — building strong journalist and influencer relationships along the way." },
  { period: "Sep 2022 — Sep 2023", company: "Broadway Interiors", role: "Marketing Manager", description: "Led annual marketing planning, brand content and award submissions while growing social presence by 25% across Instagram, LinkedIn and Twitter." },
  { period: "Aug 2021 — Aug 2022", company: "Saltmarshe Hall", role: "Event Supervisor", description: "Managed weddings, hotel operations, sales and client relationships while growing the venue’s social audience to more than 5,000 followers." },
];

const brands = ["Four Seasons", "PUMA", "SONOS", "ST. REGIS", "CORINTHIA", "GAIA", "SEXY FISH", "BAR DES PRÉS", "KIRA", "BREWDOG"];
const skills = ["PR strategy", "Media relations", "Press releases", "Influencer campaigns", "Event execution", "Brand messaging", "Crisis communications", "Performance reporting", "Project management", "Vuelio", "Canva", "Microsoft Office"];
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="wordmark" href="#top" aria-label="Olivia Blackett, back to top">OB<span className="wordmark-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="mailto:livy.blackett@gmail.com">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <h1 id="hero-title">PR that earns <span className="serif-accent">attention</span> and builds lasting brand relevance.</h1>
        <div className="hero-bottom">
          <p className="hero-intro">I&apos;m Olivia — a communications specialist creating high-impact campaigns for luxury hospitality, lifestyle, wellness and F&amp;B brands across the UAE.</p>
          <div className="hero-actions" aria-label="Contact and profile links">
            <a className="button button-primary" href="mailto:livy.blackett@gmail.com">Email Olivia <Arrow /></a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/olivia-blackett-55094a19b/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a className="text-link" href="/Olivia-Blackett-CV-2026.pdf" download>Download CV ↓</a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>STRATEGY</span><i>•</i><span>STORIES</span><i>•</i><span>IMPACT</span></div>
      </section>

      <section className="brand-strip" aria-labelledby="brands-title">
        <div className="brand-heading page-shell"><p className="section-kicker" id="brands-title">Brands I&apos;ve worked with</p></div>
        {/* Keyboard focus is intentional: it gives non-pointer users a way to pause the moving content. */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div className="ticker" role="region" tabIndex={0} aria-label="Brand list. Animation pauses when focused."><div className="ticker-track">{[...brands, ...brands].map((brand, index) => <span key={`${brand}-${index}`}>{brand}</span>)}</div></div>
      </section>

      <section className="about-section page-shell section-space" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><p>About</p></div>
        <div className="about-grid">
          <h2 id="about-title">Sharp thinking.<br />Strong relationships.<br /><span className="serif-accent highlight">Calm delivery.</span></h2>
          <div className="about-copy">
            <p className="lead">I build campaigns that turn brand stories into meaningful visibility — with the commercial outcomes to match.</p>
            <p>My experience spans press office management, restaurant launches, seasonal activations, talent-led campaigns and high-touch events. I pair established media and influencer relationships with a detail-driven approach, from the first idea to the final report.</p>
            <p>I began in events, managing and executing more than 100 weddings. It shaped how I work today: organised, client-focused and unflappable when the pressure is on.</p>
            <a className="inline-link" href="#experience">Explore my experience <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services-section section-space" id="services" aria-labelledby="services-title"><div className="page-shell">
        <div className="section-label light"><span>02</span><p>What I do</p></div>
        <div className="services-heading"><h2 id="services-title">From a strong story<br />to a <span className="serif-accent">standout moment.</span></h2><p>Strategic communications shaped around what a brand needs now — and where it wants to go next.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow" aria-hidden="true">↗</span></article>)}</div>
      </div></section>

      <section className="metrics-section page-shell section-space" aria-labelledby="impact-title">
        <div className="section-label"><span>03</span><p id="impact-title">Selected impact</p></div>
        <div className="metrics-grid">{metrics.map((metric) => <article className="metric" key={metric.value}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.detail}</p></article>)}</div>
      </section>

      <section className="skills-section section-space" aria-labelledby="skills-title"><div className="page-shell skills-grid">
        <div><div className="section-label"><span>04</span><p>Capabilities</p></div><h2 id="skills-title">The toolkit behind the <span className="serif-accent highlight">coverage.</span></h2></div>
        <ul className="skill-list" aria-label="Skills and tools">{skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}</ul>
      </div></section>

      <section className="experience-section page-shell section-space" id="experience" aria-labelledby="experience-title">
        <div className="section-label"><span>05</span><p>Experience</p></div>
        <div className="experience-heading"><h2 id="experience-title">A career built around making <span className="serif-accent">things happen.</span></h2><p>From guest-first events to regional PR campaigns, each role has added a new layer to how I think, lead and deliver.</p></div>
        <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><p className="timeline-period">{item.period}</p><div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div><p className="timeline-description">{item.description}</p></article>)}</div>
      </section>

      <section className="education-section page-shell" aria-labelledby="education-title"><div className="education-card"><div className="education-mark" aria-hidden="true">1<sup>st</sup></div><div><p className="section-kicker">Education</p><h2 id="education-title">Sheffield Hallam University</h2><p>International Events Management with Experiential Management</p></div><p className="education-year">2018 — 2021</p></div></section>

      <section className="contact-section page-shell section-space" id="contact" aria-labelledby="contact-title"><div className="contact-card">
        <p className="contact-kicker"><span className="status-dot" /> Open to the right conversation</p><h2 id="contact-title">Have a story worth <span className="serif-accent">sharing?</span></h2><p>Let&apos;s talk about how considered PR can make it impossible to overlook.</p><a className="button button-light" href="mailto:livy.blackett@gmail.com">livy.blackett@gmail.com <Arrow /></a>
      </div></section>

      <footer className="page-shell"><a className="wordmark" href="#top" aria-label="Olivia Blackett, back to top">OB<span className="wordmark-dot">.</span></a><p>Olivia Blackett — PR &amp; Communications</p><div><a href="https://www.linkedin.com/in/olivia-blackett-55094a19b/" target="_blank" rel="noreferrer">LinkedIn</a><a href="/Olivia-Blackett-CV-2026.pdf" download>Download CV</a></div></footer>
    </main>
  );
}
