"use client";
import { Button, Link, LOGIN_URL } from "@/app/routes/route";
import React from "react";

export function FinalCTASection() {
    return (
        <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-red-500 text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Grow Your YouTube Channel on Autopilot?
                </h2>
                <p className="text-lg mb-8">
                    Start automating today with Youplayzone — the smarter way to grow your channel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={LOGIN_URL}>
                        <Button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                            Join Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
