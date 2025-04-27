"use client";
import React from "react";

export function TestimonialsSection() {
    const testimonials = [
        {
            username: "@RealMarkVlogs",
            quote: "“Youplayzone saved me hours every week. The AI optimization is a game-changer!”",
            profileImage: "/testimonials/mark.jpg",
            stars: 5,
        },
        {
            username: "@CreativeMia",
            quote: "“From upload to analytics, it's all automatic. I just focus on content now!”",
            profileImage: "/testimonials/mia.jpg",
            stars: 5,
        },
        {
            username: "@TechieTom",
            quote: "“Finally, one platform that does it all — uploads, titles, tracking. Brilliant!”",
            profileImage: "/testimonials/tom.jpg",
            stars: 4,
        },
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-12">What Creators Are Saying</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={testimonial.profileImage}
                                    alt={testimonial.username}
                                    className="w-16 h-16 rounded-full object-cover mb-4"
                                />
                                <p className="italic text-gray-700 mb-3">{testimonial.quote}</p>
                                <span className="font-semibold text-gray-800">{testimonial.username}</span>
                                {testimonial.stars && (
                                    <div className="flex mt-2 space-x-1">
                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
