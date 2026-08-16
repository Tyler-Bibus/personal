import GlitchText from './GlitchText';

/**
 * "// 02 ▸ PROJECTS ───────────" section header.
 */
function SectionHeading({ index, title, id }) {
  return (
    <div className="sec-head" id={id}>
      {index && <span className="sec-head__idx">// {index}</span>}
      <h2 className="sec-head__title">
        <GlitchText text={title} />
      </h2>
      <span className="sec-head__rule" />
    </div>
  );
}

export default SectionHeading;
