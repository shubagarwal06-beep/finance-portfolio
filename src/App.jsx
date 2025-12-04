import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Globe, 
  Briefcase, 
  DollarSign, 
  BarChart3, 
  ArrowUpRight,
  X,
  Download,
  Mail,
  Linkedin,
  Cpu,
  MessageSquare,
  Lightbulb,
  ChevronRight,
  PieChart,
  Lock,
  Moon,
  Sun,
  FileText
} from 'lucide-react';

// --- CONFIGURATION AND PDF LINKS ---
const LINKEDIN_URL = "https://www.linkedin.com/in/shubham-agarwal-45542b328/";
// IMPORTANT: Replace these placeholders with your actual public Google Drive PDF links.
// Using `https://docs.google.com/viewer?url=...` is best for viewing PDFs in-browser.
const RESUME_LINK = "https://drive.google.com/file/d/1ajo9k9n_IW1sXD8SHqf2ttTA0SEXUjOI/view?usp=drive_link"; 

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "eBay (EBAY) Bond Recommendation",
    type: "Fixed Income",
    date: "Sep 24, 2025",
    recommendation: "Buy 6.3% 2032 Bond",
    summary: "Fixed income analysis recommending eBay's 2032 corporate bonds. The pitch highlights eBay's asset-light model which generates consistent free cash flow (~$2B/year).",
    tags: ["High Yield", "Tech", "Bonds"],
    pdfLink: "https://drive.google.com/file/d/1CSSnnRQgAiIaO8flBBPs1NjD1-5BoeUu/view?usp=drive_link", 
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
  },
  {
    id: 2,
    title: "The Home Depot (HD) - Long Pitch",
    type: "Equity Research",
    date: "Sep 19, 2025",
    recommendation: "BUY",
    summary: "Developed 'Buy' recommendation centered on HD's professional contractor ('Pro') moat and earnings resilience from the 2025 Fed easing cycle.",
    tags: ["Equity", "Retail", "Cyclical"],
    pdfLink: "https://drive.google.com/file/d/1SIZFOT_Gffy8bDCiKLn3qIHTXZvOv5iU/view?usp=drive_link", 
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
    id: 3,
    title: "Macroeconomic Conditions & The Fed",
    type: "Economic Essay",
    date: "Sep 21, 2025",
    recommendation: "Bearish Steepener",
    summary: "Analysis of the Federal Reserve's shift from tightening to easing. Identifies risks in 'sticky' services inflation and labor market weakness.",
    tags: ["Monetary Policy", "Inflation", "Rates"],
    pdfLink: "https://drive.google.com/file/d/1OttFGlGCwCzBYFfnW9KIUrKd39C_qF4e/view?usp=drive_link", 
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
    id: 4,
    title: "Poland: Europe's Growth Engine",
    type: "Case Study",
    date: "Oct 23, 2025",
    recommendation: "Structural Long",
    summary: "Identifies Poland as Europe's last structural expansion story. Thesis rests on EU-backed capital inflows and 'nearshoring' trends.",
    tags: ["EM Europe", "FDI", "Growth"],
    pdfLink: "https://drive.google.com/file/d/14iVjafj1wyAtSAPzJObt--aHB23KLyae/view?usp=drive_link", 
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
  }
];

