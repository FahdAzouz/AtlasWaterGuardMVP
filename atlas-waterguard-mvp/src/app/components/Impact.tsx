"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaWater, FaSeedling, FaUsers } from 'react-icons/fa';

export default function Impact() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "Current Impact", icon: <FaChartLine /> },
        { name: "2024 Pilot", icon: <FaSeedling /> },
        { name: "2027 Vision", icon: <FaUsers /> }
    ];

    const impactData = [
        // Current Impact
        [
            {
                metric: "35%",
                label: "Water Reduction",
                description: "Achieved in pilot citrus farms across Souss-Massa region.",
                icon: <FaWater className="h-10 w-10 text-blue-600" />
            },
            {
                metric: "60%",
                label: "Cost Reduction",
                description: "Our sensors cost significantly less than competitor models, making technology accessible.",
                icon: <FaChartLine className="h-10 w-10 text-green-600" />
            },
            {
                metric: "200+",
                label: "Smallholder Farmers",
                description: "Successfully using Atlas WaterGuard in initial testing.",
                icon: <FaUsers className="h-10 w-10 text-orange-600" />
            }
        ],
        // 2024 Pilot
        [
            {
                metric: "25%",
                label: "Water Waste Reduction",
                description: "Target for our expanded pilot across 200 farms.",
                icon: <FaWater className="h-10 w-10 text-blue-600" />
            },
            {
                metric: "5,000+",
                label: "Water Credits Issued",
                description: "Economic incentives to be distributed to participating farmers.",
                icon: <FaChartLine className="h-10 w-10 text-green-600" />
            },
            {
                metric: "3",
                label: "New Regions",
                description: "Expansion planned beyond Souss-Massa to include Ben Guerir and other areas.",
                icon: <FaSeedling className="h-10 w-10 text-orange-600" />
            }
        ],
        // 2027 Vision
        [
            {
                metric: "1.5M",
                label: "Farmers Reached",
                description: "Our goal to scale across Morocco and potentially neighboring countries.",
                icon: <FaUsers className="h-10 w-10 text-blue-600" />
            },
            {
                metric: "1.2B",
                label: "Cubic Meters of Water Saved",
                description: "Annual water conservation target, significantly impacting national resources.",
                icon: <FaWater className="h-10 w-10 text-green-600" />
            },
            {
                metric: "30%",
                label: "Increased Crop Yield",
                description: "Projected improvement in productivity through optimized irrigation.",
                icon: <FaSeedling className="h-10 w-10 text-orange-600" />
            }
        ]
    ];

    return (
        <section id="impact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Atlas WaterGuard is making a measurable difference in water conservation and farmer prosperity.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200 dark:border-gray-700">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center px-6 py-4 text-lg font-medium border-b-2 transition-colors duration-300 ${activeTab === index
                                    ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div>
                    {impactData[activeTab].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md"
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="shrink-0 bg-white dark:bg-gray-700 p-4 rounded-full shadow-md">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-end gap-2 mb-4">
                                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{item.metric}</h3>
                                        <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{item.label}</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 