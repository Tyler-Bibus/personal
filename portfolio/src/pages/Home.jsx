import { motion } from 'framer-motion';
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/profile.jpg";
import androidThumbnail from "../assets/androidThumbnail.png";
import cpuThumbnail from "../assets/cpuThumbnail.png";
import reactThumbnail from "../assets/reactThumbnail.png";
import iowaStateLogo from "../assets/iowaStateLogo.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function Home() {
  return (
    <motion.div className="bg-dark text-white d-flex flex-column flex-grow-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="py-5 text-center flex-grow-1">
        <div className="d-flex">
          <div className="mx-auto d-flex gap-1">
            <img
            src={iowaStateLogo}
            alt="Iowa State University Logo"
            className="img-thumbnail bg-dark border-0"
            style={{ width: "400px", height: "400px", objectFit: "", marginLeft: "200px" }}
          />
          </div>
          <div className="mx-auto d-flex gap-1 ">
          <img
            src={profile}
            alt="Profile"
            className="img-thumbnail rounded-circle bg-dark border-0"
            style={{ width: "250px", height: "250px", objectFit: "cover", marginTop: "75px" }}
          />
          </div>
                    <div className="mx-auto d-flex gap-1">
            <img
            src={iowaStateLogo}
            alt="Iowa State University Logo"
            className="img-thumbnail bg-dark border-0"
            style={{ width: "400px", height: "400px", objectFit: "", marginRight: "200px" }}
          />
          </div>
        </div>
        <h1 className="mt-3 text-4xl font-bold text-crimson">Tyler Bibus</h1>
        <h3 className="font-mono">Computer Engineer</h3>
        <p className="mt-2">Graduating December 2026 - Iowa State University</p>
      </motion.section>
      <hr/>
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
              description="Android app and Spring Boot backend, similar to Facebook Marketplace."
              link="/android-project"
              imageSrc={androidThumbnail}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ProjectCard
              title="AI Hardware Accelerator"
              description="Designed 3 MIPS-based processors including pipelined architectures."
              link="/cpu-project"
              imageSrc={cpuThumbnail}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
