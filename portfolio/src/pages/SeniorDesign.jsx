import React from "react";
import { motion } from "framer-motion";
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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

function SeniorDesign() {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-dark text-white h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="container mx-auto py-12 px-4 h-screen flex-grow"
        variants={itemVariants}
      >
        <br />
        <h1 className="text-4xl font-bold mb-6">
          Senior Design Project - Open Source ASIC Bluetooth Microcontroller
        </h1>
        <hr />
        <p className="mb-4">
          As part of my education at Iowa State University, I have the
          opportunity to take part in a senior design course. In this course I
          am working collaboratively with a group of 8 other engineers to
          design, develop, and eventually provide a finalized project.
        </p>
        <p className="mb-4">
          The ASIC Bluetooth Microcontroller is aimed to provide an open-source
          option in a market dominated by closed-source radio microcontrollers.
          This project will allow us to create a complete end-to-end silicon
          proven radio microcontroler. This project is allowing me to explore
          more hardware designed aspects of my education like in my computer
          architecture and machine learning courses. Unlike my other courses
          this project is written in Verilog and isn't using Questasim or
          Vivado.
        </p>
        <br />
        <p className="mb-4">
          I am part of the Link Layer and Host Controller Interface team,
          largely as a lead for the team and connecting the physical layer to
          the rest of the project. My contribution to the project should bridge
          the gap between physical electrical circuits and software through the
          medium of digital hardware design.
          <br/>
          More documents will be linked as they are created during this ongoing project.
        </p>
        <hr />
        {/**<div className="flex justify-center mb-4">
          <embed
            src="/personal/assets/cnn_accelerator.pdf"
            width="100%" //close enough
            height="800"
            type="application/pdf"
          ></embed>
        </div>
        <hr />**/}
        <p>Links and documents will be added as they are created here</p>
        <hr />
        <p className="italic text-gray-600">
          Tools used: Verilog, Caravel, LTSpice, VLSI design, RISCV Assembly
        </p>
      </motion.div>
    </motion.div>
  );
}

export default SeniorDesign;
