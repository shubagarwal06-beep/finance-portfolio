import { useEffect, useRef, useState } from 'react';
import { Activity, ArrowDown, ArrowUpRight, Linkedin, Mail, Moon, Sun, TrendingUp, X } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/shubham-agarwal-45542b328/';
const EMAIL = 'shubh4m@vt.edu';
const HIMS_PITCH_URL = 'https://www.perplexity.ai/computer/a/hims-stock-pitch-ShgSq1nMR_60qZKx9pvckw';

const FEATURED_PROJECTS = [
  {
    title: "Iran War Live Dashboard",
    eyebrow: "Macro Research Tool",
    date: "2026",
    summary: "Live geopolitical risk monitor tracking Brent, WTI, and the Treasury curve in real time. Classifies breaking headlines via a two-pass LLM classifier and updates a probability-weighted Brent scenario tree across military escalation, diplomatic resolution, and Hormuz disruption paths.",
    tags: ["Macro", "Fixed Income", "Geopolitics"],
    href: "https://iran-war-dashboard-silk.vercel.app/",
    ctaLabel: "Open Live Dashboard",
    icon: Activity
  },
  {
    title: "Hims & Hers Health (HIMS) - Long Pitch",
    eyebrow: "Equity Pitch Competition",
    date: "Spring 2026",
    summary: "Long equity pitch built as an interactive web app for the Perplexity Computer Stock Pitch Competition. Probability-weighted price target of $32.05, implying roughly 67% upside. Differentiated angles include the Novo Nordisk lawsuit withdrawal as distribution optionality, the FDA Commissioner's DTC telehealth affiliation, and the CS Bio acquisition as a vertical manufacturing asset.",
    tags: ["Equity", "Healthcare", "Long"],
    href: HIMS_PITCH_URL,
    ctaLabel: "View Interactive Pitch",
    icon: TrendingUp
  }
];

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "Hims & Hers Health (HIMS) - Long Pitch",
    type: "Equity",
    date: "Spring 2026",
    recommendation: "Long",
    summary: "Interactive long pitch on HIMS arguing the market underprices GLP-1 distribution optionality, improving regulatory conditions for personalized telehealth, and the strategic value of CS Bio as a vertically integrated manufacturing asset.",
    tags: ["Equity", "Healthcare", "Long"],
    projectLink: HIMS_PITCH_URL,
    linkLabel: "View Interactive Pitch",
    modalData: {
      category: "EQUITY PITCH COMPETITION",
      metrics: [
        { label: "STANCE", value: "Long" },
        { label: "PRICE TARGET", value: "$32.05" },
        { label: "UPSIDE", value: "~67%" },
        { label: "FORMAT", value: "Interactive Web App" },
        { label: "PLATFORM", value: "Perplexity Computer" }
      ],
      overview: "Long pitch on Hims & Hers Health (NYSE: HIMS) submitted to the Perplexity Computer Stock Pitch Competition. Probability-weighted scenarios produce a price target of $32.05 against a roughly 67% implied upside at time of pitch, with a bull case of $45.04 (30%), base of $28.86 (55%), and bear of $17.75 (15%).",
      thesis: [
        { title: "GLP-1 Optionality Re-Rates the Story", desc: "Novo Nordisk lawsuit withdrawal reframes the GLP-1 narrative as a distribution partnership rather than a legal overhang, opening optionality on branded compounding revenue." },
        { title: "Regulatory Risk Looks Lower Than Market Fears", desc: "New FDA Commissioner's prior DTC telehealth affiliation lowers regulatory tail risk on the personalization model that drives HIMS margin." },
        { title: "CS Bio Adds Strategic Supply Control", desc: "CS Bio acquisition is mispriced as a cost line item; treating it as a vertical drug manufacturing asset materially shifts the long-term margin and supply-control story." }
      ]
    }
  },
  {
    id: 2,
    title: "Kraft Heinz (KHC) Bond Recommendation",
    type: "Fixed Income",
    date: "Feb 20, 2026",
    recommendation: "Buy 6.375% 2028 Bond",
    summary: "Analyzed KHC's $21B debt stack to evaluate risk across two bonds with identical credit ratings. Identified asymmetric obligor and duration exposure on the long end, recommending the short-dated 2028 bond as the optimal risk-adjusted position.",
    tags: ["Investment Grade", "Consumer Staples", "DCM"],
    projectLink: "https://drive.google.com/file/d/1yOYJYfvtZ4EFxvMrRPwBKd2y_RkfXZt3/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "FIXED INCOME / DCM",
      metrics: [
        { label: "COUPON", value: "6.375%" },
        { label: "DURATION", value: "~2 Years" },
        { label: "FCF COVERAGE", value: "~4.5x" }
      ],
      overview: "Bond investment recommendation for BASIS (Virginia Tech's student-run $5MM fixed income fund). Analyzed Kraft Heinz's credit profile across its $21B debt stack, comparing the 6.375% 2028 bond against the 5.00% 2042 bond. Despite identical credit ratings (BBB), the two bonds carry materially different risk profiles due to spinoff uncertainty, duration exposure, and potential obligor changes on the long end.",
      thesis: [
        { title: "Spinoff Risk Favors Short End", desc: "Downgrade watch affects the long bond. With spinoff paused Feb 2026, the 2028 maturity avoids obligor uncertainty." },
        { title: "Strong Cash Flow Coverage", desc: "$3.7B FCF (2025) covers interest ~4.5x on FCF basis; Adj. EBITDA coverage ~5.3x with +15.9% YoY FCF growth." },
        { title: "Duration Advantage", desc: "2-year duration insulates against turnaround risk. Even if downgraded to BB+, limited duration reduces price drawdown." }
      ]
    }
  },
  {
    id: 3,
    title: "US Macro Strategy: Fed Policy, Global Realignment & AI Labor Risk",
    type: "Economic Essay",
    date: "Feb 13, 2026",
    recommendation: "Short Duration / Hard Assets",
    summary: "Macro research paper arguing Warsh's dovish nomination masks structural deterioration. Western realignment toward Beijing and East Asian demographics erode long-end Treasury demand, while AI productivity gains risk accelerating layoffs faster than rate cuts can absorb.",
    tags: ["Monetary Policy", "Geopolitics", "Rates"],
    projectLink: "https://drive.google.com/file/d/1vy3A0o8TWdphjTlfIRDx_TFeCq5ecbHd/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "MACRO STRATEGY",
      metrics: [
        { label: "CORE PCE", value: "2.8%" },
        { label: "FED FUNDS", value: "3.50-3.75%" },
        { label: "OUTLOOK", value: "Short Duration" }
      ],
      overview: "Published macro research paper examining Warsh's Fed Chair nomination, the 'productive dovishness' paradox (AI-driven rate cuts that could accelerate layoffs), yield curve normalization after the longest inversion in U.S. history, credit spread widening from record corporate issuance, and structural inflation risks from AI capex competition. Recommends underweighting long-duration Treasuries and positioning in 2-5 year maturities.",
      thesis: [
        { title: "Warsh Paradox", desc: "If AI raises productivity and firms need fewer workers, rate cuts meant to support employment may instead accelerate layoffs." },
        { title: "Long-End Structural Pressure", desc: "China reducing Treasury holdings, Japan facing demographic selling pressure, OBBB adding $3T in unfunded deficits." },
        { title: "Inflation Stall", desc: "Core PCE stuck at 2.8% with structural drivers (AI capex, tight labor, fiscal expansion) unlikely to resolve in 2026." }
      ]
    }
  },
  {
    id: 4,
    title: "The Home Depot (HD) - Long Pitch",
    type: "Equity Research",
    date: "Sep 19, 2025",
    recommendation: "BUY",
    summary: "Developed 'Buy' recommendation centered on HD's professional contractor ('Pro') moat and earnings resilience from the 2025 Fed easing cycle.",
    tags: ["Equity", "Retail", "Cyclical"],
    projectLink: "https://drive.google.com/file/d/1SIZFOT_Gffy8bDCiKLn3qIHTXZvOv5iU/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "EQUITY RESEARCH",
      metrics: [
        { label: "MARKET CAP", value: "~$410B" },
        { label: "DIV YIELD", value: "2.23%" },
        { label: "RECOMMENDATION", value: "BUY" }
      ],
      overview: "Developed 'Buy' recommendation and 13-page pitch deck centered on HD's professional contractor ('Pro') moat and earnings resilience from the 2025 Fed easing cycle. Analyzed dominance in the fragmented home improvement market and the 'lock-in' effect of aging housing stock.",
      thesis: [
        { title: "Conquering the Pro Market", desc: "Consolidation creates an unrivaled B2B moat." },
        { title: "Weaponizing Scale", desc: "Massive scale and tech-driven efficiency create stable margins." },
        { title: "Asymmetric Bet", desc: "Expected 2025 rate cuts will unlock renovation demand." }
      ]
    }
  },
  {
    id: 5,
    title: "Poland: Europe's Growth Engine",
    type: "Case Study",
    date: "Oct 23, 2025",
    recommendation: "Structural Long",
    summary: "Identifies Poland as Europe's last structural expansion story. Thesis rests on EU-backed capital inflows and 'nearshoring' trends.",
    tags: ["EM Europe", "FDI", "Growth"],
    projectLink: "https://drive.google.com/file/d/14iVjafj1wyAtSAPzJObt--aHB23KLyae/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "CASE STUDY",
      metrics: [
        { label: "GDP GROWTH", value: "3.3-3.5%" },
        { label: "CREDIT RATING", value: "A-/A2" },
        { label: "INFLATION", value: "2.9%" }
      ],
      overview: "Published country analysis recommending Poland as Europe's highest-conviction growth story; accurately forecasted 3.3-3.5% 2025 GDP growth (Q3 actual: 3.8% YoY) and WIG20 +33% YTD return driven by EU funds and FDI inflows. Analyzed drivers including the 'China+1' manufacturing shift and NATO/EU institutional safety.",
      thesis: [
        { title: "Stability + Growth", desc: "Combines developed-market governance with emerging-market growth rates." },
        { title: "Capital Inflows", desc: "Largest beneficiary of EU Recovery Funds ($192B through 2027)." },
        { title: "Nearshoring Hub", desc: "Strategic beneficiary of supply chains moving closer to Western Europe." }
      ]
    }
  },
  {
    id: 6,
    title: "Macroeconomic Conditions & The Fed",
    type: "Economic Essay",
    date: "Sep 21, 2025",
    recommendation: "Bearish Steepener",
    summary: "Analysis of the Federal Reserve's shift from tightening to easing. Identifies risks in 'sticky' services inflation and labor market weakness.",
    tags: ["Monetary Policy", "Inflation", "Rates"],
    projectLink: "https://drive.google.com/file/d/1OttFGlGCwCzBYFfnW9KIUrKd39C_qF4e/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "ECONOMIC ESSAY",
      metrics: [
        { label: "TOPIC", value: "Monetary Policy" },
        { label: "FOCUS", value: "US Economy" },
        { label: "OUTLOOK", value: "Bearish Steepener" }
      ],
      overview: "Published macro research paper identifying aging East Asia (esp. Japan) as the key structural risk to long-end Treasury demand; accurately predicted resulting bear steepener and 40-60 bps rise in 10-year yields (realized Oct-Dec 2025). The essay also critiques the Fed's 'higher for longer' strategy and explores the tension between stabilizing prices and maximizing employment.",
      thesis: [
        { title: "Structural Risk", desc: "Aging East Asia populations reducing demand for long-end US Treasuries." },
        { title: "The Pivot", desc: "Fed was forced into course correction due to labor market cracks." },
        { title: "Yield Curve", desc: "Fiscal deficits and trade policy are exerting pressure on the long end of the curve." }
      ]
    }
  },
  {
    id: 7,
    title: "eBay (EBAY) Bond Recommendation",
    type: "Fixed Income",
    date: "Sep 24, 2025",
    recommendation: "Buy 6.3% 2032 Bond",
    summary: "Fixed income analysis recommending eBay's 2032 corporate bonds. The pitch highlights eBay's asset-light model which generates consistent free cash flow (~$2B/year).",
    tags: ["Tech", "Bonds"],
    projectLink: "https://drive.google.com/file/d/1CSSnnRQgAiIaO8flBBPs1NjD1-5BoeUu/view?usp=drive_link",
    linkLabel: "View Project PDF",
    modalData: {
      category: "FIXED INCOME",
      metrics: [
        { label: "COUPON", value: "6.3%" },
        { label: "MATURITY", value: "2032" },
        { label: "Z-SPREAD", value: "110 bps" }
      ],
      overview: "A fixed income analysis recommending eBay's 2032 corporate bonds. The pitch highlights eBay's asset-light model which generates consistent free cash flow (~$2B/year). The analysis contrasts eBay against weaker peers like Etsy, positioning the bond as a defensive yet high-yielding play in a shifting rate environment.",
      thesis: [
        { title: "Income Advantage", desc: "6.3% coupon offers strong current income vs peers." },
        { title: "Financial Strength", desc: "2.6x leverage and 9x interest coverage with ~$5B cash." },
        { title: "Fed Catalyst", desc: "7-year maturity benefits from expected yield curve normalization." }
      ]
    }
  }
];

