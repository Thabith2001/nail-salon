"use client"
import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Clock,
    Star,
    Heart,
    Palette,
    Scissors,
    Gem,
    Brush,
    ChevronRight,
    Check,
    Award,
    Users,
    Calendar,
    ArrowRight
} from 'lucide-react';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const serviceCategories = [
        { id: 'all', name: 'All Services', icon: Sparkles },
        { id: 'manicure', name: 'Manicure', icon: Brush },
        { id: 'pedicure', name: 'Pedicure', icon: Heart },
        { id: 'nail-art', name: 'Nail Art', icon: Palette },
        { id: 'extensions', name: 'Extensions', icon: Gem }
    ];

    const services = [
        {
            id: 1,
            category: 'manicure',
            name: 'Classic Manicure',
            description: 'Traditional nail care with cuticle treatment, shaping, and polish application',
            price: 45,
            duration: 45,
            popularity: 'Most Popular',
            features: ['Cuticle Care', 'Nail Shaping', 'Hand Massage', 'Polish Application'],
            image: '/images/classic-manicure.jpg'
        },
        {
            id: 2,
            category: 'manicure',
            name: 'Gel Manicure',
            description: 'Long-lasting gel polish that stays chip-free for weeks',
            price: 65,
            duration: 60,
            popularity: 'Premium',
            features: ['Gel Polish', 'UV Curing', 'Long-lasting', 'Chip Resistant'],
            image: '/images/gel-manicure.jpg'
        },
        {
            id: 3,
            category: 'pedicure',
            name: 'Luxury Spa Pedicure',
            description: 'Complete foot care experience with exfoliation and relaxing massage',
            price: 75,
            duration: 75,
            popularity: 'Signature',
            features: ['Foot Soak', 'Exfoliation', 'Callus Removal', 'Massage'],
            image: '/images/spa-pedicure.jpg'
        },
        {
            id: 4,
            category: 'nail-art',
            name: 'Custom Nail Art',
            description: 'Unique hand-painted designs tailored to your personal style',
            price: 85,
            duration: 90,
            popularity: 'Artist Special',
            features: ['Custom Design', 'Hand Painted', 'Unique Patterns', 'Personal Consultation'],
            image: '/images/nail-art.jpg'
        },
        {
            id: 5,
            category: 'extensions',
            name: 'Acrylic Extensions',
            description: 'Durable and customizable nail extensions for length and strength',
            price: 95,
            duration: 120,
            popularity: 'New',
            features: ['Custom Length', 'Shape Options', 'Durable', 'Refillable'],
            image: '/images/acrylic-extensions.jpg'
        },
        {
            id: 6,
            category: 'extensions',
            name: 'Gel Extensions',
            description: 'Natural-looking extensions with flexible, lightweight feel',
            price: 105,
            duration: 105,
            popularity: 'Premium',
            features: ['Natural Look', 'Lightweight', 'Flexible', 'Damage-free'],
            image: '/images/gel-extensions.jpg'
        },
        {
            id: 7,
            category: 'nail-art',
            name: 'Seasonal Designs',
            description: 'Trendy seasonal nail art featuring current themes and colors',
            price: 70,
            duration: 75,
            popularity: 'Trending',
            features: ['Seasonal Themes', 'Trendy Colors', 'Instagram Worthy', 'Photo Session'],
            image: '/images/seasonal-designs.jpg'
        },
        {
            id: 8,
            category: 'manicure',
            name: 'French Manicure Deluxe',
            description: 'Elevated French manicure with modern twists and premium finishes',
            price: 55,
            duration: 50,
            popularity: 'Classic',
            features: ['Modern French', 'Premium Polish', 'Perfect Lines', 'Timeless Elegance'],
            image: '/images/french-manicure.jpg'
        }
    ];

    const filteredServices = selectedCategory === 'all'
        ? services
        : services.filter(service => service.category === selectedCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('services');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const getPopularityColor = (popularity) => {
        switch (popularity) {
            case 'Most Popular': return 'from-pink-500 to-rose-500';
            case 'Premium': return 'from-purple-500 to-indigo-500';
            case 'Signature': return 'from-yellow-500 to-orange-500';
            case 'Artist Special': return 'from-green-500 to-emerald-500';
            case 'New': return 'from-blue-500 to-cyan-500';
            case 'Trending': return 'from-red-500 to-pink-500';
            case 'Classic': return 'from-gray-500 to-slate-500';
            default: return 'from-pink-500 to-purple-500';
        }
    };

    return (
        <section
            className="w-screen min-h-screen overflow-hidden relative py-20"
            id="services"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
                {/* Animated sparkles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-30 animate-twinkle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Floating gradient orbs */}
                <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {/* Badge */}
                    <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                        <Scissors className="w-4 h-4 text-pink-400 mr-3" />
                        <span className="text-sm font-medium text-white/90 tracking-wide">OUR SERVICES</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                        <span className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                            Premium Nail
                        </span>
                        <span className="block bg-gradient-to-r from-pink-300 via-rose-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                            Experiences
                        </span>
                    </h2>

                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive range of luxury nail services, each designed to enhance your natural beauty
                    </p>
                </div>

                {/* Service Categories Filter */}
                <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {serviceCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white/80 hover:bg-white/20'
                            }`}
                        >
                            <category.icon className="w-4 h-4" />
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {filteredServices.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            {/* Popularity Badge */}
                            <div className={`absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r ${getPopularityColor(service.popularity)} text-white text-xs font-bold rounded-full shadow-lg`}>
                                {service.popularity}
                            </div>

                            {/* Service Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-pink-200/20 to-purple-200/20 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Palette className="w-16 h-16 text-white/30" />

                                {/* Service Category Icon Overlay */}
                                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    {service.category === 'manicure' && <Brush className="w-4 h-4 text-pink-300" />}
                                    {service.category === 'pedicure' && <Heart className="w-4 h-4 text-pink-300" />}
                                    {service.category === 'nail-art' && <Palette className="w-4 h-4 text-pink-300" />}
                                    {service.category === 'extensions' && <Gem className="w-4 h-4 text-pink-300" />}
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                                </div>

                                {/* Price and Duration */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                                        ${service.price}
                                    </div>
                                    <div className="flex items-center space-x-2 text-white/60 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>{service.duration} min</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-white/70 text-sm">
                                            <Check className="w-3 h-3 text-pink-300" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                    {service.features.length > 3 && (
                                        <div className="text-white/50 text-xs">
                                            +{service.features.length - 3} more features
                                        </div>
                                    )}
                                </div>

                                {/* Book Button */}
                                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Now</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Service Guarantees */}
                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                        Why Choose Our Services?
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Premium Quality</h4>
                            <p className="text-white/70 text-sm">Only the finest products and techniques</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Expert Artists</h4>
                            <p className="text-white/70 text-sm">Certified professionals with years of experience</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Hygienic Standards</h4>
                            <p className="text-white/70 text-sm">Hospital-grade sanitation and safety</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Satisfaction Guaranteed</h4>
                            <p className="text-white/70 text-sm">100% satisfaction or we make it right</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <p className="text-white/60 mb-8 text-lg">Ready to transform your nails?</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button className="group px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        <button className="group px-10 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                            <span className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                View Gallery
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
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

export default Services;