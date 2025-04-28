function WebDesignProjects() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-4xl font-bold mb-6">Game Finder Web App</h1>

        <p className="mb-4">
          This is a full-stack application developed using React, TailwindCSS,
          and Express.js.
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>✅ Users can register and log in/out securely.</li>
          <li>
            ✅ Buzzfeed-style quizzes help users find their ideal game genres.
          </li>
          <li>✅ Responsive design, mobile-first layout.</li>
        </ul>

        <p className="mb-4">
          I designed this project with user experience and responsiveness in
          mind, utilizing TailwindCSS for styling and Express.js for backend API
          routes.
        </p>
        <p className="italic text-gray-600">
          Stack: React, TailwindCSS, Express, Node.js, MongoDB
        </p>
      </div>
    </div>
  );
}

export default WebDesignProjects;
