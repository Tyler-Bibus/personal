import { motion } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function AndroidProject() {
  const images = [
    { src: '/personal/assets/309/ExampleListing.png', alt: 'Example Listing' },
    { src: '/personal/assets/309/loginScreen.png', alt: 'Login Screen' },
    { src: '/personal/assets/309/SignUpScreen.png', alt: 'Sign Up Screen' }
  ];

  return (
    <motion.div className="bg-dark text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-8 flex-grow" variants={itemVariants}>
        <br />
        <h1 className="text-3xl font-bold mb-4">Goods and Service Finder App</h1>
        <hr />
        <p className="mb-4">Developed in a team of 3 during our Software Development Practices class (ComS 309).</p>
        <p className="mb-4">Android Frontend (Java + Volley + Websockets) and Springboot Backend.</p>
        <p className="mb-4">The app functions similar to Ebay or Facebook Marketplace, allowing users to create listings, auctions, and chat.</p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">My Role</h2>
        <p className="mb-4">
          I served as the frontend lead, responsible for implementing all UI elements using Android XML and fragment layouts.
          Beyond the interface, I owned the full CRUD lifecycle for listings — creating, reading, updating, and deleting
          entries through the RESTful API backend. I also took on a leadership role within the team, coordinating task
          assignment, tracking progress across Agile sprints, and keeping the project on schedule through our semester deadline.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Skills &amp; Knowledge Gained</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>Android Studio — project structure, emulator workflow, and fragment-based navigation</li>
          <li>XML UI design — building responsive, performant layouts for Android</li>
          <li>CRUD operations — integrating create/read/update/delete flows end-to-end with a REST backend</li>
          <li>Postman — testing and debugging API endpoints before and during frontend integration</li>
          <li>Agile development — running structured sprints, writing user stories, and iterating based on demo feedback</li>
          <li>Git — branching strategy, pull requests, and resolving merge conflicts on a multi-developer codebase</li>
          <li>CI/CD — automated build and test pipelines to catch regressions across the team</li>
          <li>Java unit testing — writing and maintaining tests to validate app behavior</li>
        </ul>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Resources Used</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>Android Developer Documentation — primary reference for UI components, lifecycle management, and API integration patterns</li>
          <li>Android code samples and tutorials from developer.android.com for Volley networking and WebSocket handling</li>
          <li>Postman for API exploration and endpoint validation</li>
          <li>Architecture block diagrams produced by the team to document system design</li>
        </ul>
        <hr />

        <p className="mb-4">Below shows the block diagram of the app architecture, including the Android app, Spring Boot backend, and MySQL database.</p>

        <div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/309/BlockDiagramGnSFinder.pdf"
            width="100%"
            height="800"
            type="application/pdf"
          ></embed>
        </div>

        <a
          href="https://github.com/Tyler-Bibus/Coms309-GSFinder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson hover:underline"
        >
          View on GitHub
        </a>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">App Screenshots</h2>
          <ImageGallery images={images}/>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AndroidProject;
