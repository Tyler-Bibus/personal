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

function MLAccelerator() {

  return (
    <motion.div className="flex flex-col min-h-screen bg-dark text-white h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-12 px-4 h-screen flex-grow" variants={itemVariants}>
        <br />
        <h1 className="text-4xl font-bold mb-6">
          Convolutional Hardware Accelerator Project
        </h1>
        <hr />
        <p className="mb-4">
          As part of CPRE 4870/5870 (Advanced Computer Architecture), I collaborated with
          partners to design and implement a convolutional hardware accelerator for our CNN model.
          This involved extensive VHDL for four subcomponents that fit into a larger accelerator template:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Index Generator</li>
          <li>Multiply-Accumulate (MAC) Units</li>
          <li>Dequantization Unit</li>
          <li>Output Storage</li>
        </ul>
        <p className="mb-4">
          The design uses 8-bit quantization for weights and activations with int32 accumulators and fixed-point multiplication.
          We adopted an output-stationary dataflow with 4 parallel MACs, targeting the first convolutional layer
          (input: 64x64x3, filter: 5x5x3x32, output: 60x60x32). The accelerator supports optional ReLU and 2x2 max-pooling,
          achieving better performance than a naive x86 approach but not surpassing GPUs.
          I have detailed architecture diagrams and documentation.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">My Role</h2>
        <p className="mb-4">
          The team split work roughly along the hardware/software boundary, though most components involved
          joint development. On the hardware side, I implemented the original MAC unit and the Storage Unit
          in VHDL, and contributed heavily to the Fetch Unit at both the conceptual and debugging level. My
          involvement with the Dequantization Unit was mostly conceptual and debugging support.
        </p>
        <p className="mb-4">
          On the software side, I was solely responsible for the C++ implementation — including the
          quantization logic for our CNN model and the interface layer that connected the C++ code to the
          hardware accelerator. I also wrote all of the Python scripts used to debug outputs and visualize
          model results throughout development.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Skills &amp; Knowledge Gained</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>ML model quantization — implementing 8-bit quantization from scratch in C++, not just using a framework</li>
          <li>Hardware/software co-design — designing C++ code to interface directly with custom VHDL hardware</li>
          <li>CNN architecture — understanding convolutional operations deeply enough to accelerate them in hardware</li>
          <li>MAC unit design — building the core multiply-accumulate building block of neural network inference in VHDL</li>
          <li>Python for ML debugging — scripting visualization tools to inspect and validate model outputs at each stage</li>
          <li>Performance analysis — comparing quantization sizes and multiplier designs, benchmarking against naive x86</li>
          <li>Technical presentation — demonstrating findings and connecting project work to published research papers</li>
        </ul>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Resources Used</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>CPRE 4870/5870 course materials — accelerator template, design specifications, and dataflow requirements</li>
          <li>Published research papers on fast multiplier architectures and quantization techniques (used for benchmarking comparison)</li>
          <li>TensorFlow / model reference implementations — used to validate quantized output against a known-good baseline</li>
        </ul>
        <hr />
        <div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/cnn_accelerator.pdf"
            width="100%" //close enough
            height="800"
            type="application/pdf"
          ></embed>
        </div>
        <p className="italic text-gray-600">
          Tools used: VHDL, C++
        </p>
      </motion.div>
    </motion.div>
  );
}

export default MLAccelerator;