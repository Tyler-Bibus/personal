import React from "react";
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the PDF.js worker source to the worker file in node_modules
pdfjs.GlobalWorkerOptions.workerSrc =
  "/node_modules/pdfjs-dist/build/pdf.worker.min.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function CpuProject() {

  return (
    <motion.div className="flex flex-col min-h-screen bg-dark text-white h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-12 px-4 h-screen flex-grow" variants={itemVariants}>
        <br />
        <h1 className="text-4xl font-bold mb-6">
          MIPS CPU Architecture Project
        </h1>
        <hr />
        <p className="mb-4">
          As part of CprE 381 (Computer Architecture), I collaborated with a
          partner to design and implement three MIPS-based processors:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li> Single-Cycle MIPS Processor</li>
          <li> Software-Scheduled 5-Stage Pipelined MIPS Processor</li>
          <li>
             Hardware-Scheduled 5-Stage Pipeline with Hazard Detection and
            Forwarding
          </li>
        </ul>
        <p className="mb-4">
          Each design required careful planning around instruction fetch,
          decode, execution, memory access, and writeback stages. I have
          detailed top-level diagrams and documentation for each processor.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">My Role</h2>
        <p className="mb-4">
          Working with one partner, I took ownership of the top-level architecture design across all three processor
          implementations. This included designing the control unit and control flow logic that coordinates instruction
          execution at each stage. I also drove the majority of the debugging effort — tracing signal propagation
          through simulation to isolate and fix timing and correctness issues. For the final hardware-scheduled
          pipelined processor, I produced the detailed architectural diagram in AutoCAD LT documenting the complete
          datapath with hazard detection and forwarding units.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Skills &amp; Knowledge Gained</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>Computer architecture fundamentals — instruction fetch/decode/execute/memory/writeback pipeline stages</li>
          <li>Pipelining — how to overlap instruction execution and the tradeoffs in throughput vs. complexity</li>
          <li>Hazard detection and forwarding — identifying data and control hazards and resolving them in hardware</li>
          <li>Performance analysis — measuring CPI and comparing single-cycle vs. pipelined designs quantitatively</li>
          <li>VHDL — hardware description language design patterns, component instantiation, and testbench development</li>
          <li>MIPS Assembly — writing and reading assembly to verify processor correctness</li>
          <li>Hardware debugging — using simulation waveforms to trace and fix signal-level issues</li>
          <li>Technical documentation — producing detailed datapath diagrams to communicate hardware design</li>
        </ul>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Resources Used</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li><em>Computer Organization and Design</em> by Patterson &amp; Hennessy — primary reference for MIPS architecture and pipelining concepts</li>
          <li><em>Free Range VHDL</em> — main textbook for VHDL syntax, design patterns, and testbench methodology</li>
          <li>AutoCAD LT — used to produce the final pipelined processor datapath diagram</li>
          <li>QuestaSim / ModelSim — simulation environment for waveform-based hardware debugging</li>
          <li>CprE 381 course materials — lab specifications and reference MIPS instruction set documentation</li>
        </ul>
        <hr />

        <div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/CPUDiagram.pdf"
            width="100%" //close enough
            height="800"
            type="application/pdf"
          ></embed>
        </div>
        <p className="italic text-gray-600">
          Tools used: AutoCADLT, VHDL, MIPS Assembly
        </p>
        <a
          href="https://github.com/Tyler-Bibus/ComputerArchitecture"
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson hover:underline"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}

export default CpuProject;