const EXPERIENCE = [
  {
    company: 'Sodexo',
    location: 'Bethesda, MD',
    role: 'Strategic Initiatives Analyst Intern',
    dates: 'June 2026 – Present',
    points: [
      'Built scenario-based restructuring models across 1,600+ employees and 200+ workforce actions, identifying $8M+ in annualized cost savings.',
      'Built a North American workforce dashboard and presented findings to the Head of HR, North America.',
      "Presented an enterprise LLM and agentic AI roadmap to Sodexo Canada's CFO."
    ]
  },
  {
    company: 'BASIS',
    fullName: 'Bond And Securities Investing by Students',
    location: 'Virginia Tech',
    role: 'Junior Fixed Income Analyst, TMT & Consumer Coverage',
    dates: 'March 2026 – Present',
    points: [
      'Student-run team managing a $5MM fixed income portfolio within the Virginia Tech Foundation endowment.',
      'Monitor $100K+ in holdings and present weekly macro, rates, and credit views, including U.S. Treasury curve positioning.',
      'Evaluate TMT and consumer issuers.'
    ]
  },
  {
    company: 'Papinee',
    location: 'Remote',
    role: 'Finance & Strategy Intern',
    dates: 'June 2025 – September 2025',
    points: [
      'Modeled unit economics and built pricing and go-to-market plans for a Southeast Asian DTC launch, generating 250+ early signups and supporting a $150K pre-seed raise.'
    ]
  }
];

