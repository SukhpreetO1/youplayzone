"use client";
import React from "react";

export function LiveDemoSection() {
    return (
        <section className="w-full py-20 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-4">See Youplayzone in Action</h2>
                <p className="text-gray-600 mb-10">
                    Watch how easy it is to upload and optimize a video.
                </p>

                {/* Embedded video or image with play button overlay */}
                <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md">
                    {/* Replace src with your YouTube or Loom embed link */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Live demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
