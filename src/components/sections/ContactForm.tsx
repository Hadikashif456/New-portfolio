"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section className="py-32 px-8 bg-black text-white border-t border-gray-900" id="contact">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-center">GET IN TOUCH</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono text-gray-500 tracking-widest">NAME</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-gray-700"} py-4 text-xl focus:outline-none focus:border-white transition-colors`}
                                placeholder="Your Name"
                            />
                            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono text-gray-500 tracking-widest">EMAIL</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-transparent border-b ${errors.email ? "border-red-500" : "border-gray-700"} py-4 text-xl focus:outline-none focus:border-white transition-colors`}
                                placeholder="your@email.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-mono text-gray-500 tracking-widest">MESSAGE</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full bg-transparent border-b ${errors.message ? "border-red-500" : "border-gray-700"} py-4 text-xl focus:outline-none focus:border-white transition-colors resize-none`}
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                    </div>

                    <div className="flex justify-center pt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-white text-black px-12 py-4 text-lg font-bold tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "SENDING..." : submitted ? "SENT!" : "SEND MESSAGE"}
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}
