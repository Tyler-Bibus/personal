function CpuProject() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white h-full">
      <div className="container mx-auto py-12 px-4 h-screen flex-grow">
        <h1 className="text-4xl font-bold mb-6">
          MIPS CPU Architecture Project
        </h1>

        <p className="mb-4">
          As part of CprE 381 (Computer Architecture), I collaborated with a
          partner to design and implement three MIPS-based processors:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>✅ Single-Cycle MIPS Processor</li>
          <li>✅ Software-Scheduled 5-Stage Pipelined MIPS Processor</li>
          <li>
            ✅ Hardware-Scheduled 5-Stage Pipeline with Hazard Detection and
            Forwarding
          </li>
        </ul>
        <p className="mb-4">
          Each design required careful planning around instruction fetch,
          decode, execution, memory access, and writeback stages. I have
          detailed top-level diagrams and documentation for each processor.
        </p>
        <p className="italic text-gray-600">
          Tools used: Logisim Evolution, VHDL, MIPS Assembly
        </p>
      </div>
    </div>
  );
}

export default CpuProject;
