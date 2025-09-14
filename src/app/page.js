"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {useSparkles} from "@/helper/useAnimation";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const sparkles = useSparkles(15);


    useEffect(() => {

        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero_img.jpg"
                    alt="Luxury Nail Spa"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />

                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30 transition-all duration-1000"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
                    }}
                />
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            {/* Sparkle elements - only rendered after client hydration */}
            <div className="absolute inset-0 overflow-hidden">
                {sparkles.map((s, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-20 animate-twinkle"
                        style={{
                            left: s.left,
                            top: s.top,
                            animationDelay: s.delay,
                            animationDuration: s.duration,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className={`relative z-20 max-w-6xl mx-auto text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Premium badge */}
                <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-sm font-medium text-white/90 tracking-wide">LUXURY NAIL EXPERIENCE</span>
                </div>

                {/* Main headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
                    <span className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                        Where Beauty
                    </span>
                    <span className="block bg-gradient-to-r from-pink-300 via-rose-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                        Meets Artistry
                    </span>
                </h1>

                {/* Subtitle with enhanced styling */}
                <div className="max-w-3xl mx-auto mb-12">
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                        Immerse yourself in a world of
                        <span className="font-semibold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"> premium nail artistry </span>
                        where every detail is crafted to perfection
                    </p>
                </div>

                {/* Enhanced CTA section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                        <span className="relative z-10">Book Your Session</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="group px-10 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-pink-300/50">
                        <span className="flex items-center gap-2">
                            View Gallery
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Social proof */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/70">Happy Clients</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">5★</div>
                        <div className="text-sm text-white/70">Average Rating</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">1+</div>
                        <div className="text-sm text-white/70">Years Experience</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 mt-30">
                <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
                    <span className="text-sm tracking-wider">DISCOVER MORE</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

        </section>
    );
}