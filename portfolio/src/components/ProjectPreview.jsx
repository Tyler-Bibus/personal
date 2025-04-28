import { Link } from 'react-router-dom';

function ProjectPreview({ title, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <Link to={link} className="text-blue-500 hover:underline">
        View Project →
      </Link>
    </div>
  );
}

export default ProjectPreview;
