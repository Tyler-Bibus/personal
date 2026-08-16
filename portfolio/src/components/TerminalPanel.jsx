/**
 * A framed "terminal window" used to wrap prose blocks.
 *
 * @param {string} title  text shown in the title bar, e.g. "~/about/mission"
 * @param {string} right  optional right-aligned status text
 */
function TerminalPanel({ title = '~', right, children, className = '', bodyClassName = '' }) {
  return (
    <div className={`term ${className}`.trim()}>
      <div className="term__bar">
        <span className="term__dot term__dot--a" />
        <span className="term__dot term__dot--b" />
        <span className="term__dot term__dot--c" />
        <span className="ms-2">{title}</span>
        {right && <span className="ms-auto d-none d-sm-inline">{right}</span>}
      </div>
      <div className={`term__body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  );
}

export default TerminalPanel;
