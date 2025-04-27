"use client";
import { GOOGLE_DRIVE, YOUTUBE } from "@/app/routes/route";
import React from "react";

export function FeaturesSection() {
    const features = [
        {
            title: "Auto Upload from Drive",
            description: "Automatically sync and upload videos from Google Drive to YouTube.",
            icon: GOOGLE_DRIVE,
        },
        {
            title: "AI Metadata Generation",
            description: "Leverage AI to auto-generate titles, descriptions, and tags.",
            icon: "/icons/ai.svg",
        },
        {
            title: "Auto Tags & Keywords",
            description: "Automatically generate relevant tags and keywords to boost reach.",
            icon: "/icons/tags.svg",
        },
        {
            title: "Real-time Analytics",
            description: "Track views, engagement, and growth in real-time.",
            icon: "/icons/analytics.svg",
        },
        {
            title: "YouTube Earnings Tracker",
            description: "View detailed revenue insights directly from your dashboard.",
            icon: "/icons/money.svg",
        },
        {
            title: "In-app Video Player",
            description: "Play and preview your uploaded videos without leaving the app.",
            icon: YOUTUBE,
        },
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl p-6"
                        >
                            <div className="flex items-center space-x-4">
                                {/* IconFrame */}
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <img
                                        src={feature.icon}
                                        alt={`${feature.title} Icon`}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div>
                                    {/* FeatureTitle */}
                                    <h3 className="text-lg font-medium">{feature.title}</h3>
                                    {/* FeatureDesc */}
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
