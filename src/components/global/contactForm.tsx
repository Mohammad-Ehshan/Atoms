"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })
  const [activeField, setActiveField] = useState<string | null>(null)
  const [formProgress, setFormProgress] = useState(0)
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [windowWidth, setWindowWidth] = useState(1200) // Default fallback value

  // Handle window resize and set initial width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Initialize particles for background animation
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  // Calculate form progress
  useEffect(() => {
    const fields = Object.values(formData)
    const filledFields = fields.filter((field) => field.trim() !== "").length
    setFormProgress((filledFields / fields.length) * 100)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ text: "", type: "" })

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      )
      .then(
        () => {
          setMessage({ text: "Message sent successfully! 🚀", type: "success" })
          form.current?.reset()
          setFormData({ from_name: "", from_email: "", message: "" })
        },
        (error) => {
          setMessage({ text: `Failed to send: ${error.text}`, type: "error" })
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  // Animated geometric background
  const GeometricBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
          </pattern>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated diagonal lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={-100}
            y1={i * 150}
            x2={windowWidth + 100} // Use state value instead of window.innerWidth
            y2={i * 150 - 200}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden md:mb-0 md:mt-0 mb-8 mt-8">
      <GeometricBackground />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Let's Connect</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Turn Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Ideas Into Reality?
                </span>
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Drop us a message and let's discuss how we can help bring your vision to life. Every great project
                starts with a conversation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "24h", label: "Response Time" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Form Progress</span>
                <span className="text-blue-400 text-sm font-medium">{Math.round(formProgress)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${formProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("from_name")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      activeField === "from_name"
                        ? "border-blue-500 focus:ring-blue-500/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formData.from_name && (
                    <motion.div className="absolute right-3 top-10" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("from_email")}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      activeField === "from_email"
                        ? "border-blue-500 focus:ring-blue-500/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formData.from_email && (
                    <motion.div className="absolute right-3 top-10" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    rows={5}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      activeField === "message"
                        ? "border-blue-500 focus:ring-blue-500/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                    placeholder="Tell us about your project, ideas, or how we can help you..."
                  />
                  {formData.message && (
                    <motion.div className="absolute right-3 top-10" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || formProgress < 100}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    formProgress === 100 && !isSubmitting
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-700 cursor-not-allowed"
                  }`}
                  whileHover={formProgress === 100 ? { scale: 1.02 } : {}}
                  whileTap={formProgress === 100 ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Success/Error Message */}
                <AnimatePresence>
                  {message.text && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-center space-x-2 ${
                        message.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {message.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{message.text}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}