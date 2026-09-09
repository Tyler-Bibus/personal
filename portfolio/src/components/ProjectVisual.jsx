const CAPTIONS = {
  '01': 'Bluetooth controller · simplified architecture',
  '02': 'Convolution · four parallel MAC units',
  '03': 'MIPS · five-stage instruction pipeline',
  '04': 'Discord bot · message flow',
  '05': 'Goods & Service Finder · app screenshot',
  '06': 'Game Finder · game-entry screenshot',
};

function Block({ x, y, width = 96, label, sub }) {
  return <g className="project-diagram__block">
    <rect x={x} y={y} width={width} height={48} rx="3" />
    <text x={x + width / 2} y={y + 21}>{label}</text>
    {sub && <text className="project-diagram__sub" x={x + width / 2} y={y + 36}>{sub}</text>}
  </g>;
}

function Diagram({ kind }) {
  return <svg viewBox="0 0 440 240" className="project-diagram" aria-hidden="true">
    <g className="project-diagram__grid">
      {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M${i * 40} 0V240 M0 ${i * 24}H440`} />)}
    </g>
    {kind === '01' && <>
      <path className="project-diagram__wire" d="M128 100H164 M260 100H296 M344 124V148" />
      <rect className="project-diagram__boundary" x="142" y="38" width="272" height="166" rx="6" />
      <text className="project-diagram__note" x="156" y="58">SKY130 / DIGITAL + RADIO</text>
      <Block x={26} y={76} width={102} label="HOST" sub="software" />
      <Block x={164} y={76} label="HCI" sub="commands / events" />
      <Block x={296} y={76} label="LINK LAYER" sub="BLE 4.0" />
      <Block x={296} y={148} label="PHY / RF" sub="radio interface" />
      <text className="project-diagram__note" x="34" y="216">IN DEVELOPMENT / 130 nm</text>
    </>}
    {kind === '02' && <>
      <text className="project-diagram__note" x="22" y="28">INT8 INPUTS → INT32 ACCUMULATION</text>
      <path className="project-diagram__wire" d="M113 120H151 M151 55V190 M151 55H182 M151 100H182 M151 145H182 M151 190H182 M256 55H288V190 M256 100H288 M256 145H288 M256 190H288 M288 120H326" />
      <Block x={16} y={96} label="INPUT" sub="64 × 64 × 3" />
      {[45, 90, 135, 180].map((y, i) => <g key={y} className="project-diagram__lane" style={{ animationDelay: `${i * .45}s` }}>
        <rect x="178" y={y - 9} width="80" height="36" rx="3" />
        <text x="218" y={y + 13}>MAC {i}</text>
      </g>)}
      <Block x={324} y={96} width={100} label="OUTPUT" sub="60 × 60 × 32" />
      <text className="project-diagram__note" x="22" y="226">5 × 5 KERNEL / OUTPUT-STATIONARY DATAFLOW</text>
    </>}
    {kind === '03' && <>
      <text className="project-diagram__note" x="22" y="28">INSTRUCTION FLOW / HARDWARE-SCHEDULED</text>
      <path className="project-diagram__wire" d="M48 89H392 M307 113V145H137V113 M392 113V173H137V145" />
      {['IF', 'ID', 'EX', 'MEM', 'WB'].map((label, i) => <Block key={label} x={16 + i * 86} y={65} width={64} label={label} sub={['fetch','decode','execute','memory','writeback'][i]} />)}
      <text className="project-diagram__note" x="208" y="164">FORWARDING</text>
      <text className="project-diagram__note" x="22" y="215">HAZARD DETECTION + STALL CONTROL</text>
    </>}
    {kind === '04' && <>
      <text className="project-diagram__note" x="22" y="28">MESSAGE → CONTEXT → INFERENCE → REPLY</text>
      <rect className="project-diagram__boundary" x="157" y="48" width="267" height="162" rx="6" />
      <text className="project-diagram__note" x="171" y="69">LOCAL HARDWARE</text>
      <path className="project-diagram__wire" d="M120 112H174 M270 112H312 M362 136V176H73V136" />
      <Block x={22} y={88} label="DISCORD" sub="message API" />
      <Block x={174} y={88} label="PYTHON" sub="discord.py" />
      <Block x={312} y={88} label="MODEL" sub="LM Studio" />
      <text className="project-diagram__note" x="183" y="195">RESPONSE</text>
    </>}
  </svg>;
}

export default function ProjectVisual({ kind, detail = false }) {
  const screenshot = kind === '05' || kind === '06';
  return <figure className={`project-visual ${detail ? 'project-visual--detail' : ''}`}>
    <div className={`project-visual__stage ${screenshot ? `project-visual__stage--screen project-visual__stage--${kind}` : ''}`}>
      {screenshot ? <img
        src={`${import.meta.env.BASE_URL}assets/${kind === '05' ? '309/ExampleListing.png' : '319/coms319Screenshot1.png'}`}
        alt={kind === '05' ? 'Marketplace listing with item details and seller actions' : 'Game Finder page for StarCraft, showing game history and impact'}
        loading="lazy"
      /> : <Diagram kind={kind} />}
    </div>
    <figcaption>{CAPTIONS[kind]}</figcaption>
  </figure>;
}
