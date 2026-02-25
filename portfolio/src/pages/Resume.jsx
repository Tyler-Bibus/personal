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

function Resume() {
  return (
    <motion.div className="flex flex-col min-h-screen bg-dark text-white h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-12 px-4 h-screen flex-grow" variants={itemVariants}>
        <br />
        <h1 className="text-4xl font-bold mb-6">Resume</h1>
        <hr />
        <div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/Resume-Bibus.pdf"
            width="100%"
            height="900"
            type="application/pdf"
          ></embed>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
