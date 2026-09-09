/**
 * RGB-split glitch text. The pseudo-elements read `data-text`, so the
 * children must be a plain string.
 *
 * @param {string}  text   the string to render
 * @param {boolean} hover  only glitch on hover (used for nav links)
 */
function GlitchText({ text, hover = false, as: Tag = 'span', className = '', ...rest }) {
  return (
    <Tag
      className={`${hover ? 'glitch-hover' : 'glitch'} ${className}`.trim()}
      data-text={text}
      aria-label={text}
      {...rest}
    >
      {text}
    </Tag>
  );
}

export default GlitchText;
