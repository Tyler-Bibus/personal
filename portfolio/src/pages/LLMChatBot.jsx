import React from "react";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function LLMChatBot() {
  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-dark text-white h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container mx-auto py-12 px-4 h-screen flex-grow" variants={itemVariants}>
        <br />
        <h1 className="text-4xl font-bold mb-6">
          Local LLM Discord Bot
        </h1>
        <hr />
        <p className="mb-4">
          I developed a fully self-hosted Discord bot that integrates a local Large Language Model (LLM) for interactive conversations. 
          Running entirely on personal hardware (no cloud API dependency), the bot allows server members to chat naturally while preserving privacy and full control.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Powered by local LLM inference (LM Studio)</li>
          <li>Custom personalities — easily switch between different character roles, tones, or expert modes</li>
          <li>Tool integration — the AI can call custom functions/scripts (e.g., web search, calculations, file ops, or game commands)</li>
          <li>Discord.py / discord.js based backend with real-time message handling</li>
          <li>Configurable via simple scripts or JSON for personalities, prompts, and tools</li>
        </ul>
        <p className="mb-4">
          This project demonstrates end-to-end AI deployment: model selection/quantization, server setup, Discord API integration, 
          prompt engineering, and extensible tool usage — all running locally for maximum privacy and low latency.
        </p>
        <hr className="my-8" />

        {/* Small Image Gallery */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <motion.img 
            src="/personal/assets/llm-bot-chat-example-1.png" 
            alt="Discord chat with local LLM bot" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
          <motion.img 
            src="/personal/assets/llm-bot-personality-switch.png" 
            alt="Switching custom personalities in Discord" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
          <motion.img 
            src="/personal/assets/llm-bot-tools-command.png" 
            alt="Bot using custom tools/functions" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
          <motion.img 
            src="/personal/assets/local-llm-server-terminal.png" 
            alt="Local LLM server running in terminal" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
          <motion.img 
            src="/personal/assets/discord-bot-conversation.png" 
            alt="Extended conversation example" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
        </div> */}

        <p className="italic text-gray-600 mb-4">
          Tools & Technologies: Python (discord.py), Node.js (optional), Local LLM frameworks (Ollama / llama.cpp / etc.), Prompt Engineering, JSON configs
        </p>

        {/*If I publush to git*/}
        {/* <a
          href="https://github.com/Tyler-Bibus/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson hover:underline block mt-4"
        >
          View on GitHub
        </a> */}
      </motion.div>
    </motion.div>
  );
}

export default LLMChatBot;