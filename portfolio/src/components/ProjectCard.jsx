import { Link } from 'react-router-dom';

/**
 * A project dossier. Images were removed in the cyberpunk redesign —
 * each card is now a terminal record: index, status pip, tech tags.
 *
 * @param {string}   id      two-digit record number, e.g. "03"
 * @param {string}   status  'live' | 'done' | 'archive'
 * @param {string[]} tags    short tech labels
 */
function ProjectCard({ id, title, description, link, tags = [], status = 'done', statusLabel }) {
  return (
    <article className="cyber-card">
      <div className="cyber-card__id">
        <span>REC_{id}</span>
        <span>
          <span className={`pip pip--${status}`} />
          {statusLabel || (status === 'live' ? 'ACTIVE' : 'SHIPPED')}
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
        Open Record <span aria-hidden="true">▸</span>
      </Link>
    </article>
  );
}

export default ProjectCard;
