"use client";

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const team = [
    {
        name: "Yassir Edraoui",
        role: "Lead IoT Developer",
        bio: "Designed a low-power soil sensor prototype during a university hackathon, winning 1st place in sustainability tech.",
        image: "/images/avatar1.svg",
        social: {
            linkedin: "#",
            github: "#",
            email: "mailto:yassir@atlaswaterguard.com"
        }
    },
    {
        name: "Fahd Azouz",
        role: "AI/ML Engineer",
        bio: "Developed a predictive irrigation model for a capstone project, achieving 92% accuracy in water usage forecasting.",
        image: "/images/avatar2.svg",
        social: {
            linkedin: "#",
            github: "#",
            email: "mailto:fahd@atlaswaterguard.com"
        }
    },
    {
        name: "Manal Seghir",
        role: "Finance & Partnerships",
        bio: "Focus on sustainable business models and agricultural economics. Develops pricing strategies and negotiates partnerships.",
        image: "/images/avatar3.svg",
        social: {
            linkedin: "#",
            github: "#",
            email: "mailto:manal@atlaswaterguard.com"
        }
    },
    {
        name: "Soukaina Essaidi",
        role: "Systems Architect",
        bio: "Built a blockchain-based resource-tracking system for a class project, later published in a student tech journal.",
        image: "/images/avatar4.svg",
        social: {
            linkedin: "#",
            github: "#",
            email: "mailto:soukaina@atlaswaterguard.com"
        }
    },
    {
        name: "Anass El Houcini",
        role: "Resource Management",
        bio: "Lean budgeting and resource allocation. Manages budgets, tracks cost-per-liter-saved metrics, and designs incentives.",
        image: "/images/avatar5.svg",
        social: {
            linkedin: "#",
            github: "#",
            email: "mailto:anass@atlaswaterguard.com"
        }
    }
];

export default function Team() {
    return (
        <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Our diverse team combines expertise in IoT, AI, finance, and agricultural economics to build a sustainable solution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6 text-center">
                                <div className="w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900 mx-auto mb-6 overflow-hidden flex items-center justify-center text-blue-600 dark:text-blue-400 text-5xl font-bold">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.email} className="text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                                        <FaEnvelope className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Advisory Support</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 overflow-hidden flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl font-bold">
                            AK
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Abdelhamid Khalil</h4>
                            <p className="text-blue-600 dark:text-blue-400">Faculty Advisor</p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Expert in Entrepreneurship and sustainable development at AUI, providing guidance on business strategy and agricultural technology implementation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 