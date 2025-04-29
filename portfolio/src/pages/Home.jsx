import ProjectCard from "../components/ProjectCard";
import profile from "../assets/profile.jpg";
import androidThumbnail from "../assets/androidThumbnail.png";
import cpuThumbnail from "../assets/cpuThumbnail.png";
import reactThumbnail from "../assets/reactThumbnail.png";

function Home() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <section className="py-5 text-center">
        <div className="d-flex justify-content-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <h1 className="mt-3 text-4xl font-bold text-crimson">Tyler Bibus</h1>
        <p className="font-mono">Computer Engineer | Iowa State University</p>
        <p className="mt-2">Graduating May 2027 | Honors Program</p>
      </section>
      <div className="container py-5">
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
      </div>
    </div>
  );
}

export default Home;
