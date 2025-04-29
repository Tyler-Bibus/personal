import experienceData from "../assets/experience.json";

function WorkExperience() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <div className="container mx-auto py-8 flex-grow">
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <hr></hr>
        {experienceData.map((experience, index) => (
          <div className="mb-8" key={index}>
            <h2 className="text-xl font-bold">
              {experience.title} – {experience.company}
            </h2>
            <p className="italic">
              {experience.date} | {experience.location}
            </p>
            <p>{experience.description}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
