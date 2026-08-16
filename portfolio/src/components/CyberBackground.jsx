/**
 * Fixed background rig: flat void black, a slowly drifting neon grid,
 * CRT scanlines, and a single sweeping beam. No gradients, no images —
 * everything is drawn in CSS so it costs nothing to render.
 */
function CyberBackground() {
  return (
    <div className="cyber-bg" aria-hidden="true">
      <div className="cyber-bg__grid" />
      <div className="cyber-bg__scan" />
      <div className="cyber-bg__beam" />
    </div>
  );
}

export default CyberBackground;
