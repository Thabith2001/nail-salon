"use client"
import React, {useState, useEffect} from 'react';
import {
    MapPin,
    Phone,
    Clock,
    Send,
    MessageCircle,
    Calendar,
    Star,
    Heart,
    CheckCircle,
    Navigation,
    Award,
    Shield
} from 'lucide-react';
import {useSparkles} from "@/helper/useAnimation";
import {socialLinks, businessHours, contactMethods, services, timeSlots} from "@/data/staticData";


const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [activeContactMethod, setActiveContactMethod] = useState('form');
    const sparkles = useSparkles(15);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.2}
        );

        const section = document.getElementById('contact');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                date: '',
                time: '',
                message: ''
            });
            setTimeout(() => setFormStatus(''), 3000);
        }, 2000);
    };

    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    return (
        <section
            className="w-screen min-h-screen overflow-hidden relative py-20"
            id="contact"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
                {/* Animated sparkles */}
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

                {/* Floating gradient orbs */}
                <div
                    className="absolute top-1/5 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/5 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {/* Badge */}
                    <div
                        className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                        <MessageCircle className="w-4 h-4 text-pink-400 mr-3"/>
                        <span className="text-sm font-medium text-white/90 tracking-wide">GET IN TOUCH</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                        <span
                            className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                            Book Your
                        </span>
                        <span
                            className="block bg-gradient-to-r from-pink-300 via-rose-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                            Dream Session
                        </span>
                    </h2>

                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your nails? Contact us today to schedule your luxury nail experience
                    </p>
                </div>

                {/* Contact Methods */}
                <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {contactMethods.map((method, index) => (
                        <div
                            key={method.id}
                            className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 cursor-pointer ${
                                method.primary ? 'ring-2 ring-pink-500/50' : ''
                            }`}
                            onClick={() => setActiveContactMethod(method.id)}
                        >
                            <div
                                className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                                    method.primary
                                        ? 'bg-gradient-to-br from-pink-500 to-purple-600'
                                        : 'bg-white/10 backdrop-blur-sm border border-white/20'
                                }`}>
                                <method.icon className="w-8 h-8 text-white"/>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                            <p className="text-white/70 text-sm mb-4">{method.description}</p>
                            <p className="text-pink-300 font-semibold mb-4">{method.value}</p>

                            <button
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                                    method.primary
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                                }`}>
                                {method.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>

                    {/* Booking Form */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                        <div className="flex items-center space-x-3 mb-8">
                            <Calendar className="w-6 h-6 text-pink-400"/>
                            <h3 className="text-2xl font-bold text-white">Book Appointment</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Email Address
                                        *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Service *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                    >
                                        <option value="" className="bg-slate-800">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}
                                                    className="bg-slate-800">{service}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Preferred Date
                                        *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        min={getTomorrowDate()}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Preferred Time
                                        *</label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-pink-300/50 transition-colors duration-300"
                                    >
                                        <option value="" className="bg-slate-800">Select time</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time} className="bg-slate-800">{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-2">Special Requests</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-300/50 transition-colors duration-300 resize-none"
                                    placeholder="Any special requests or preferences..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <div
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Booking...</span>
                                    </>
                                ) : formStatus === 'success' ? (
                                    <>
                                        <CheckCircle className="w-5 h-5"/>
                                        <span>Booking Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5"/>
                                        <span>Book Appointment</span>
                                    </>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div
                                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center">
                                    Thank you! We&apos;ll contact you within 2 hours to confirm your appointment.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Business Info & Location */}
                    <div className="space-y-8">
                        {/* Business Hours */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Clock className="w-6 h-6 text-pink-400"/>
                                <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                            </div>

                            <div className="space-y-4">
                                {businessHours.map((schedule, index) => (
                                    <div key={index}
                                         className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                        <div>
                                            <div className="text-white font-medium">{schedule.day}</div>
                                            <div className="text-white/70 text-sm">{schedule.hours}</div>
                                        </div>
                                        <div
                                            className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                                            {schedule.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location & Directions */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <MapPin className="w-6 h-6 text-pink-400"/>
                                <h3 className="text-2xl font-bold text-white">Visit Our Spa</h3>
                            </div>

                            {/* Map Placeholder */}
                            <div
                                className="relative h-48 bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                                <Navigation className="w-16 h-16 text-white/30"/>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-2"/>
                                        <p className="text-white font-medium">Lotus Spa Location</p>
                                        <p className="text-white/70 text-sm">Interactive map would go here</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-pink-400 mt-1"/>
                                    <div>
                                        <p className="text-white font-medium">Address</p>
                                        <p className="text-white/70">123 Beauty Lane, Spa District<br/>Luxury City, LC
                                            12345</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-pink-400"/>
                                    <div>
                                        <p className="text-white font-medium">Phone</p>
                                        <p className="text-pink-300">(555) 123-NAILS</p>
                                    </div>
                                </div>

                                <button
                                    className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                                    <Navigation className="w-5 h-5"/>
                                    <span>Get Directions</span>
                                </button>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Heart className="w-6 h-6 text-pink-400"/>
                                <h3 className="text-2xl font-bold text-white">Follow Us</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`group flex items-center justify-center space-x-3 p-4 bg-gradient-to-r ${social.color} rounded-xl hover:scale-105 transition-transform duration-300`}
                                    >
                                        <social.icon className="w-5 h-5 text-white"/>
                                        <span className="text-white font-medium">{social.label}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="text-center">
                                <p className="text-white/70 mb-4">Stay updated with our latest work</p>
                                <div className="flex justify-center space-x-6 text-sm text-white/60">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400"/>
                                        <span>5.0 Rating</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Heart className="w-4 h-4 text-pink-400"/>
                                        <span>12.5K Followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div
                    className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center transition-all duration-1000 delay-600 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h3 className="text-2xl font-bold text-white mb-8">Why Choose Lotus Spa?</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-white"/>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Safe & Hygienic</h4>
                            <p className="text-white/70 text-sm">Hospital-grade sanitation</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white"/>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Award Winning</h4>
                            <p className="text-white/70 text-sm">Recognized excellence</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-white"/>
                            </div>
                            <h4 className="text-white font-semibold mb-2">5-Star Rated</h4>
                            <p className="text-white/70 text-sm">500+ happy clients</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white"/>
                            </div>
                            <h4 className="text-white font-semibold mb-2">Satisfaction Guaranteed</h4>
                            <p className="text-white/70 text-sm">100% satisfaction promise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;