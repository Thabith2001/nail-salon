"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, X, Menu } from "lucide-react";
import { links } from "@/data/staticData";
import { useRouter, usePathname } from "next/navigation";
import {useSparkles} from "@/helper/useAnimation";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const router = useRouter();
    const pathname = usePathname();
    const sparkle = useSparkles(15);

    // Background on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll spy (for # sections only)
    useEffect(() => {
        const options = { threshold: 0.5 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        links.forEach((link) => {
            if (link.href.startsWith("#")) {
                const section = document.getElementById(link.href.replace("#", ""));
                if (section) observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Track page route (non-# links)
    useEffect(() => {
        if (!pathname.startsWith("/#")) {
            setActiveSection(pathname);
        }
    }, [pathname]);

    // Smooth scroll + navigation
    const handleSmoothScroll = (to) => {
        if (to.startsWith("#")) {
            const element = document.getElementById(to.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            router.push(to);
        }
        setIsOpen(false);
    };

    // Normalized active check (works for both desktop & mobile)
    const isLinkActive = (link) => {
        if (link.href.startsWith("#")) {
            return activeSection === link.href.replace("#", "");
        }
        return pathname === link.href;
    };

    return (
        <>
            <header
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 
        ${
                    scrolled
                        ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
                        : "bg-transparent"
                }`}
            >
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


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group cursor-pointer"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                                    <Image
                                        src="/images/lotus_logo.png"
                                        alt="Lotus Logo"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Lotus Salon
                </span>
                                <span className="text-xs text-white/70 font-light tracking-wider">
                  LUXURY NAILS
                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center">
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 shadow-lg">
                                <ul className="flex items-center space-x-8">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <button
                                                onClick={() => handleSmoothScroll(link.href)}
                                                className={`relative text-sm font-medium transition-all duration-300 
                          ${
                                                    isLinkActive(link)
                                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                                                        : "text-white/80 hover:text-pink-300"
                                                }`}
                                            >
                                                {link.name}
                                                {isLinkActive(link) && (
                                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <Link
                                href="/booking"
                                className="relative inline-block group"
                            >
                <span className="relative z-10 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-pink-500/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Book Now</span>
                </span>
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                />

                {/* Mobile Menu */}
                <div
                    className={`relative h-full flex flex-col justify-center items-center transition-all duration-500 ${
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                    <nav className="space-y-8 text-center">
                        {links.map((link, index) => (
                            <div
                                key={link.href}
                                className="transition-all duration-500"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => handleSmoothScroll(link.href)}
                                    className={`block text-3xl font-light transition-colors duration-300 ${
                                        isLinkActive(link)
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                                            : "text-white hover:text-pink-300"
                                    }`}
                                >
                                    {link.name}
                                </button>
                            </div>
                        ))}

                        {/* CTA */}
                        <div className="pt-8">
                            <Link
                                href="/booking"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
                            >
                                <Sparkles className="w-5 h-5" />
                                <span className="text-lg">Book Your Session</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
