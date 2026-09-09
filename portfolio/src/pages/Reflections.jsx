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

function Reflections() {

	return (
		<motion.div className="flex flex-col min-h-screen bg-dark text-white h-full"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div className="container mx-auto py-12 px-4 h-screen flex-grow" variants={itemVariants}>
				<br />
				<h1 className="text-4xl font-bold mb-6">Reflections</h1>
				<hr />

				<h2 className="text-2xl font-semibold mt-6">General Education Reflection</h2>
				<p className="mb-4">
					A focused reflection on general education coursework, highlighting how foundational
					classes developed critical thinking, communication, and interdisciplinary skills
					that supported technical growth throughout my degree.
				</p>
				<div className="flex justify-center mb-4">
					<a className="doc-frame__link" href="/personal/assets/reflections/General_Education_Reflection.pdf" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
              <embed
						src="/personal/assets/reflections/General_Education_Reflection.pdf"
						width="100%"
						height="800"
						type="application/pdf"
					></embed>
				</div>

				<hr />

				<h2 className="text-2xl font-semibold mt-6">Cumulative Education Reflection</h2>
				<p className="mb-4">
					A cumulative overview of my academic journey, summarizing major projects, key
					technical competencies developed, and how coursework and hands-on experiences
					shaped my approach to engineering problems.
				</p>
				<div className="flex justify-center mb-4">
					<a className="doc-frame__link" href="/personal/assets/reflections/Cumulative_Reflection_TylerBibus.pdf" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
              <embed
						src="/personal/assets/reflections/Cumulative_Reflection_TylerBibus.pdf"
						width="100%"
						height="800"
						type="application/pdf"
					></embed>
				</div>

				<hr />

				<h2 className="text-2xl font-semibold mt-6">Ethics Reflection</h2>
				<p className="mb-4">
					A concise reflection on ethics in engineering and technology, examining
					responsibilities, societal impacts, and lessons learned about designing systems
					with safety, fairness, and accountability in mind.
				</p>
				<div className="flex justify-center mb-4">
					<embed
						src="/personal/assets/reflections/Ethics_Reflection.pdf"
						width="100%"
						height="800"
						type="application/pdf"
					></embed>
				</div>

			</motion.div>
		</motion.div>
	);
}

export default Reflections;

