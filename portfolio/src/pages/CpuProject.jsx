import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the PDF.js worker source (use a CDN for simplicity)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function CpuProject() {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError('Failed to load PDF. Please try downloading it instead.');
  };

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

        {/* PDF Viewer Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Project Documentation</h2>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {error ? (
              <p className="text-red-400">{error}</p>
            ) : (
              <Document
                file="/../assets/CPUDiagram.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                className="flex flex-col items-center"
              >
                {numPages ? (
                  Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="mb-4 w-full max-w-3xl"
                      scale={1.0}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">Loading PDF...</p>
                )}
              </Document>
            )}
            <a
              href="/pdfs/cpu-project.pdf"
              download
              className="mt-4 inline-block bg-crimson text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>

        <p className="italic text-gray-600">
          Tools used: Logisim Evolution, VHDL, MIPS Assembly
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
