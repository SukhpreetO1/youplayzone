"use client";
import { GOOGLE_DRIVE, NEXT_ARROW } from "@/app/routes/route";
import React from "react";

export function HowItWorksSection() {
    const steps = [
        {
            title: "Connect Drive & YouTube",
            description: "Securely link your Google Drive and YouTube accounts.",
            icon: GOOGLE_DRIVE,
        },
        {
            title: "Upload Videos to Drive",
            description: "Add your videos to a Drive folder for automatic sync.",
            icon: "/icons/upload.svg",
        },
        {
            title: "AI Optimizes Metadata",
            description: "Titles, descriptions, and tags are generated automatically.",
            icon: "/icons/ai.svg",
        },
        {
            title: "Track & Monetize",
            description: "Monitor performance and earnings from your dashboard.",
            icon: "/icons/chart.svg",
        },
    ];

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            {/* Number badge */}
                            <div className="w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center mb-4">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center mb-4">
                                <img src={step.icon} alt={step.title} width={32} height={32} />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-600 max-w-[200px]">{step.description}</p>

                            {/* Arrow for desktop view */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 right-[-60px]">
                                    <img src={NEXT_ARROW} alt="arrow" width={24} height={24} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
