"use client";

import Image from "next/image";
import { Button, Link, LOGIN_URL } from "@/app/routes/route";

export function HeroSection() {
    return (
        <section className="bg-white relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-white to-purple-100 opacity-30 z-0" />
            <div className="max-w-6xl px-4 relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Column */}
                <div className="w-full md:w-3/5 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">
                        Automate Your YouTube Growth with Ease.
                    </h1>
                    <p className="text-lg text-gray-700">
                        Upload from Google Drive to YouTube, generate metadata with AI, monitor your earnings, and play videos — all in one place.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href={LOGIN_URL}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Column - Dashboard Mockup */}
                <div className="w-full md:w-2/5 mt-10 md:mt-0">
                    <Image
                        src="/mockup-dashboard.png" // Replace with your mockup image
                        alt="Dashboard Mockup"
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
