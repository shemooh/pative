"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProblemForm {
  message: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  web3AccessKey: string;
}

interface FullFormData extends ContactForm, ProblemForm {}

const SparkleDot = ({ style, animatePosition }: { style: React.CSSProperties; animatePosition: boolean }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!animatePosition) return;
    const el = ref.current;
    let animationFrameId: number;
    let dx = (Math.random() - 0.5) * 0.75;
    let dy = (Math.random() - 0.5) * 0.75;

    const animate = () => {
      if (el) {
        const rect = el.getBoundingClientRect();
        let left = parseFloat(el.style.left) || el.offsetLeft;
        let top = parseFloat(el.style.top) || el.offsetTop;

        if (left < 0 || left > window.innerWidth - rect.width) dx = -dx;
        if (top < 0 || top > window.innerHeight - rect.height) dy = -dy;

        el.style.left = left + dx + "px";
        el.style.top = top + dy + "px";
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [animatePosition]);

  return (
    <motion.div
      ref={ref}
      className="absolute bg-white rounded-full pointer-events-none"
      style={style}
      animate={{ opacity: [0.5, 0.1, 0.5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Sparkle size={10} className="text-white" />
    </motion.div>
  );
};

const GlowText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
    {children}
  </span>
);

export default function Hero() {
  const [mouseHover, setMouseHover] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [problemData, setProblemData] = useState<ProblemForm | null>(null);

  const {
    register: registerProblem,
    handleSubmit: handleSubmitProblem,
    formState: { errors: problemErrors },
  } = useForm<ProblemForm>();

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    reset: resetContact,
    formState: { errors: contactErrors },
  } = useForm<ContactForm>({
    defaultValues: {
      web3AccessKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual access key here
    },
  });

  const onSubmitProblem: SubmitHandler<ProblemForm> = (data) => {
    setProblemData(data);
    setShowContactForm(true);
  };

  const onSubmitContact: SubmitHandler<ContactForm> = async (data) => {
    if (!problemData) return;

    const fullData = {
      ...data,
      ...problemData,
      access_key: data.web3AccessKey,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fullData),
      });
      const result = await response.json();

      if (response.ok && result.success === true) {
        setShowPopup(true);
        resetContact();
        setShowContactForm(false);
        setProblemData(null);
      } else {
        // No error popup unless network or fetch error
        console.warn("Submission unusual response, no failure popup:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setShowErrorPopup(true);
    }
  };

  const inputBaseClasses = "mt-1 w-full rounded-lg px-6 py-2 border bg-black text-gray-400 placeholder-gray-500 shadow-[0_0_12px_rgba(99,102,241,0.2)] focus:outline-none transition-all";

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-black text-white overflow-hidden pt-40 pb-40"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[52.1, 36.3, 66.5, 82.2, 75.6, 91.0].map((left, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-2xl bg-gradient-to-r from-yellow-300/10 to-amber-500/10 transition-transform duration-300 ease-in-out"
            style={{
              left: `${left}%`,
              top:
                i === 0
                  ? "95.6%"
                  : i === 1
                  ? "3.1%"
                  : i === 2
                  ? "18.4%"
                  : i === 3
                  ? "13.4%"
                  : i === 4
                  ? "69.2%"
                  : "55.2%",
              transform: "translate(0,0) scale(1)",
            }}
          />
        ))}
      </div>

      {[ // Sparkle dots
        { width: 16, height: 16, top: "10%", left: "20%", filter: "blur(1.5px)" },
        { width: 12, height: 12, top: "30%", left: "35%", filter: "blur(1.2px)" },
        { width: 20, height: 20, top: "60%", left: "70%", filter: "blur(1.8px)" },
        { width: 14, height: 14, top: "75%", left: "45%", filter: "blur(0.9px)" },
      ].map((style, index) => (
        <SparkleDot key={index} animatePosition={mouseHover} style={{ ...style, position: "absolute" }} />
      ))}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center mb-6">
          <motion.span whileHover={{ scale: 1.05, rotate: 3 }} className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-700/20 to-purple-700/20 text-indigo-400 text-lg font-semibold flex items-center mx-auto shadow-md cursor-pointer select-none">
            <Sparkle size={20} className="mr-2 animate-pulse text-indigo-500" />
            Making Brands Great
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl font-extrabold mb-8 tracking-tight cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          What do you want to <GlowText>achieve?</GlowText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Transform your business with ease.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="max-w-3xl mx-auto text-left">
          {!showContactForm && !showPopup && !showErrorPopup && (
            <form onSubmit={handleSubmitProblem(onSubmitProblem)} className="mb-8">
              <textarea
                id="message"
                {...registerProblem("message", { required: "Problem description is required" })}
                placeholder="Enter your challenge or problem"
                rows={2}
                className={`${inputBaseClasses} border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 resize-none`}
              />
              {problemErrors.message && <p className="text-red-500 text-sm mt-1">{problemErrors.message.message}</p>}
              <button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg">
                Next
              </button>
            </form>
          )}

          {showContactForm && !showPopup && !showErrorPopup && (
            <form onSubmit={handleSubmitContact(onSubmitContact)} className="mb-8 space-y-6">
              <input
                id="name"
                type="text"
                {...registerContact("name", { required: "Name is required" })}
                placeholder="Your name"
                className={`${inputBaseClasses} border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300`}
              />
              {contactErrors.name && <p className="text-red-500 text-sm mt-1">{contactErrors.name.message}</p>}

              <input
                id="email"
                type="email"
                {...registerContact("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your email"
                className={`${inputBaseClasses} border-indigo-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-400`}
              />
              {contactErrors.email && <p className="text-red-500 text-sm mt-1">{contactErrors.email.message}</p>}

              <input
                id="phone"
                type="tel"
                {...registerContact("phone")}
                placeholder="Your phone number (optional)"
                className={`${inputBaseClasses} border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300`}
              />

              <input
                id="web3AccessKey"
                type="hidden"
                {...registerContact("web3AccessKey", { required: true })}
                value="YOUR_WEB3FORMS_ACCESS_KEY" // replace with your actual access key
              />

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg">
                Get Strategy
              </button>
            </form>
          )}

          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-indigo-900 rounded-lg p-8 max-w-md mx-auto shadow-lg text-indigo-200 text-center relative animate-fadeIn">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-3 right-3 text-indigo-400 hover:text-indigo-200 transition text-3xl font-bold"
                  aria-label="Close popup"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                <p>We have received your inquiry and will get back to you soon.</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg focus:outline-none transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {showErrorPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-red-900 rounded-lg p-8 max-w-md mx-auto shadow-lg text-red-200 text-center relative animate-fadeIn">
                <button
                  onClick={() => setShowErrorPopup(false)}
                  className="absolute top-3 right-3 text-red-400 hover:text-red-200 transition text-3xl font-bold"
                  aria-label="Close error popup"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-semibold mb-2">Submission Failed</h2>
                <p>Sorry, your submission could not be sent. Please try again later.</p>
                <button
                  onClick={() => setShowErrorPopup(false)}
                  className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg focus:outline-none transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
