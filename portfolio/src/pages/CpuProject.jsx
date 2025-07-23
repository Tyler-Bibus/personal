import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the PDF.js worker source to the worker file in node_modules
pdfjs.GlobalWorkerOptions.workerSrc =
  "/node_modules/pdfjs-dist/build/pdf.worker.min.js";

function CpuProject() {

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white h-full">
      <div className="container mx-auto py-12 px-4 h-screen flex-grow">
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
        <hr></hr>
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
          href="https://github.com/placeholder/cpu-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default CpuProject;
