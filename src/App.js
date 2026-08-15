import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import "./App.css";

const projectGroups = {
  Featured: [
    {
      title: "GREAT — Funds",
      eyebrow: "Fintech platform",
      description:
        "A multi-tenant investment platform that helps people onboard, track and manage global funds through one focused experience.",
      image: "/images/GREAT.png",
      stack: ["Python", "Flask", "PostgreSQL"],
      live: "https://onboarding.appreciatefunds.com/",
      code: "",
      accent: "violet",
      number: "01",
    },
    {
      title: "ChatPlane",
      eyebrow: "Real-time social app",
      description:
        "A responsive messaging experience with instant conversations, image sharing, emoji support and secure Google authentication.",
      image: "/images/chatapp.png",
      stack: ["MERN", "Tailwind", "Firebase"],
      live: "https://anshuljain8110.github.io/chatapp/",
      code: "https://github.com/anshuljain8110/chatapp",
      accent: "cyan",
      number: "02",
    },
    {
      title: "Portfolio Maker",
      eyebrow: "Creator tool",
      description:
        "A flexible portfolio builder that turns personal details and project work into a polished developer presence.",
      image: "/images/portfolio_maker.jpg",
      stack: ["Flask", "MongoDB", "React"],
      live: "",
      code: "https://github.com/anshuljain8110/portfolio_maker",
      accent: "lime",
      number: "03",
    },
  ],
  Experience: [
    {
      title: "Appreciate Wealth",
      eyebrow: "Backend engineering internship",
      description:
        "Built and maintained production microservices, shipped new product features and improved reliability across a growing fintech platform.",
      image: "/images/appreciate.png",
      stack: ["Python", "Flask", "Microservices"],
      live: "https://appreciatewealth.com/",
      code: "",
      accent: "violet",
      number: "01",
    },
    {
      title: "Money Manager",
      eyebrow: "Interactive Python project",
      description:
        "A visual money management tool that makes recording and understanding everyday financial transactions approachable.",
      image: "/images/moneymanager.jpg",
      stack: ["Python", "Turtle", "Data"],
      live: "",
      code: "https://github.com/anshuljain8110/money_management",
      accent: "cyan",
      number: "02",
    },
  ],
  "Problem solving": [
    {
      title: "800+ challenges",
      eyebrow: "LeetCode practice",
      description:
        "Consistent practice across data structures, dynamic programming, graphs and algorithms—turning difficult problems into clear, efficient solutions.",
      image: "/images/leetcode.jpg",
      stack: ["Python", "C++", "Java"],
      live: "https://leetcode.com/anshuljain8110/",
      code: "",
      accent: "lime",
      number: "01",
    },
  ],
};

const tech = [
  ["react", "React"], ["typescript", "TypeScript"], ["python", "Python"],
  ["flask", "Flask"], ["node", "Node.js"], ["mongo", "MongoDB"],
  ["express", "Express"], ["github", "GitHub"],
];

