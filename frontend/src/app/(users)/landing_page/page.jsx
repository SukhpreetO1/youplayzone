"use client";
import { HeroSection, FeaturesSection, HowItWorksSection, BenefitsSection, LiveDemoSection, TestimonialsSection, FinalCTASection, FooterSection } from "@/app/routes/route";
import * as React from "react"

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <BenefitsSection />
            <LiveDemoSection />
            <TestimonialsSection />
            <FinalCTASection />
            <FooterSection />
        </>
    )
}