"use client";

import { FaLeaf, FaMicrochip, FaMobile, FaCoins, FaUsers, FaWater } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <FaMicrochip className="w-8 h-8 text-blue-600" />,
        title: "Solar-Powered IoT Sensors",
        description: "Our low-cost sensors continually monitor soil moisture levels and send real-time data to farmers, eliminating electricity concerns in remote areas."
    },
    {
        icon: <FaMobile className="w-8 h-8 text-blue-600" />,
        title: "Voice-Based Mobile App",
        description: "Designed for varying literacy levels, our app provides irrigation alerts and recommendations through voice messages in local dialects."
    },
    {
        icon: <FaCoins className="w-8 h-8 text-blue-600" />,
        title: "Water Credit System",
        description: "Farmers earn mobile credits for water conservation, redeemable for agricultural inputs like drought-resistant seeds and fertilizers."
    },
    {
        icon: <FaUsers className="w-8 h-8 text-blue-600" />,
        title: "Farmer Community Forum",
        description: "Connect with other farmers to discuss agricultural trends, share best practices, and build a supportive community."
    },
    {
        icon: <FaWater className="w-8 h-8 text-blue-600" />,
        title: "AI-Driven Irrigation",
        description: "Advanced algorithms analyze soil data, weather forecasts, and crop types to provide personalized irrigation recommendations."
    },
    {
        icon: <FaLeaf className="w-8 h-8 text-blue-600" />,
        title: "Government Integration",
        description: "Connects with RAMED and National Land Registry systems for equitable resource distribution and policy alignment."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Innovative Features</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Our comprehensive solution combines hardware, software, and economic incentives to address water scarcity challenges.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 