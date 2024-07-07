import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/assets/QT Landing Page 1.png";
import cuppa from "@/public/assets/cuppa.png";
import puppy from "@/public/puppy.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Infinity Bot",
    description:
      "Infinity bot is an intuitive Telegram bot that allows you manage your portfolio, gives real time market analysis, customize alerts, gives trading signals, also integrated with popular exchanges. A hackathon winning project.🏆",
    tags: ["Telegram", "Next.js", "Tailwind", "Orderly SDK"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Crypto Cuppa",
    description:
      "Crypto cuppa is an award winning product that allows crypto users incentivize their favorite creators, A 'buymeacoffee' of web3.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Base", "Solidity"],
    imageUrl: cuppa,
  },
  {
    title: "Puppy Love Token",
    description:
      "A community driven adorable puppy meme token found for the sole purpose of pumping the meme tokens innovations.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solidity"],
    imageUrl: puppy,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Solidity",
  "Rust",
  "Vyper",
  "Move",
  "Cairo",
  "Yul",
  "Chaincode",
  "Hardhat",
  "Clarity",
] as const;