const Portfolio = () => {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [newProject, setNewProject] = useState({
    title: '',
    type: 'Equity',
    date: '',
    recommendation: '',
    summary: '',
    tags: '',
    pdfLink: '#',
    modalData: {
        category: "NEW ANALYSIS",
        metrics: [
            { label: "METRIC 1", value: "TBD" },
            { label: "METRIC 2", value: "TBD" },
            { label: "STATUS", value: "Draft" }
        ],
        overview: "Project details to be added...",
        thesis: [
            { title: "Thesis Point 1", desc: "Description..." },
            { title: "Thesis Point 2", desc: "Description..." },
            { title: "Thesis Point 3", desc: "Description..." }
        ]
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectToAdd = {
      id: projects.length + 1,
      ...newProject,
      tags: newProject.tags.split(',').map(tag => tag.trim())
    };
    setProjects([projectToAdd, ...projects]);
    setIsFormOpen(false);
    setNewProject({ title: '', type: 'Equity', date: '', recommendation: '', summary: '', tags: '', pdfLink: '#', modalData: newProject.modalData });
  };

  const filteredProjects = projects.filter(project => {
    return filter === 'All' || project.type.includes(filter) || (filter === 'Credit' && project.type === 'Fixed Income') || (filter === 'Macro' && project.type === 'Economic Essay') || (filter === 'Emerging Markets' && project.type === 'Case Study');
  });

  // Helper function for the Resume link logic
  const handleResumeClick = () => {
    // Open the PDF directly in a new tab using the public Google Viewer method
    window.open(RESUME_LINK, '_blank'); 
  };
  
  return (
    <div className={`min-h-screen transition-colors duration-300 font-serif ${darkMode ? 'bg-black text-gray-100' : 'bg-white text-neutral-900'}`}>
      
      {/* Navigation / Header */}
      <header className={`border-b sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-black/90 border-white/20' : 'bg-white/95 border-neutral-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2.5 rounded-lg shadow-lg ${darkMode ? 'bg-white' : 'bg-neutral-900'}`}>
              <PieChart className={`w-6 h-6 ${darkMode ? 'text-black' : 'text-white'}`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Shubham Agarwal</h1>
              <p className={`text-[11px] font-bold uppercase tracking-widest mt-0.5 ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Finance Portfolio</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-10">
              {['About', 'Portfolio', 'Resume', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`text-sm font-semibold transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-blue-700'}`}
                >
                  {item === 'Portfolio' ? 'Research' : item}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors border ${darkMode ? 'bg-black border-white/20 text-white hover:bg-white/10' : 'bg-neutral-100 border-transparent text-neutral-600 hover:bg-neutral-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`border-b relative overflow-hidden transition-colors duration-300 ${darkMode ? 'border-white/20' : 'border-neutral-100'}`}>
        <div className="max-w-6xl mx-auto px-4 py-28 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-none">
              Analyzing Markets,<br/>
              <span className={`${darkMode ? 'text-white border-b-4 border-white' : 'text-blue-700'}`}>Uncovering Value.</span>
            </h2>
            <p className={`text-2xl leading-relaxed mb-12 max-w-2xl ${darkMode ? 'text-gray-400 font-light' : 'text-neutral-500 font-light'}`}>
              Bridging macroeconomic analysis with fundamental equity and credit research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className={`flex items-center px-8 py-4 rounded-xl font-medium transition-all text-lg ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20'}`}>
                View Analysis <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - With Photo (Header Centered) */}
      <section id="about" className={`py-24 border-b transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-neutral-50 border-neutral-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FIX: Centered Header */}
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Profile Photo */}
            <div className="md:w-1/3 flex justify-center">
              <div className={`relative w-72 h-72 rounded-full overflow-hidden border-8 shadow-2xl ${darkMode ? 'border-neutral-800' : 'border-white'}`}>
                <img 
                  src="/profile.jpg" 
                  alt="Shubham Agarwal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className={`md:w-2/3 prose prose-lg leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
              <p className="mb-6">
                My interest in markets began at fifteen during the GameStop short squeeze, when I saw how psychology, incentives, and technology could move prices as much as fundamentals. That curiosity pushed me to start investing early, where I learned about risk, patience, and value creation firsthand.
              </p>
              <p className="mb-6">
                I now study Finance at <strong>Virginia Tech</strong> with minors in <em>Philosophy, Politics & Economics</em> and <em>International Relations</em>. My work focuses on equity and credit research, macroeconomic analysis, and understanding how political and economic systems shape outcomes.
              </p>
              <p className="mb-6">
                I enjoy breaking complex ideas into clear insights and connecting company narratives to broader market forces.
              </p>
              <p>
                I'm drawn to roles where I can think analytically, work with data, and contribute to decisions that have real-world impact across industries and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className={`py-24 border-b transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-white border-neutral-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-3">Featured Research</h3>
              <p className={`font-light ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Selected investment pitches and market notes.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className={`p-1.5 rounded-xl mt-6 md:mt-0 overflow-x-auto border transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-neutral-50 border-neutral-100'}`}>
              {['All', 'Equity', 'Credit', 'Macro', 'Emerging Markets'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                    filter === type 
                      ? (darkMode ? 'bg-white text-black shadow-sm' : 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5')
                      : (darkMode ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900')
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col overflow-hidden relative ${
                  darkMode 
                    ? 'bg-black border-white/20 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
                    : 'bg-white border-neutral-200 hover:border-blue-200 hover:shadow-2xl'
                }`}
              >
                <div className="p-10 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-white text-black' : 'bg-blue-50 text-blue-600'}`}>
                       {project.type === 'Fixed Income' ? <DollarSign className="w-6 h-6" /> : 
                        project.type === 'Economic Essay' ? <BarChart3 className="w-6 h-6" /> :
                        project.type === 'Case Study' ? <Globe className="w-6 h-6" /> :
                        <TrendingUp className="w-6 h-6" />}
                    </div>
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`}>{project.date}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-colors leading-tight ${darkMode ? 'text-white group-hover:underline decoration-1 underline-offset-4' : 'text-neutral-900 group-hover:text-blue-700'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-8 font-light ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`px-3 py-1 text-xs font-semibold rounded-md ${darkMode ? 'bg-white text-black' : 'bg-neutral-100 text-neutral-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Changed onClick to open the modal (which has the PDF button inside) */}
                <div className={`px-10 py-5 border-t flex items-center font-semibold text-sm ${darkMode ? 'border-white/20 text-white' : 'border-neutral-50 text-blue-600'}`}>
                   View Analysis <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL Resume Section */}
      <section id="resume" className={`py-24 border-b transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-white border-neutral-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-20">
            <h3 className="text-4xl font-bold">Resume</h3>
            {/* RESUME LINK: Opens PDF in new tab */}
            <button 
                onClick={handleResumeClick} 
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors shadow-lg ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
            >
                View PDF <FileText className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="space-y-20">
            
            {/* Education */}
            <div className={`border-l-2 pl-10 space-y-12 ${darkMode ? 'border-white/20' : 'border-neutral-100'}`}>
               <div className="relative">
                 <span className={`absolute -left-[45px] top-1 h-5 w-5 rounded-full border-4 ${darkMode ? 'bg-black border-white' : 'bg-neutral-200 border-white'}`}></span>
                 <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Education</h4>
                 
                 <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-xl font-bold">Virginia Polytechnic Institute and State University (Virginia Tech)</h5>
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Expected: May 2028</span>
                    </div>
                    <div className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-neutral-800'}`}>Pamplin College of Business</div>
                    <div className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-blue-700'}`}>B.S. in Finance (CFA & Investment Management)</div>
                    <div className={`text-sm italic mb-2 ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>Minors: Philosophy, Politics, and Economics & International Relations</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}><span className="font-semibold">GPA:</span> 3.5/4.00 | Dean's List (F24)</div>
                 </div>
               </div>
            </div>

            {/* Professional Experience */}
            <div className={`border-l-2 pl-10 space-y-12 ${darkMode ? 'border-white/20' : 'border-neutral-100'}`}>
               <div className="relative">
                 <span className={`absolute -left-[45px] top-1 h-5 w-5 rounded-full border-4 ${darkMode ? 'bg-white border-black' : 'bg-blue-600 border-white'}`}></span>
                 <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Professional Experience</h4>
                 
                 {/* Job 1 */}
                 <div className="mb-12">
                    <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-xl font-bold">Ravld</h5>
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Sep 2025 - Present</span>
                    </div>
                    <div className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Founder and CEO | Blacksburg, Virginia</div>
                    <ul className={`list-disc list-outside text-sm space-y-3 ml-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                        <li>Conducted 50+ surveys to validate demand, pricing, and design preferences for a Gen Z streetwear brand.</li>
                        <li>Built brand identity, product mockups, and the initial website framework to prepare for pre-launch testing.</li>
                        <li>Outlined a phased product roadmap and go-to-market strategy focused on niche positioning and community growth.</li>
                    </ul>
                 </div>

                 {/* Job 2 */}
                 <div>
                    <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-xl font-bold">Papinee</h5>
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>June 2025 - Sep 2025</span>
                    </div>
                    <div className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Finance and Strategy Intern | Remote</div>
                    <ul className={`list-disc list-outside text-sm space-y-3 ml-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                        <li>Secured $150K in pre-seed funding by shaping the MVP, demonstrating cost efficiencies, launch profitability, and a clear path to scalable growth.</li>
                        <li>Worked with CEO on shifting from B2B to B2C, analyzing products and packaging to plan a 300-unit first release.</li>
                        <li>Devised a three-stage GTM strategy, defining milestones and KPIs to align product launch, marketing execution, and long-term growth objectives into a cohesive roadmap, growing an early community of 250+ signups.</li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* Leadership */}
            <div className={`border-l-2 pl-10 space-y-12 ${darkMode ? 'border-white/20' : 'border-neutral-100'}`}>
               <div className="relative">
                 <span className={`absolute -left-[45px] top-1 h-5 w-5 rounded-full border-4 ${darkMode ? 'bg-black border-white' : 'bg-neutral-200 border-white'}`}></span>
                 <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Leadership & Experiential Learning</h4>
                 
                 <div className="space-y-10">
                     {/* Finance Club */}
                     <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <h5 className="text-lg font-bold">Finance Club</h5>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Aug 2025 - Present</span>
                        </div>
                        <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Lead Analyst, Markets Team</div>
                        <ul className={`list-disc list-outside text-sm space-y-2 ml-4 ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                            <li>Led weekly macro and sector discussions for ~20 analysts; prepared market briefs on rates, equities, and credit.</li>
                            <li>Tracked Fed policy, inflation prints, and yield curve movements to inform club-wide outlook.</li>
                            <li>Mentored new analysts on research process, data sourcing, and structuring investment theses.</li>
                        </ul>
                     </div>

                     {/* Delta Sigma Pi */}
                     <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <h5 className="text-lg font-bold">Delta Sigma Pi</h5>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Aug 2025 - Present</span>
                        </div>
                        <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Fundraising, Culture, and Public Relations Committee Advisor</div>
                        <ul className={`list-disc list-outside text-sm space-y-2 ml-4 ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                            <li>Launched the chapter's first Alumni Board with VP of Public Relations and coordinated outreach to 550+ alumni.</li>
                            <li>Supported fundraising strategy by identifying targets and planning events that increased participation.</li>
                        </ul>
                     </div>

                     {/* Rhizome */}
                     <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <h5 className="text-lg font-bold">Rhizome Living Learning Community</h5>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Aug 2024 - May 2025</span>
                        </div>
                        <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Freshman Community Leader</div>
                        <ul className={`list-disc list-outside text-sm space-y-2 ml-4 ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                            <li>Organized recycling drives and energy-saving challenges, raising dorm recycling rates by 20%.</li>
                            <li>Built a week-long sustainability curriculum for elementary students.</li>
                        </ul>
                     </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section - Moved to Bottom */}
      <section className={`py-24 border-b transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-neutral-50 border-neutral-100'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-2xl font-bold mb-12 text-center">Skills & Competencies</h3>
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Analysis */}
              <div>
                <div className={`flex items-center mb-4 text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-blue-700'}`}>
                  <BarChart3 className="w-4 h-4 mr-2" /> Analysis
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
  'Equity Research',
  'Credit Research',
  'Macro Analysis',
  'Geopolitical Risk',
  'Industry Analysis',
  'Insight Generation',
  'FRED',
  'IMF',
  'World Bank',
  'Google Scholar'
].map(skill => (
                    <span key={skill} className={`text-xs px-3.5 py-2 rounded-md font-medium border shadow-sm transition-colors ${darkMode ? 'bg-black text-white border-white' : 'bg-white text-blue-800 border-blue-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Strategy */}
              <div>
                <div className={`flex items-center mb-4 text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-amber-700'}`}>
                  <Lightbulb className="w-4 h-4 mr-2" /> Strategy
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Analytical Reasoning', 'Problem Structuring', 'Connecting Micro to Macro', 'Decision Frameworks'].map(skill => (
                    <span key={skill} className={`text-xs px-3.5 py-2 rounded-md font-medium border shadow-sm transition-colors ${darkMode ? 'bg-black text-white border-white' : 'bg-white text-amber-800 border-amber-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Communication */}
              <div>
                <div className={`flex items-center mb-4 text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-purple-700'}`}>
                  <MessageSquare className="w-4 h-4 mr-2" /> Communication
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Analytical Writing', 'Presentation Building', 'Thesis Development', 'Business Communication'].map(skill => (
                    <span key={skill} className={`text-xs px-3.5 py-2 rounded-md font-medium border shadow-sm transition-colors ${darkMode ? 'bg-black text-white border-white' : 'bg-white text-purple-800 border-purple-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className={`flex items-center mb-4 text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-emerald-700'}`}>
                  <Cpu className="w-4 h-4 mr-2" /> Tools
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
  'Excel',
  'PowerPoint',
  'Bloomberg',
  'Python',
  'Adobe Suite',
  'Google Suite'
]
.map(skill => (
                    <span key={skill} className={`text-xs px-3.5 py-2 rounded-md font-medium border shadow-sm transition-colors ${darkMode ? 'bg-black text-white border-white' : 'bg-white text-emerald-800 border-emerald-100'}`}>{skill}</span>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className={`py-24 border-t transition-colors duration-300 ${darkMode ? 'bg-black border-white/20' : 'bg-white border-neutral-100'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold">Get In Touch</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <a href="mailto:shubh4m@vt.edu" className={`group p-10 rounded-2xl border shadow-sm transition-all duration-300 flex flex-col items-center text-center ${darkMode ? 'bg-black border-white/20 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'bg-neutral-50 border-neutral-200 hover:shadow-xl hover:-translate-y-1'}`}>
               <div className={`p-4 rounded-full mb-6 transition-colors duration-300 shadow-sm ${darkMode ? 'bg-white text-black' : 'bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                 <Mail className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold mb-2">Email Me</h4>
               <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>shubh4m@vt.edu</span>
            </a>

            {/* LinkedIn Card */}
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={`group p-10 rounded-2xl border shadow-sm transition-all duration-300 flex flex-col items-center text-center ${darkMode ? 'bg-black border-white/20 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'bg-neutral-50 border-neutral-200 hover:shadow-xl hover:-translate-y-1'}`}>
               <div className={`p-4 rounded-full mb-6 transition-colors duration-300 shadow-sm ${darkMode ? 'bg-white text-black' : 'bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                 <Linkedin className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold mb-2">LinkedIn</h4>
               <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - With Discreet Admin Button */}
      <footer className={`py-12 border-t transition-colors duration-300 ${darkMode ? 'bg-black border-white/20 text-gray-500' : 'bg-neutral-900 text-neutral-400 border-neutral-800'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Shubham Agarwal. All rights reserved.</p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
             {/* Discreet Admin Button - Just a lock icon in the footer */}
             <button 
                onClick={() => setIsFormOpen(true)}
                className={`transition-colors p-2 ${darkMode ? 'text-gray-600 hover:text-white' : 'text-neutral-600 hover:text-neutral-300'}`}
                title="Add Project (Private)"
             >
                <Lock className="w-4 h-4" />
             </button>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200 ${darkMode ? 'bg-black border border-white/20' : 'bg-white'}`}>
            {/* Header */}
            <div
  className={`px-5 py-4 sm:p-6 md:p-8 border-b flex justify-between items-start sticky top-0 z-10 ${
    darkMode ? 'bg-black border-white/20' : 'bg-white border-neutral-100'
  }`}
>
  <div className="max-w-[85%]">
    <span
      className={`font-bold text-xs uppercase tracking-widest mb-2 block ${
        darkMode ? 'text-white' : 'text-blue-600'
      }`}
    >
      {selectedProject.modalData.category}
    </span>

    <h2
      className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug break-words"
    >
      {selectedProject.title}
    </h2>
  </div>

  <button
    onClick={() => setSelectedProject(null)}
    className={`p-2 rounded-full transition-colors ${
      darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-400'
    }`}
  >
    <X className="w-5 h-5" />
  </button>
</div>


            <div className="p-8">
                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    {selectedProject.modalData.metrics.map((m, i) => (
                        <div key={i} className={`p-4 rounded-lg text-center border ${darkMode ? 'bg-black border-white/20' : 'bg-neutral-50 border-neutral-100'}`}>
                            <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`}>{m.label}</div>
                            <div className="text-lg font-bold">{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Overview */}
                <div className="mb-10">
                    <div className="flex items-center mb-4">
                        <Briefcase className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`} />
                        <h4 className="text-lg font-bold">Overview</h4>
                    </div>
                    <p className={`leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                        {selectedProject.modalData.overview}
                    </p>
                </div>

                {/* Investment Thesis */}
                <div>
                    <div className="flex items-center mb-6">
                        <TrendingUp className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`} />
                        <h4 className="text-lg font-bold">Investment Thesis</h4>
                    </div>
                    <div className="space-y-6">
                        {selectedProject.modalData.thesis.map((point, i) => (
                            <div key={i} className="flex">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm mr-4 mt-0.5 ${darkMode ? 'bg-white text-black' : 'bg-blue-50 text-blue-600'}`}>
                                    {i + 1}
                                </div>
                                <div>
                                    <span className="font-bold block mb-1">{point.title}</span>
                                    <span className={`font-light text-sm ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>{point.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODAL FOOTER: View Project PDF */}
            <div className={`p-6 border-t flex justify-between items-center sticky bottom-0 ${darkMode ? 'bg-black border-white/20' : 'bg-neutral-50 border-neutral-100'}`}>
                <div className={`text-sm italic ${darkMode ? 'text-gray-500' : 'text-neutral-400'}`}>Analysis Date: {selectedProject.date}</div>
                <a 
                    href={selectedProject.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`px-5 py-2.5 rounded-lg text-sm font-bold flex items-center transition-colors ${darkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-neutral-900 hover:bg-neutral-800 text-white'}`}
                >
                    View Project PDF <FileText className="w-4 h-4 ml-2" />
                </a>
            </div>
          </div>
        </div>
      )}

      {/* Add Project Form Modal (Functional for You) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-black border border-white/20' : 'bg-white'}`}>
             <div className={`flex justify-between items-center p-6 border-b ${darkMode ? 'border-white/20' : 'border-neutral-100'}`}>
              <h3 className="text-xl font-bold">Add New Project</h3>
              <button onClick={() => setIsFormOpen(false)} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <input type="text" name="title" required value={newProject.title} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-black border-white/20 text-white placeholder-gray-500 focus:border-white' : 'bg-white border-neutral-300 placeholder-neutral-400'}`} placeholder="Project Title" />
              <div className="grid grid-cols-2 gap-4">
                 <select name="type" value={newProject.type} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-black border-white/20 text-white focus:border-white' : 'bg-white border-neutral-300'}`}>
                    <option>Equity</option>
                    <option>Fixed Income</option>
                    <option>Economic Essay</option>
                    <option>Case Study</option>
                 </select>
                 <input type="date" name="date" required value={newProject.date} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-black border-white/20 text-white focus:border-white' : 'bg-white border-neutral-300'}`} />
              </div>
              <textarea name="summary" required rows="3" value={newProject.summary} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-black border-white/20 text-white placeholder-gray-500 focus:border-white' : 'bg-white border-neutral-300 placeholder-neutral-400'}`} placeholder="Summary..."></textarea>
              <input type="text" name="tags" value={newProject.tags} onChange={handleInputChange} className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-black border-white/20 text-white placeholder-gray-500 focus:border-white' : 'bg-white border-neutral-300 placeholder-neutral-400'}`} placeholder="Tags (comma separated)" />
              <button type="submit" className={`w-full py-3 rounded-lg font-bold transition-colors ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-neutral-900 hover:bg-neutral-800 text-white'}`}>Add to Portfolio</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;