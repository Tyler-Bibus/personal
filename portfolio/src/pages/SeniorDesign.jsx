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
          I am part of the Digital Design team working on the Link Layer and Host Controller Interface,
          largely as a lead for the team and connecting the physical layer to
          the rest of the project. My contribution to the project bridges
          the gap between physical electrical circuits and software through the
          medium of digital hardware design.
        </p>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Skills &amp; Knowledge Gained</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>ASIC fabrication fundamentals — SkyWater 130nm as an industry standard open-source process design kit (PDK)</li>
          <li>Open-source ASIC toolchain — working with Caravel harness and associated open-source EDA tools</li>
          <li>Bluetooth 4.0 protocol — understanding the Link Layer specification and Host Controller Interface at an implementation level</li>
          <li>Digital hardware simulation — using BumbleSim and BabbleSim for Bluetooth protocol simulation and validation</li>
          <li>Large team engineering — coordinating across a 9-person cross-disciplinary team with client and advisor oversight</li>
          <li>Verilog for ASIC — writing synthesizable RTL targeting a real fabrication flow rather than FPGA</li>
        </ul>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Resources Used</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-200">
          <li>Bluetooth Core Specification 4.0 — primary reference for Link Layer and HCI design requirements</li>
          <li>Caravel documentation and harness — open-source ASIC integration framework</li>
          <li>SkyWater SKY130 PDK — 130nm open-source process design kit used for fabrication-ready design</li>
          <li>BumbleSim / BabbleSim — Bluetooth simulation frameworks for protocol validation</li>
        </ul>
        <hr />

        <h2 className="text-2xl font-bold mt-4 mb-2">Project Website &amp; Reports</h2>
        <p className="mb-4">
          The team maintains a project website through Iowa State's ECpE Senior Design program. Weekly progress
          reports are published there as the project develops.{" "}
          <a
            href="https://sddec26-10.sd.ece.iastate.edu/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson hover:underline"
          >
            View Senior Design Project Site
          </a>
        </p>

        <h3 className="text-xl font-semibold mb-2">Week 5 Report</h3>
        <div className="flex justify-center mb-6">
          <embed
            src="https://sddec26-10.sd.ece.iastate.edu/week_5_report.pdf"
            width="100%"
            height="800"
            type="application/pdf"
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">Week 6 Report</h3>
        <div className="flex justify-center mb-6">
          <embed
            src="https://sddec26-10.sd.ece.iastate.edu/week_6_report.pdf"
            width="100%"
            height="800"
            type="application/pdf"
          />
        </div>
        <hr />

        <p className="italic text-gray-600">
          Tools used: Verilog, Caravel, SkyWater SKY130, LTSpice, BumbleSim, BabbleSim, RISC-V Assembly
        </p>
      </motion.div>
    </motion.div>
  );
}

export default SeniorDesign;
