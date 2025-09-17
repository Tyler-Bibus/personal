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
