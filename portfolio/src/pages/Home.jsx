import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/profile.jpg";
import androidThumbnail from "../assets/androidThumbnail.png";
import cpuThumbnail from "../assets/cpuThumbnail.png";
import reactThumbnail from "../assets/reactThumbnail.png";
import iowaStateLogo from "../assets/iowaStateLogo.svg";
import computerIcon from "../assets/computer-icon.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

function Home() {
  return (
    <motion.div
      className=" text-white d-flex flex-column flex-grow-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={itemVariants}
        className="py-5 text-center flex-grow-1"
      >
        <div className="d-flex">
          {/**<div className="mx-auto d-flex gap-1">
            <img
            src={iowaStateLogo}
            alt="Iowa State University Logo"
            className="img-thumbnail bg-dark border-0"
            style={{ width: "400px", height: "400px", objectFit: "", marginLeft: "200px" }}
          />
          </div>**/}
          <div className="mx-auto d-flex gap-1 ">
            <img
              src={profile}
              alt="Profile"
              className="img-thumbnail rounded-circle bg-dark border-0"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                marginTop: "75px",
              }}
            />
          </div>
          {/**}<div className="mx-auto d-flex gap-1">
            <img
            src={iowaStateLogo}
            alt="Iowa State University Logo"
            className="img-thumbnail bg-dark border-0"
            style={{ width: "400px", height: "400px", objectFit: "", marginRight: "200px" }}
          />
          </div>**/}
        </div>
        <h1 className="mt-4 text-4xl font-bold text-crimson">Tyler Bibus</h1>
        <h3 className="font-bold">Computer Engineer</h3>
        <p className="mt-3">Graduating December 2026 - Iowa State University</p>
        <p className="mt-2">tylerbibus@hotmail.com | 651-210-1342</p>
      </motion.section>
      <hr />
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
              imageSrc={computerIcon}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ProjectCard
              title="ML Hardware Accelerator"
              description="Designed and implemented a hardware accelerator for an image classification model."
              link="/ml-accelerator"
              imageSrc={computerIcon}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ProjectCard
              title="Senior Design Project"
              description="Worked with client and advisor to devlop an open source ASIC Bluetooth microcontroller"
              link="/senior-design"
              imageSrc={computerIcon}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
