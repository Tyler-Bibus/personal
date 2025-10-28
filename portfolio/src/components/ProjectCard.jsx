import { Link } from 'react-router-dom';

function ProjectCard({ title, description, link, imageSrc }) {
  return (
        <div
      className="card text-white border-crimson border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      style={{ backgroundColor: '#1a1a1a', height: '700px' }}
      role="article"
    >
      {/* Image Section */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="card-img-top object-cover justify-self"
          style={{ maxHeight: '400px', minHeight: '400px', objectFit: 'contain' }}
        />
      ) : (
        <div
          className="bg-gray-700 d-flex align-items-center justify-content-center"
          style={{ height: '200px' }}
        >
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}

      {/* Card Body */}
      <div className="card-body p-4 d-flex flex-column">
        <div className="flex-grow-1 d-flex flex-column justify-content-center text-center">
          <h3 className="card-title text-xl font-bold mb-3 text-crimson" style={{}}>{title}</h3>
          <p className="card-text text-gray-300 text-base" style={{ minHeight: '80px' }}>
            {description}
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-3">
          <Link
            to={link}
            className="btn btn-outline-danger w-100 text-crimson border-crimson hover:bg-crimson hover:text-white transition-colors duration-300"
            aria-label={`View details for ${title} project`}
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


