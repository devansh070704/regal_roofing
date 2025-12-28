
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ChevronDown,
    ArrowRight,
    MessageSquare,
    CheckCircle,
    Loader2,
    Shield,
    Star,
    Zap
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { FloatingCallButton } from '../components/FloatingCallButton';

const ContactPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitting(false);
                setIsSuccess(true);
                form.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Form submission error:', error);
            alert('There was an error submitting your form. Please call us directly at 020 8989 2385');
        }
    };

    const benefits = [
        { icon: Shield, title: 'Licensed & Insured', text: 'Peace of mind guaranteed' },
        { icon: Star, title: '5-Star Rated', text: 'Trusted by 500+ locals' },
        { icon: Clock, title: 'Fast Response', text: 'Quotes within 24 hours' },
        { icon: Zap, title: 'Emergency Service', text: 'Available 24/7' },
    ];

    const services = [
        'Chimney Repairs',
        'Flat Roof Repairs',
        'Gutter Repairs',
        'Guttering Systems',
        'Roof Tile Repairs',
        'Slate Roof Repairs',
        'Tiled Roof Repairs',
        'New Zinc Valleys',
        'New Lead Valleys',
        'New Lead Flashings'
    ];

    const contactInfo = [
        { icon: Phone, label: 'Phone', value: '020 8989 2385', href: 'tel:02089892385', description: 'Mon-Fri 8am-6pm, Sat 9am-4pm' },
        { icon: Mail, label: 'Email', value: 'regalroofing@ymail.com', href: 'mailto:regalroofing@ymail.com', description: 'We respond within 24 hours' },
        { icon: MapPin, label: 'Office', value: '37 Bushey Avenue, London E18 2DT', href: 'https://maps.google.com', description: 'Serving East London & Essex' },
    ];

    const faqs = [
        {
            question: "Do you offer free estimates?",
            answer: "Yes! We provide comprehensive roofing inspections and detailed estimates at no cost to you. Our estimates are valid for 30 days."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Absolutely. We are CORC certified, fully insured with £10M public liability cover, and carry employers' liability insurance. All our operatives are fully trained and certified."
        },
        {
            question: "How long does a roof replacement take?",
            answer: "Most residential roof replacements are completed within 2-3 days, depending on the size of your roof and weather conditions. We work efficiently to minimize disruption to your daily life."
        },
        {
            question: "What warranties do you offer?",
            answer: "We provide comprehensive guarantees on all our work, with manufacturer warranties on materials. As CORC certified roofers, our workmanship guarantees are backed by industry standards ensuring peace of mind."
        },
        {
            question: "Do you offer financing?",
            answer: "Yes, we partner with several top financial institutions to offer flexible financing options, including 0% interest plans for qualified homeowners."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Contact Us | Free Estimates"
                description="Get a free no-obligation quote today. Contact our team for emergency repairs, inspections, or new roof consultations."
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/homepage-hero-uk.jpg"
                        alt="Contact Elite Roofing"
                        className="w-full h-full object-cover brightness-[0.25]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl"
                    >
                        Let's Protect Your Home
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        Get a free, no-obligation quote within 24 hours. Our expert team is ready to help with all your roofing needs.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Bar */}
            <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-blue-600">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 sm:gap-3 text-white">
                                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-sm sm:text-base">{benefit.title}</p>
                                    <p className="text-blue-100 text-xs sm:text-sm hidden sm:block">{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Container */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black rounded-3xl p-8 md:p-12 lg:p-16 h-full"
                        >
                            <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Contact Information</span>
                            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get in Touch</h2>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                We're here to answer your questions and provide expert guidance for your roofing project.
                            </p>

                            <div className="mt-10 space-y-6">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                                            <item.icon className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                                            <p className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">{item.value}</p>
                                            <p className="text-slate-500 text-sm mt-0.5">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 aspect-video rounded-2xl overflow-hidden bg-slate-800 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800"
                                    alt="Location map"
                                    className="w-full h-full object-cover opacity-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                        View on Google Maps
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Quote Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-100 flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <MessageSquare className="w-5 h-5 text-blue-600" />
                                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">Free Quote</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">Request an Estimate</h2>
                            <p className="mt-4 text-slate-500 leading-relaxed mb-8">
                                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                            </p>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 max-w-xs mb-8">
                                        Thank you for contacting us. We will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm tracking-wide hover:bg-black transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Web3Forms Configuration */}
                                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_API_KEY_HERE" />
                                    <input type="hidden" name="subject" value="New Roofing Inquiry from Regal Roofing Website" />
                                    <input type="hidden" name="from_name" value="Regal Roofing Website" />
                                    {/* Spam protection */}
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Smith"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="020 8989 2385"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                                        <select name="service" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white text-slate-600">
                                            <option value="">Select a service...</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-widest hover:bg-blue-700 transition-all uppercase flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Request
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-slate-400 text-xs">
                                        Or call now: <a href="tel:02089892385" className="text-blue-600 font-medium hover:underline">020 8989 2385</a>
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Other Services Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Services</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tighter">
                            Other Services
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            We specialist in a range of roofing repairs including the following:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center hover:border-blue-600 hover:shadow-lg transition-all"
                            >
                                <p className="text-sm font-medium text-slate-700">{service}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                            QUICK QUOTE
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Simply complete the form above and a member of the team will be in touch with your bespoke quote within 24 hours!
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas We Cover Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Service Areas</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tighter">
                            AREAS WE COVER
                        </h2>
                        <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Regal Roof Repairs cover a large area providing a range of roofing services including roof repairs. We also deal with a number of different roofing styles, materials and designs and can always offer replacements, repairs and refurbishment to ensure your roof is in great condition. Our team can also work on both commercial and domestic properties.
                        </p>
                        <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            If you would like more information on our services, do not hesitate to get in touch with our team. Call now on <a href="tel:02089892385" className="text-blue-600 font-bold hover:underline">020 8989 2385</a> or fill in our contact form to make an enquiry. Even if your area is not listed below, we are still happy to provide a fast response and free estimates to all clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {['Basildon', 'Brentwood', 'Enfield', 'Epping', 'Ilford', 'Romford', 'Stratford', 'Walthamstow'].map((area, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white border-2 border-blue-600 rounded-xl p-6 text-center hover:bg-blue-50 transition-all"
                            >
                                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <p className="font-bold text-black">{area}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">FAQ</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black tracking-tighter">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                            Got questions? We've got answers. Here are the most common questions we receive from homeowners.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-black text-base md:text-lg pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
                    >
                        Schedule your free consultation today and see why we're the most trusted roofer in East London and Essex.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="tel:02089892385"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call 020 8989 2385
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <FloatingCallButton />
        </div>
    );
};

export default ContactPage;
