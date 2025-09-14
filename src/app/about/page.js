"use client"
import React, { useState, useEffect } from 'react';
import { Users, Award, Heart, Sparkles, Star } from 'lucide-react';
import {useSparkles} from "@/helper/useAnimation";
import {features} from "@/data/staticData";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        clients: 0,
        specialists: 0,
        experience: 0
    });
    const sparkle = useSparkles(15);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('about');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const animateCounters = () => {
        const targets = { clients: 500, specialists: 35, experience: 5 };
        const duration = 2000;
        const steps = 60;
        const increment = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounters({
                clients: Math.floor(targets.clients * progress),
                specialists: Math.floor(targets.specialists * progress),
                experience: Math.floor(targets.experience * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounters(targets);
            }
        }, increment);
    };

    return (
        <section
            className="w-screen min-h-screen overflow-hidden relative"
            id="about"
        >

            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">

                {/* Animated sparkles */}
                <div className="absolute inset-0 overflow-hidden">
                    {sparkle.map((s, i) => (
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

                {/* Floating gradient orbs */}
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Hero Section */}
                <div className="flex-1 flex flex-col justify-center items-center px-6 py-20">
                    <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>

                        {/* Badge */}
                        <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                            <Heart className="w-4 h-4 text-pink-400 mr-3" />
                            <span className="text-sm font-medium text-white/90 tracking-wide">OUR STORY</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-12">
                            <span className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                                Crafting Beauty
                            </span>
                            <span className="block bg-gradient-to-r from-pink-300 via-rose-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                                Since 2025
                            </span>
                        </h2>

                        {/* Story Content */}
                        <div className="max-w-4xl mx-auto space-y-6 mb-16">
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                                Welcome to <span className="font-semibold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Lotus Spa</span>, where artistry meets luxury in every detail. We&apos;ve dedicated ourselves to redefining nail care through exceptional service and innovative techniques.
                            </p>

                            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                Our team of master nail artists combines years of expertise with cutting-edge techniques to deliver experiences that transcend ordinary nail care. Every visit is a journey of relaxation, creativity, and personal expression.
                            </p>

                            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                From classic elegance to avant-garde designs, we believe your nails are a canvas for self-expression. Let us transform your vision into reality in our tranquil, luxury environment.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-300/30 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className="mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white/5 backdrop-blur-lg border-t border-white/10">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <div className="grid md:grid-cols-4 gap-8 text-center">

                            {/* Happy Clients */}
                            <div className={`group transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="mb-4">
                                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                        {counters.clients}+
                                    </div>
                                    <div className="text-white/60 font-light text-sm uppercase tracking-wider mt-2">
                                        Happy Clients
                                    </div>
                                </div>
                                <Users className="w-8 h-8 text-pink-300 mx-auto opacity-60" />
                            </div>

                            {/* Rating */}
                            <div className={`group transition-all duration-700 delay-200 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="mb-4">
                                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                        5.0
                                    </div>
                                    <div className="text-white/60 font-light text-sm uppercase tracking-wider mt-2">
                                        Average Rating
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            {/* Specialists */}
                            <div className={`group transition-all duration-700 delay-300 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="mb-4">
                                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                        {counters.specialists}+
                                    </div>
                                    <div className="text-white/60 font-light text-sm uppercase tracking-wider mt-2">
                                        Nail Artists
                                    </div>
                                </div>
                                <Award className="w-8 h-8 text-pink-300 mx-auto opacity-60" />
                            </div>

                            {/* Experience */}
                            <div className={`group transition-all duration-700 delay-400 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="mb-4">
                                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                        {counters.experience}+
                                    </div>
                                    <div className="text-white/60 font-light text-sm uppercase tracking-wider mt-2">
                                        Years Experience
                                    </div>
                                </div>
                                <Sparkles className="w-8 h-8 text-pink-300 mx-auto opacity-60" />
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-16">
                            <div className={`transition-all duration-700 delay-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <p className="text-white/60 mb-6 text-lg">Ready to experience luxury nail care?</p>
                                <button className="group px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Book Your Appointment
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
                .animate-twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default About;