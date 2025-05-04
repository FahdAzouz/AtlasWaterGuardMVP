"use client";

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-24 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Smart Water Management for <span className="text-blue-600">Moroccan Farmers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Atlas WaterGuard empowers farmers to combat water scarcity through AI-driven irrigation, solar-powered sensors, and economic incentives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300 flex items-center justify-center">
                                Learn How It Works <FaArrowRight className="ml-2" />
                            </Link>
                            <Link href="#contact" className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300 flex items-center justify-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400">
                                Contact Us
                            </Link>
                        </div>
                        <div className="mt-10 flex items-center">
                            <div className="bg-green-100 text-green-800 text-sm font-medium rounded-full px-4 py-1 flex items-center dark:bg-green-900 dark:text-green-300">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                Proven Impact: 35% Water Reduction in Pilot Projects
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                                <div className="text-white text-center px-6">
                                    <div className="relative w-full max-w-xl mx-auto">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                        <div className="absolute -bottom-8 left-20 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                        <div className="relative m-8 space-y-4">
                                            <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                                                <h3 className="text-xl font-semibold">Atlas WaterGuard App Interface</h3>
                                                <p className="mt-2 text-sm">Interactive dashboard showing real-time soil moisture data, irrigation schedules, and water credit earnings.</p>
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