const FILTERS = ['All', 'Equity', 'Credit', 'Macro', 'Emerging Markets'];

function matchesFilter(project, filter) {
  if (filter === 'All') return true;
  if (filter === 'Credit') return project.type === 'Fixed Income';
  if (filter === 'Macro') return project.type === 'Economic Essay' || project.tags.includes('Macro');
  if (filter === 'Emerging Markets') return project.type === 'Case Study';
  return project.type?.includes(filter) || project.tags.includes(filter);
}

function initialTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved === 'dark';
  } catch { /* Default to light mode when storage is unavailable. */ }
  return false;
}

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
        }
      }}
    >
      <div className="dialog-heading">
        <div>
          <p className="eyebrow">{project.modalData.category}</p>
          <h2 id="project-title">{project.title}</h2>
          <p className="muted">Analysis date: {project.date}</p>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close research details" autoFocus><X size={20} /></button>
      </div>
      <div className="dialog-content">
        <dl className="metrics">
          {project.modalData.metrics.map((metric) => (
            <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
          ))}
        </dl>
        <h3>Overview</h3>
        <p>{project.modalData.overview}</p>
        <h3>Investment thesis</h3>
        <ol className="thesis-list">
          {project.modalData.thesis.map((point) => (
            <li key={point.title}><h4>{point.title}</h4><p>{point.desc}</p></li>
          ))}
        </ol>
        <a className="button button-primary" href={project.projectLink} target="_blank" rel="noopener noreferrer">
          {project.linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </dialog>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#15191e' : '#faf9f6');
    try {
      localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    } catch { /* The theme still works when storage is unavailable. */ }
  }, [darkMode]);

  const featuredProjects = FEATURED_PROJECTS.filter((project) => matchesFilter(project, filter));
  const archiveProjects = INITIAL_PROJECTS.filter((project) => project.id !== 1 && matchesFilter(project, filter));

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-layout">
          <a href="#home" className="wordmark" aria-label="Shubham Agarwal, home">SA<span>.</span></a>
          <nav aria-label="Main navigation">
            {['About', 'Experience', 'Research', 'Contact'].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>
            ))}
          </nav>
          <button className="icon-button theme-toggle" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} aria-pressed={darkMode} onClick={() => setDarkMode((previous) => !previous)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Finance & Investment Management</p>
            <h1 id="hero-title">Shubham<br />Agarwal<span>.</span></h1>
            <p className="positioning">Finance student focused on markets, credit, and macro research</p>
            <p className="hero-school">Virginia Tech <span aria-hidden="true">/</span> Pamplin College of Business</p>
            <div className="hero-actions">
              <a className="button button-primary" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="button button-secondary" href={`mailto:${EMAIL}`}><Mail size={17} aria-hidden="true" /> Email me</a>
            </div>
            <a className="text-link explore-link" href="#research">Explore my research <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
          <figure className="portrait">
            <img src="/profile.jpg" alt="Shubham Agarwal" width="800" height="800" fetchPriority="high" decoding="async" />
            <figcaption>Virginia Tech <span>Expected 2028</span></figcaption>
          </figure>
        </section>

        <section id="about" className="section section-tinted" aria-labelledby="about-title">
          <div className="container section-grid">
            <div className="section-heading"><p className="eyebrow">01 / Background</p><h2 id="about-title">About</h2></div>
            <div className="about-content">
              <p className="intro">I study finance at Virginia Tech, with a focus on markets, credit, and macro research.</p>
              <p className="muted about-description">I’m pursuing internships in sales & trading, credit and fixed income, macro, and equity research. My experience spans corporate strategy, fixed income investing, and finance.</p>
              <div className="education">
                <p className="eyebrow">Education</p>
                <h3>Virginia Tech</h3>
                <p className="muted">Pamplin College of Business</p>
                <p className="degree">B.S. in Finance (CFA & Investment Management)</p>
                <p className="muted">Minors in Philosophy, Politics, Economics & International Relations</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="container section-grid">
            <div className="section-heading"><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Experience</h2></div>
            <div>
              <div className="experience-list">
                {EXPERIENCE.map((job) => (
                  <article className="experience-item" key={job.company}>
                    <div className="experience-meta"><h3>{job.company}</h3><p>{job.dates}</p></div>
                    {job.fullName && <p className="company-expansion">{job.fullName}</p>}
                    <p className="role">{job.role}</p>
                    <p className="location">{job.location}</p>
                    <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                ))}
              </div>
              <div className="leadership">
                <h3 className="eyebrow">Leadership</h3>
                <article><div className="experience-meta"><h4>Virginia Tech Finance Club</h4><p>April 2026 – Present</p></div><p className="muted">Lead Analyst, Equities</p></article>
                <article><div className="experience-meta"><h4>Delta Sigma Pi</h4><p>March 2026 – Present</p></div><p className="muted">Fundraising, Culture & Public Relations Committee Advisor</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section section-tinted" aria-labelledby="research-title">
          <div className="container">
            <div className="research-heading">
              <div className="section-heading"><p className="eyebrow">03 / Selected work</p><h2 id="research-title">Research</h2></div>
              <p className="muted">Investment pitches, market notes,<br className="desktop-break" /> and applied research tools.</p>
            </div>
            <div className="filters" role="group" aria-label="Filter research by focus">
              {FILTERS.map((type) => <button key={type} aria-pressed={filter === type} className={filter === type ? 'filter active' : 'filter'} onClick={() => setFilter(type)}>{type}</button>)}
            </div>
            <div aria-live="polite" aria-atomic="true" className="sr-only">Showing {featuredProjects.length + archiveProjects.length} research projects for {filter}.</div>
            {featuredProjects.length > 0 && <div className="featured-grid">
              {featuredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="featured-card" key={project.title}>
                    <div className="card-meta"><span className="eyebrow"><Icon size={16} aria-hidden="true" />{project.eyebrow}</span><span>{project.date}</span></div>
                    <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                    <p>{project.summary}</p>
                    <ul className="tags" aria-label="Research topics">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <div className="card-actions">
                      <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.ctaLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
                      {project.href === HIMS_PITCH_URL && <button className="text-link" onClick={() => setSelectedProject(INITIAL_PROJECTS[0])} aria-label="Read HIMS analysis details">Read analysis</button>}
                    </div>
                  </article>
                );
              })}
            </div>}
            {archiveProjects.length > 0 && <div className="research-list">
              {archiveProjects.map((project) => (
                <article className="research-row" key={project.id}>
                  <div className="research-meta"><span className="eyebrow">{project.type}</span><span>{project.date}</span></div>
                  <div className="research-body">
                    <h3><button onClick={() => setSelectedProject(project)}>{project.title}<ArrowUpRight size={20} aria-hidden="true" /></button></h3>
                    <p className="muted">{project.summary}</p>
                    <ul className="tags" aria-label="Research topics">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <div className="row-actions"><button className="text-link" onClick={() => setSelectedProject(project)} aria-label={`Read analysis: ${project.title}`}>Read analysis</button><a className="text-link" href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
                  </div>
                </article>
              ))}
            </div>}
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="container section-grid">
            <div className="section-heading"><p className="eyebrow">04 / Get in touch</p><h2 id="contact-title">Contact</h2></div>
            <div><p className="intro">Let’s connect.</p><p className="muted contact-description">For internship opportunities and conversations about markets, credit, or research.</p>
              <div className="contact-links"><a href={`mailto:${EMAIL}`}><Mail size={20} aria-hidden="true" /><span>{EMAIL}</span><ArrowUpRight size={19} aria-hidden="true" /></a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin size={20} aria-hidden="true" /><span>Connect on LinkedIn</span><ArrowUpRight size={19} aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-content"><p>© {new Date().getFullYear()} Shubham Agarwal</p><a href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