const socials = [
  ["GitHub", "https://github.com/anshuljain8110", "github142"],
  ["LinkedIn", "https://www.linkedin.com/in/anshuljain8110/", "linkedin"],
  ["LeetCode", "https://leetcode.com/anshuljain8110", "leetcode"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function PetMinion() {
  return (
    <button className="pet-minion" type="button" aria-label="Your tiny code buddy says hi">
      <span className="pet-shadow" />
      <span className="pet-message">Hi Anshul! 👋</span>
      <span className="pet-arm pet-arm-left" />
      <span className="pet-arm pet-arm-right"><i /></span>
      <span className="pet-body">
        <span className="pet-hair"><i /><i /><i /></span>
        <span className="pet-goggle-strap" />
        <span className="pet-goggles">
          <i className="pet-eye"><b /></i><i className="pet-eye"><b /></i>
        </span>
        <span className="pet-mouth" />
        <span className="pet-overalls"><i>⌁</i></span>
      </span>
      <span className="pet-leg pet-leg-left" />
      <span className="pet-leg pet-leg-right" />
    </button>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState("Featured");
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false,
      }).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const moveSpotlight = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveSpotlight);
    return () => window.removeEventListener("pointermove", moveSpotlight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <PetMinion />

      <header className="nav-wrap">
        <nav className="glass-nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Anshul Jain — home">
            <span className="brand-mark">AJ</span>
            <span className="brand-copy">Anshul Jain<small>Full-stack engineer</small></span>
          </a>
          <div className="desktop-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a className="availability" href="mailto:anshuljain8110@gmail.com">
              <span /> Available for opportunities
            </a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation menu" aria-expanded={menuOpen}>
              <i /><i />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="menu-close" onClick={closeMenu} aria-label="Close menu">×</button>
            <div className="menu-links">
              {["home", "work", "about", "contact"].map((item, i) => (
                <motion.a key={item} href={`#${item}`} onClick={closeMenu} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                  <span>0{i + 1}</span>{item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="hero section-pad" id="home">
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <motion.div className="hero-kicker" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="status-dot" /> Building thoughtful products from India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            I turn complex ideas<br />into <span className="gradient-text">simple experiences.</span>
          </motion.h1>
          <div className="hero-lower">
            <motion.div className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <p>I’m Anshul, a full-stack engineer who cares about the tiny details that make digital products feel effortless.</p>
              <div className="hero-cta-row">
                <a className="primary-button" href="#work">Explore my work <Arrow /></a>
                <a className="text-link" href="https://drive.google.com/drive/folders/1DYOKra4gmNS1mdTE0TpPoPF4dQqLssNP?usp=sharing" target="_blank" rel="noreferrer">View résumé <Arrow /></a>
              </div>
            </motion.div>

            <motion.div className="portrait-card" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <div className="portrait-ring"><img src={`${process.env.PUBLIC_URL}/images/mee.jpeg`} alt="Anshul Jain" /></div>
              <div className="portrait-note"><span>Currently exploring</span><strong>Scalable systems & delightful UI</strong></div>
              <div className="floating-code" aria-hidden="true">{`{ build: "better" }`}</div>
            </motion.div>
          </div>
          <div className="hero-meta">
            <span>Based in Ambala, India</span>
            <span className="hero-time">{time} IST</span>
            <a href="#work">Scroll to discover <b>↓</b></a>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Core skills">
          <div className="marquee-track">
            {[...tech, ...tech].map(([icon, name], index) => (
              <div className="tech-pill" key={`${name}-${index}`}>
                <img src={`${process.env.PUBLIC_URL}/svg/${icon}.svg`} alt="" />{name}<span>✦</span>
              </div>
            ))}
          </div>
        </section>

        <motion.section className="work section-pad" id="work" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="section-heading">
            <div><span className="eyebrow">Selected work</span><h2>Things I’ve built,<br /><em>problems I’ve solved.</em></h2></div>
            <p>A selection of production work, experiments and engineering milestones from my journey so far.</p>
          </div>
          <div className="filter-row" role="tablist" aria-label="Project filters">
            {Object.keys(projectGroups).map((group) => (
              <button key={group} className={activeGroup === group ? "active" : ""} onClick={() => setActiveGroup(group)} role="tab" aria-selected={activeGroup === group}>
                {group}<span>{String(projectGroups[group].length).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <motion.div className="project-list" layout>
            <AnimatePresence mode="popLayout">
              {projectGroups[activeGroup].map((project, index) => (
                <motion.article className={`project-card ${project.accent}`} key={project.title} layout initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="project-visual">
                    <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={`${project.title} project preview`} />
                    <span className="project-number">{project.number}</span>
                    <span className="view-label">View case study</span>
                  </div>
                  <div className="project-copy">
                    <span className="eyebrow">{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <Arrow /></a>}
                      {project.code && <a href={project.code} target="_blank" rel="noreferrer">Source code <Arrow /></a>}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        <motion.section className="about section-pad" id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.9 }}>
          <div className="about-grid">
            <div className="about-title">
              <span className="eyebrow">A little about me</span>
              <h2>Engineer by logic.<br /><em>Maker by nature.</em></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I enjoy living at the intersection of clean backend architecture and thoughtful frontend craft.</p>
              <p>For me, great software is more than code that works. It should be understandable, dependable and genuinely enjoyable to use. I bring curiosity, ownership and a product mindset to every build.</p>
            </div>
          </div>
          <div className="stats-grid">
            <motion.div className="stat-card" initial={{ opacity: 0, y: 55, rotate: -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65 }}><strong>800<span>+</span></strong><p>Problems solved<br />across platforms</p></motion.div>
            <motion.div className="stat-card" initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65, delay: .1 }}><strong>10<span>+</span></strong><p>Technologies used<br />to ship ideas</p></motion.div>
            <motion.div className="stat-card quote-card" initial={{ opacity: 0, y: 55, rotate: 1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65, delay: .2 }}><span>My approach</span><p>Stay curious.<br />Build clearly.<br /><em>Keep improving.</em></p></motion.div>
          </div>
        </motion.section>

        <motion.section className="contact section-pad" id="contact" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-top">
            <span className="eyebrow">Have an idea?</span>
            <span>Open to select freelance work<br />and full-time opportunities.</span>
          </div>
          <h2>Let’s create<br /><em>something great.</em></h2>
          <a className="email-link" href="mailto:anshuljain8110@gmail.com">anshuljain8110@gmail.com <Arrow /></a>
          <div className="social-row">
            {socials.map(([name, url, icon]) => (
              <a href={url} target="_blank" rel="noreferrer" key={name}><img src={`${process.env.PUBLIC_URL}/svg/${icon}.svg`} alt="" />{name}<Arrow /></a>
            ))}
          </div>
        </motion.section>
      </main>

      <footer>
        <div><span className="brand-mark">AJ</span><p>Designed & built with care.<br />© {new Date().getFullYear()} Anshul Jain</p></div>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
