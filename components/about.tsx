"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 white-glassmorphism p-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>What we do.</SectionHeading>
      <p className="mb-3 text-sm sm:text-lg">
        At Precium Labs, we're a dynamic team of builders dedicated to
        transforming innovative ideas into functional blockchain solutions. We
        specialize in developing projects across a wide spectrum of blockchain
        networks, including Ethereum, Solana, TON, and various EVM and non-EVM
        chains. Our expertise spans from crafting Web3-powered utility products
        in our Lab to delivering insightful educational content on our blog.
        Whether you're envisioning a groundbreaking application or seeking to
        enhance your blockchain knowledge, Precium Labs is your partner in
        driving the future of decentralized technology.
      </p>

    </motion.section>
  );
}
