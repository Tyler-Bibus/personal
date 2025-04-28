function AndroidProject() {
  return (
    <div className="bg-dark text-white">
      <div className="container mx-auto py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">
          Goods and Service Finder App
        </h1>
        <p className="mb-4">
          Developed in a team of 3 during our Software Development Practices
          class (ComS 309).
        </p>
        <p className="mb-4">
          Android Frontend (Java + Volley + Websockets) and Springboot Backend.
        </p>
        <p className="mb-4">
          The app functions similar to Ebay or Facebook Marketplace, allowing
          users to create listings, auctions, and chat.
        </p>
        <a
          href="https://github.com/placeholder/android-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default AndroidProject;
