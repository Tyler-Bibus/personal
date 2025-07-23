function AndroidProject() {
  return (
    <div className="bg-dark text-white">
      <div className="container mx-auto py-8 flex-grow">
        <br></br>
        <h1 className="text-3xl font-bold mb-4">
          Goods and Service Finder App
        </h1>
        <hr></hr>
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
        <hr/>
        <div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/309/BlockDiagramGnSFinder.pdf"
            width="100%" //close enough
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
      </div>
    </div>
  );
}

export default AndroidProject;
