import React, { useState } from 'react';
import { Urbanist, Inter } from 'next/font/google';
import { HiUser, HiMail, HiChat } from 'react-icons/hi'; // Heroicons

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);

    // Fake submit simulation
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-nightfall text-white transition-all duration-300 px-6 py-16 md:px-28 flex flex-col items-center">
      <header className={`max-w-3xl text-center mb-12 ${urbanist.className}`}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Get in Touch <br />
          <span className="text-blue-500/80">We’d Love to Hear From You</span>
        </h1>
        <p className={`mt-4 text-gray-400 text-base md:text-lg ${inter.className}`}>
          Have questions, want to collaborate, or just want to say hi? Use the form below and we’ll get back to you as soon as possible.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#1e293b] rounded-xl p-8 shadow-lg"
        noValidate
      >
        {/* Name Input */}
        <div className="relative mb-6">
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`peer w-full pl-10 pr-4 py-3 rounded-md bg-nightfall border ${
              errors.name ? 'border-red-500' : 'border-gray-700'
            } placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
            placeholder="Your full name"
            autoComplete="name"
          />
          <label
            htmlFor="name"
            className="absolute left-10 top-3 text-gray-400 text-sm cursor-text transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Name
          </label>
          <HiUser className="absolute left-3 top-3.5 text-gray-500 peer-focus:text-blue-500" size={20} />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`peer w-full pl-10 pr-4 py-3 rounded-md bg-nightfall border ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            } placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className="absolute left-10 top-3 text-gray-400 text-sm cursor-text transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Email
          </label>
          <HiMail className="absolute left-3 top-3.5 text-gray-500 peer-focus:text-blue-500" size={20} />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Message Input */}
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={`peer w-full pt-5 pl-10 pr-4 rounded-md bg-nightfall border resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-700'
            } placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
            placeholder="Write your message here..."
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-10 top-3 text-gray-400 text-sm cursor-text transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Message
          </label>
          <HiChat className="absolute left-3 top-4 text-gray-500 peer-focus:text-blue-500" size={20} />
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 transition text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 flex justify-center items-center gap-2"
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success message */}
        {success && (
          <p className="mt-6 text-green-400 font-semibold text-center">
            Your message was sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
