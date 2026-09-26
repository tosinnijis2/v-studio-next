import { CursorGlow } from "@/components/CursorGlow";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites built around speed, clarity, conversion, and a strong visual identity.",
    items: ["Landing pages", "Business websites", "Full-stack apps", "Maintenance"],
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "A cohesive visual system that gives your business a recognizable look and a consistent voice.",
    items: ["Logo design", "Color + type systems", "Brand guidelines", "Business cards"],
    featured: true,
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Clean marketing visuals that extend your brand across digital and physical touchpoints.",
    items: ["Social media graphics", "Flyers + posters", "Digital ads", "Print collateral"],
  },
];

const projects = [
  {
    title: "Brand + Website",
    description: "Identity system • Responsive website",
    art: "art-one",
    label: "PROJECT 01",
    large: true,
  },
  {
    title: "Product Experience",
    description: "UI/UX • Front-end development",
    art: "art-two",
    label: "PROJECT 02",
  },
  {
    title: "Visual Campaign",
    description: "Graphics • Social • Print",
    art: "art-three",
    label: "PROJECT 03",
  },
];

const process = [
  ["01", "Discover", "We define your goal, audience, scope, timeline, and what success needs to look like."],
  ["02", "Design", "I turn the strategy into a visual direction, interface, or brand system before the final build."],
  ["03", "Build", "The approved direction becomes a polished, responsive deliverable ready for real-world use."],
  ["04", "Launch", "We review, test, hand off, and launch with the files, access, and guidance you need."],
] as const;

const tickerItems = [
  "FULL-STACK DEVELOPMENT",
  "BRAND IDENTITY",
  "LOGO DESIGN",
  "GRAPHIC DESIGN",
  "UI/UX",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <CursorGlow />
      <SiteHeader />

      <main id="top">
        <section className="hero section-shell">
          <div className="eyebrow"><span className="dot" /> Independent digital studio</div>
          <h1>Build a brand people <em>remember</em>.</h1>
          <p className="hero-copy">
            Web development, branding, and visual design for businesses that want to look sharp, move fast, and stand out.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a project <span>↗</span></a>
            <a className="button button-secondary" href="#work">See selected work</a>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="stage-card stage-card-a"><span>01</span><strong>WEB</strong><small>Strategy • UI • Build</small></div>
            <div className="stage-card stage-card-b"><span>02</span><strong>BRAND</strong><small>Identity • Logo • Systems</small></div>
            <div className="stage-card stage-card-c"><span>03</span><strong>VISUAL</strong><small>Graphics • Social • Print</small></div>
          </div>
        </section>

        <section className="ticker" aria-label="Studio capabilities">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="ticker-pair" key={`${item}-${index}`}><span>{item}</span><i>✦</i></span>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell section-block">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Services</p>
              <h2>One studio.<br /><span>Multiple disciplines.</span></h2>
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card${service.featured ? " featured" : ""}`} key={service.title}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell section-block work-section">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Work that earns<br /><span>attention.</span></h2>
            </div>
            <p className="section-note">Replace these placeholders with your real projects as you build your portfolio.</p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className={`project-card${project.large ? " project-large" : ""}`} key={project.label}>
                <div className={`project-art ${project.art}`}><span>{project.label}</span></div>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section-shell section-block process-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How it works</p>
              <h2>Simple process.<br /><span>No mystery.</span></h2>
            </div>
          </div>
          <div className="process-list">
            {process.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-block about-section">
          <div className="about-card">
            <p className="section-kicker">About the studio</p>
            <h2>Design thinking.<br /><span>Developer execution.</span></h2>
            <p className="about-copy">
              This studio brings development and visual design under one roof, so clients do not have to coordinate a separate designer, developer, and brand freelancer just to get one project across the finish line.
            </p>
            <div className="about-stats">
              <div><strong>3</strong><span>Core disciplines</span></div>
              <div><strong>1</strong><span>Point of contact</span></div>
              <div><strong>100%</strong><span>Custom work</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell section-block contact-section">
          <div className="contact-panel">
            <p className="section-kicker">Have a project?</p>
            <h2>Let&apos;s make something<br /><span>worth noticing.</span></h2>
            <p>Tell me what you are building, what you need, and where you are stuck. I&apos;ll help you turn it into a clear project.</p>
            <a className="button button-primary" href="mailto:hello@yourstudio.com">hello@yourstudio.com <span>↗</span></a>
            <small>Replace this email with your business email before launch.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top">V<span>/</span>STUDIO</a>
        <p>Web • Brand • Visual</p>
        <p>© {year} V/Studio</p>
      </footer>
    </>
  );
}
