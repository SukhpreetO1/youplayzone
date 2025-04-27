"use client";
import React from "react";
import { Link, LINKEDIN, TWITTER, YOUTUBE } from "@/app/routes/route";

export function FooterSection() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Links Column */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                    </ul>
                </div>

                {/* Social Icons Column */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={YOUTUBE} alt="YouTube" className="w-6 h-6" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={TWITTER} alt="Twitter / X" className="w-6 h-6" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={LINKEDIN} alt="LinkedIn" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Email Form Column */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get Updates</h3>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 rounded-md text-black"
                        />
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Youplayzone. All rights reserved.
            </div>
        </footer>
    );
}
