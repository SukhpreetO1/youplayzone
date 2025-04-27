"use client";
import { CLOCK, EYE, ROCKET } from "@/app/routes/route";
import React from "react";

export function BenefitsSection() {
    const benefits = [
        {
            icon: CLOCK,
            title: "Save Hours Weekly",
            description: "Automate repetitive tasks like uploading, tagging, and publishing.",
        },
        {
            icon: ROCKET,
            title: "Accelerate Growth",
            description: "Boost discoverability with AI-optimized metadata.",
        },
        {
            icon: EYE,
            title: "Stay in Control",
            description: "Track views, performance, and revenue all in one place.",
        },
    ];
    
    return (
        <section className="w-full py-20 bg-[#f9f9f7]">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-12">Why Creators Love Youplayzone</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center bg-gray-100 rounded-full">
                                <img src={benefit.icon} alt={benefit.title} width={28} height={28} />
                            </div>
                            <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                            <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
