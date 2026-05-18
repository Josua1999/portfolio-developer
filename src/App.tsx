/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import profileImg from "../bAKp8PPXXbJDTbMuqx4ta7RI1aS83j0dGtvWLS4r.png";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Award, 
  Code2, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Instagram,
  ChevronRight,
  ArrowRight,
  User
} from "lucide-react";

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle?: string, number: string }) => (
  <div className="mb-12 border-t border-ink/10 pt-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">{title}</h2>
    </div>
    {subtitle && <p className="font-mono text-sm text-ink-muted uppercase tracking-widest">{subtitle}</p>}
  </div>
);

const ExperienceItem = ({ role, company, period, description, points, links }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 mb-12 md:mb-16 last:mb-0"
  >
    <div className="flex flex-col">
      <span className="font-mono text-xs text-accent uppercase tracking-wider mb-1">{period}</span>
      <span className="font-display font-semibold text-ink group-hover:text-accent transition-colors duration-300">{company}</span>
    </div>
    <div className="flex flex-col">
      <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{role}</h3>
      <p className="text-ink-muted mb-4 max-w-2xl leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {points.map((pt: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 group/li">
            <span className="mt-2 h-px w-4 bg-accent/30 group-hover/li:w-6 transition-all duration-300" />
            <span className="text-sm text-ink-muted/80">{pt}</span>
          </li>
        ))}
      </ul>
      {links && (
        <div className="flex flex-wrap gap-4">
          {links.map((link: any, idx: number) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-ink transition-colors"
            >
              <ExternalLink size={14} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const SkillBadge = ({ label }: { label: string }) => (
  <div className="px-3 py-1 bg-ink/5 rounded-sm border border-ink/5 font-mono text-[10px] md:text-xs text-ink/80 hover:bg-ink hover:text-bg-paper transition-all duration-300 cursor-default">
    {label}
  </div>
);

export default function App() {
  const experiences = [
    {
      role: "Web & Application Developer (Independent)",
      company: "PT. Informatika Indonesia",
      period: "2025 – Present",
      description: "Working on both static and dynamic information systems with a focus on structured content hierarchy.",
      points: [
        "Responsive design implementation and cross-browser compatibility maintenance",
        "Frontend development using HTML, CSS, Tailwind CSS, and JavaScript",
        "Backend systems powered by PHP and Laravel",
        "Maintenance of visual consistency across large-scale assets"
      ],
      links: [{ label: "informatikaindonesia.com", url: "https://informatikaindonesia.com/" }]
    },
    {
      role: "Web & Application Developer (Independent)",
      company: "Sinergy News",
      period: "2024 – Present",
      description: "Active news portal development with complex article structures and high-performance management.",
      points: [
        "Implementation of URL routing and management of high-volume article data",
        "Optimization of performance for dynamic data fetching",
        "Development using Laravel, PHP, MySQL, and Tailwind CSS",
        "UI/UX consistency focus for an optimal reading experience"
      ],
      links: [{ label: "sinergynews.id", url: "https://sinergynews.id/" }]
    },
    {
      role: "Web Developer",
      company: "DEMSULUT",
      period: "2023 – Present",
      description: "Developing and maintaining organizational digital presence for profiling and documentation.",
      points: [
        "Building structured navigation and organized technical maintenance",
        "Regular content updates and technical performance monitoring",
        "Frontend build with Tailwind CSS and JavaScript",
        "Backend development leveraging the Laravel ecosystem"
      ],
      links: [{ label: "demsulut.org", url: "https://www.demsulut.org/" }]
    },
    {
      role: "Project Leader – Robot “Jason”",
      company: "Academic Project",
      period: "2023 – 2024",
      description: "Led the design and development of a guest-greeting robot ('Robot Penyambut Tamu').",
      points: [
        "Coordinated team efforts in concept design and system implementation",
        "Integrated hardware components with specialized software control systems",
        "Ensured project timelines and functional objectives were met",
        "Managed cross-disciplinary communication between mechanical and software teams"
      ],
      links: [{ label: "Project Media", url: "https://www.instagram.com/reel/DRRhX_qkSs6/" }]
    }
  ];

  const awards = [
    "Participant of PLN ICE 2021 – EURO AQUA: Electric Wheelchair Project",
    "Participant of KRI 2020 – Firefighting Robot Division (Wilayah II)",
    "Participant of KRI 2019 – Legged Firefighting Robot Division (Regional IV)",
    "Mechanic for KRSBI Beroda Team – National Level (2018)",
    "Mechanic for KRPAI Team – Regional II (2018)"
  ];

  return (
    <div className="min-h-screen Selection:bg-accentSelection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-ink/5 bg-bg-paper/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-display font-bold text-lg tracking-tighter">JS.</span>
            <div className="h-4 w-px bg-accent/30 mx-2" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted hidden sm:inline">Informatics Engineer</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-ink-muted">
            <a href="#about" className="hover:text-ink transition-colors">About</a>
            <a href="#work" className="hover:text-ink transition-colors">Work</a>
            <a href="#skills" className="hover:text-ink transition-colors">Stack</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
          </div>

        </div>
      </nav>

      <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-mono text-sm text-accent mb-6 block">KOTAMENARA, SOUTH MINAHASA</span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-12 uppercase text-balance">
              Building <br className="hidden md:block"/>
              Digital <span className="text-accent underline decoration-1 underline-offset-8">Frontiers.</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-center">
              <div>
                <p className="text-xl md:text-2xl text-ink font-light leading-relaxed max-w-3xl mb-8">
                  I am <span className="font-semibold">Josua Sondakh</span>, an Informatics graduate from 
                  Universitas Sam Ratulangi dedicated to creating high-performance web systems and robotic automation solutions. 
                  Full-stack expertise meets technical precision.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm text-ink-muted">
                     <div className="h-px w-12 bg-ink/10" />
                     <span className="font-mono uppercase tracking-widest text-[10px]">Connect / Contact</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="mailto:josuasondakh00@gmail.com" className="flex items-center gap-3 px-5 py-3 bg-ink text-bg-paper hover:bg-accent transition-all duration-300 group">
                      <Mail size={18} />
                      <span className="text-xs font-mono uppercase tracking-widest font-bold">Email Me</span>
                    </a>
                    <div className="flex gap-2">
                      <a href="https://linkedin.com/in/josua-sondakh" className="p-3 border border-ink/10 hover:border-ink transition-all duration-300">
                        <Linkedin size={18} />
                      </a>
                      <a href="https://instagram.com/josuasondakh_" className="p-3 border border-ink/10 hover:border-ink transition-all duration-300">
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="relative block mt-16 lg:mt-0 max-w-sm mx-auto lg:max-w-none"
              >
                <div className="absolute -inset-1 border border-accent/20 translate-x-4 translate-y-4 -z-10" />
                <div className="bg-[#EAEAEA] aspect-[4/5] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 group">
                  <img 
                    src={profileImg} 
                    alt="Josua Sondakh" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if the path is different
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('profile.png')) {
                        target.src = '/profile.png';
                      }
                    }}
                  />
                </div>
                <div className="absolute top-8 right-8 mix-blend-difference text-white">
                  <span className="font-mono text-[10px] tracking-[0.5em] vertical-rl h-32 uppercase">Josua Sondakh</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="work" className="mb-24 md:mb-48">
          <SectionHeader title="Experience" subtitle="Work History" number="01" />
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="mb-24 md:mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionHeader title="Education" number="02" />
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="border-l-2 border-accent/20 pl-8"
            >
              <h3 className="font-display text-2xl font-bold mb-2">B.S. Informatics Engineering</h3>
              <p className="font-display font-semibold mb-1">Universitas Sam Ratulangi, Manado</p>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">2017 – 2023 | GPA: 3.37 / 4.00</p>
              <div className="bg-ink/5 p-6 border border-ink/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3 italic">Final Thesis</h4>
                <p className="text-sm leading-relaxed text-ink/80 italic">
                  "Wall following Navigation System on UNSRAT Biomolecular Laboratory Sterilization Robot"
                </p>
              </div>
            </motion.div>
          </div>
          <div>
            <SectionHeader title="Credentials" number="03" />
            <div className="space-y-6">
              {[
                { title: "Office Administration Certificate", issuer: "Course-Net", score: "85" },
                { title: "Hadoop 101", issuer: "Cognitive Class (IBM)", score: "Certified" },
                { title: "Big Data 101", issuer: "Cognitive Class (IBM)", score: "Certified" },
              ].map((cert, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-ink/5 pb-4 group">
                  <div>
                    <h4 className="font-display font-medium group-hover:text-accent transition-colors">{cert.title}</h4>
                    <p className="text-xs text-ink-muted font-mono">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-accent">{cert.score}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 md:mb-48">
          <SectionHeader title="Technical Stack" subtitle="Competencies" number="04" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-accent" size={24} />
                <h3 className="font-display text-xl font-bold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "TypeScript", "PHP", "Laravel", "MySQL"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-accent" size={24} />
                <h3 className="font-display text-xl font-bold">Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Robotics", "Hardware Integration", "Software Control", "Electro-Pneumatic", "Project Leadership"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={24} />
                <h3 className="font-display text-xl font-bold">Other Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Big Data", "Hadoop", "UX Consistency", "Responsive Design", "Leadership"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="mb-24 md:mb-48">
          <SectionHeader title="Recognition" subtitle="Competitions" number="05" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 border border-ink/5 bg-ink/[0.02] flex items-start gap-4 group hover:bg-bg-paper hover:border-accent hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="p-3 bg-bg-paper text-accent">
                  <Award size={20} />
                </div>
                <p className="text-sm font-medium leading-relaxed">{award}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Organization */}
        <section className="mb-24 md:mb-48">
          <SectionHeader title="Society" subtitle="Organization" number="06" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { role: "Ketua", title: "Demsulut", year: "2022-2024" },
               { role: "Ketua", title: "Himpunan Teknik Elektro", year: "2020-2022" },
               { role: "Coordinator Wilayah", title: "Internet Sehat", year: "2021-2022" },
               { role: "Anggota", title: "UKM EURO Robotics", year: "2017-2023" },
             ].map((org, idx) => (
               <div key={idx} className="p-6 border border-ink/5 flex flex-col justify-between h-40 group hover:border-ink transition-all duration-300">
                 <div>
                   <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{org.role}</p>
                   <h4 className="font-display font-bold leading-tight group-hover:tracking-tight transition-all">{org.title}</h4>
                 </div>
                 <p className="font-mono text-[10px] text-ink-muted">{org.year}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-24 border-t border-ink/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to explore the <br/> next technical milestone?</h2>
              <div className="space-y-4">
                <a href="mailto:josuasondakh00@gmail.com" className="group flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-accent transition-colors">
                  josuasondakh00@gmail.com
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-2 text-ink-muted font-mono text-sm uppercase tracking-widest">
                  <Phone size={14} />
                  0858-2521-8247
                </div>
                <div className="flex items-center gap-2 text-ink-muted font-mono text-sm uppercase tracking-widest">
                  <MapPin size={14} />
                  KOTAMENARA, SOUTH MINAHASA
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end lg:items-end">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-mono uppercase tracking-widest">
                <a href="https://github.com/josuasondakh" className="hover:text-accent transition-colors">Github</a>
                <a href="https://linkedin.com/in/josua-sondakh" className="hover:text-accent transition-colors">Linkedin</a>
                <a href="https://instagram.com/josuasondakh_" className="hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent transition-colors">Behance</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-ink/5">
            <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em]">© 2026 Josua Sondakh — All Rights Reserved</p>
            <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.2em]">Designed with Precision</p>
          </div>
        </footer>
      </main>

      {/* Floating Bottom Nav for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden bg-bg-paper/85 backdrop-blur-lg border border-ink/10 px-6 py-3 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex gap-8 items-center">
        <a href="#about" className="flex flex-col items-center gap-1 text-ink-muted hover:text-accent transition-colors">
          <User size={18} />
          <span className="text-[9px] font-mono uppercase tracking-wider">About</span>
        </a>
        <a href="#work" className="flex flex-col items-center gap-1 text-ink-muted hover:text-accent transition-colors">
          <Briefcase size={18} />
          <span className="text-[9px] font-mono uppercase tracking-wider">Work</span>
        </a>
        <a href="#skills" className="flex flex-col items-center gap-1 text-ink-muted hover:text-accent transition-colors">
          <Code2 size={18} />
          <span className="text-[9px] font-mono uppercase tracking-wider">Stack</span>
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 text-ink-muted hover:text-accent transition-colors">
          <Mail size={18} />
          <span className="text-[9px] font-mono uppercase tracking-wider">Contact</span>
        </a>
      </div>
    </div>
  );
}
