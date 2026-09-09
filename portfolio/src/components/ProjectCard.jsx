import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual';

/** Project summary with a diagram or screenshot of the work. */
function ProjectCard({ id, title, description, link, tags = [], status = 'done', statusLabel, visual }) {
  return (
    <article className="cyber-card project-card">
      {visual && <ProjectVisual kind={visual} />}
      <div className="cyber-card__id">
        <span>REC_{id}</span>
        <span>
          <span className={`pip pip--${status}`} />
          {statusLabel || (status === 'live' ? 'ACTIVE' : 'COMPLETE')}
        </span>
      </div>

      <h3 className="cyber-card__title">{title}</h3>
      <p className="cyber-card__desc">{description}</p>

      {tags.length > 0 && (
        <div className="cyber-card__tags">
          {tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      )}

      <Link to={link} className="btn-cyber" aria-label={`Open the ${title} project page`}>
        View Project <span aria-hidden="true">▸</span>
      </Link>
    </article>
  );
}

export default ProjectCard;
