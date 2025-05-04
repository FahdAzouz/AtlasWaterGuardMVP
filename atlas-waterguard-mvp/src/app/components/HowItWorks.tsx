"use client";

import { useEffect } from 'react';

const steps = [
    {
        number: "01",
        title: "Install IoT Sensors",
        description: "Solar-powered soil moisture sensors are installed in your fields. These low-cost devices are designed to work without electricity and withstand harsh weather conditions."
    },
    {
        number: "02",
        title: "Connect to Mobile App",
        description: "Download our voice-based app and connect your sensors. The app works in local dialects and is designed for all literacy levels, making it accessible to everyone."
    },
    {
        number: "03",
        title: "Receive Smart Recommendations",
        description: "Our AI analyzes your soil data, local weather patterns, and crop type to provide personalized irrigation recommendations and alerts."
    },
    {
        number: "04",
        title: "Save Water, Earn Credits",
        description: "As you implement our recommendations and conserve water, you automatically earn Water Credits that can be redeemed for agricultural supplies."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How Atlas WaterGuard Works</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Our easy-to-use system brings smart irrigation technology to your farm in just four simple steps.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                            {step.number}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white">
                                <div className="p-8 text-center">
                                    <div className="border-4 border-white/30 rounded-xl p-6 backdrop-blur-sm bg-white/10">
                                        <h3 className="text-2xl font-bold mb-4">Atlas WaterGuard System</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-white/20 p-3 rounded-lg">
                                                <div className="text-4xl font-bold">35%</div>
                                                <div className="text-sm">Water Saved</div>
                                            </div>
                                            <div className="bg-white/20 p-3 rounded-lg">
                                                <div className="text-4xl font-bold">60%</div>
                                                <div className="text-sm">Lower Cost</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                                <div>Real-time Soil Monitoring</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                                <div>AI-Powered Recommendations</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                                <div>Economic Incentives</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 