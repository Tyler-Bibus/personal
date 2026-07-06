import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/profile.jpg";
import androidThumbnail from "../assets/androidThumbnail.png";
import cpuThumbnail from "../assets/cpuThumbnail.png";
import reactThumbnail from "../assets/reactThumbnail.png";
import iowaStateLogo from "../assets/iowaStateLogo.svg";
import llmThumbnail from "../assets/llmThumbnail.svg";
import mlAcceleratorThumbnail from "../assets/mlAcceleratorThumbnail.svg";
import seniorDesignThumbnail from "../assets/seniorDesignThumbnail.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const subtitleContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const subtitleWords = [
  "Computer Engineer",
  "·",
  "Hardware",
  "·",
  "Full-Stack",
  "·",
  "ML",
];

const skillCategories = [
  {
    label: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python", "Verilog", "VHDL", "MIPS Assembly"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["React", "Spring Boot", "Android Studio", "Docker", "Kubernetes", "TensorFlow", "CI/CD"],
  },
  {
    label: "Hardware",
    skills: ["FPGA", "VLSI", "ASIC", "SDR", "AutoCAD LT", "ModelSim", "LTSpice"],
  },
  {
    label: "Platforms",
    skills: ["Linux", "Git", "MongoDB", "Unity"],
  },
];

function Home() {
  return (
    <>
      <style>{`
        @keyframes heroGradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient {
          background: linear-gradient(135deg, #121212 0%, #1a1a2e 40%, #2a0a15 70%, #121212 100%);
          background-size: 300% 300%;
          animation: heroGradientShift 10s ease infinite;
        }
        .social-icon-link {
          color: #dc143c;
          transition: color 0.2s, transform 0.2s;
          display: inline-flex;
          align-items: center;
        }
        .social-icon-link:hover {
          color: #ff4d6d;
          transform: scale(1.15);
        }
        .skill-badge {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 999px;
          border: 1.5px solid #dc143c;
          background-color: #1a0a0f;
          color: #e8e8e8;
          font-size: 0.82rem;
          margin: 4px;
          letter-spacing: 0.02em;
        }
      `}</style>

      <motion.div
        className="text-white d-flex flex-column flex-grow-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Hero Section ─────────────────────────────────── */}
        <motion.section
          variants={itemVariants}
          className="hero-gradient py-5 text-center flex-grow-1"
          style={{ borderBottom: "1px solid #2a2a2a" }}
        >
          <div className="d-flex">
            <div className="mx-auto d-flex gap-1">
              <img
                src={profile}
                alt="Profile"
                className="img-thumbnail rounded-circle bg-dark border-0"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  marginTop: "75px",
                  boxShadow: "0 0 32px rgba(220,20,60,0.25)",
                }}
              />
            </div>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-crimson">Tyler Bibus</h1>

          {/* Animated subtitle */}
          <motion.div
            className="d-flex flex-wrap justify-content-center gap-1 mt-2"
            variants={subtitleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{
                  fontSize: "1.1rem",
                  color: word === "·" ? "#dc143c" : "#c8c8c8",
                  fontWeight: word === "·" ? "bold" : "500",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="mt-3">Graduating December 2026 - Iowa State University</p>
          <p className="mt-2">tylerbibus@hotmail.com | 651-210-1342</p>

          {/* Social icons */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://github.com/Tyler-Bibus"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/tyler-bibus-a63087248/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.section>

        <hr />

        {/* ── Career Objective ─────────────────────────────── */}
        <motion.div variants={itemVariants} className="container py-5">
          <h2 className="text-3xl font-bold text-center text-crimson mb-4">
            Career Objective
          </h2>
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <p className="text-gray-200 mb-3" style={{ lineHeight: "1.8" }}>
              I want to build technology that makes the world materially better — not just more convenient.
              My time at ARA Wireless showed me what that can look like in practice: writing C++ to squeeze
              48dB of extra signal out of a software-defined radio so that rural communities can access
              reliable high-speed internet for the first time. That kind of work — technically demanding and
              genuinely consequential — is what I want to spend my career doing.
            </p>
            <p className="text-gray-200 mb-3" style={{ lineHeight: "1.8" }}>
              This summer I'll be joining <span className="text-crimson font-semibold">BoiSei Labs</span>, a
              Tech for Good venture capital startup focused on environmentally sustainable technology. It's
              a natural fit for where I'm headed. Whether it's designing more energy-efficient AI hardware
              accelerators, building software systems that reduce waste, or applying machine learning to
              climate and resource problems, I'm drawn to work that sits at the intersection of technical
              depth and real-world impact.
            </p>
            <p className="text-gray-200" style={{ lineHeight: "1.8" }}>
              My goal is to be the kind of engineer who understands the full stack — from VLSI and FPGA
              design up through machine learning and systems software — so I can contribute meaningfully
              wherever the hardest problems are. I believe a higher standard of living for everyone and a
              lighter footprint on the planet aren't competing goals. The right technology can achieve both,
              and that's what I want to build.
            </p>
          </div>
        </motion.div>

        <hr />

        {/* ── Technical Skills ─────────────────────────────── */}
        <motion.div variants={itemVariants} className="container py-5">
          <h2 className="text-3xl font-bold text-center text-crimson mb-4">
            Technical Skills
          </h2>
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="row g-4">
              {skillCategories.map((category) => (
                <div key={category.label} className="col-12 col-md-6">
                  <p
                    className="text-crimson font-semibold mb-2"
                    style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                  >
                    {category.label}
                  </p>
                  <div>
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <hr />

        {/* ── Projects ─────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="container py-5">
          <h2 className="text-3xl font-bold text-center text-crimson mb-4">
            My Projects
          </h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="Goods and Service Finder App"
                description="Android app and Spring Boot backend, similar to Facebook Marketplace."
                link="/android-project"
                imageSrc={androidThumbnail}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="MIPS CPU Architecture Project"
                description="Designed 3 MIPS-based processors including pipelined architectures."
                link="/cpu-project"
                imageSrc={cpuThumbnail}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="Game Finder Web App"
                description="A React + Express based game catalog with login and quizzes."
                link="/web-design-projects"
                imageSrc={reactThumbnail}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="Discord LLM Bot"
                description="Using a local LLM I created a bot using discord APIs to communicate with users."
                link="/llm-chat-bot"
                imageSrc={llmThumbnail}
                imageFit="contain"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="ML Hardware Accelerator"
                description="Designed and implemented a hardware accelerator for an image classification model."
                link="/ml-accelerator"
                imageSrc={mlAcceleratorThumbnail}
                imageFit="contain"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <ProjectCard
                title="Senior Design Project"
                description="Worked with client and advisor to develop an open source ASIC Bluetooth microcontroller"
                link="/senior-design"
                imageSrc={seniorDesignThumbnail}
                imageFit="contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
