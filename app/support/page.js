"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Code, Zap, Shield, CheckCircle } from "lucide-react"

// Custom Components
const Button = ({ children, onClick, disabled, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

const Input = ({ id, name, type = "text", value, onChange, placeholder, required, className = "" }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ${className}`}
    />
  )
}

const Label = ({ htmlFor, children, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
      {children}
    </label>
  )
}

const Textarea = ({ id, name, value, onChange, placeholder, required, className = "" }) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none ${className}`}
    />
  )
}

const Card = ({ children, className = "" }) => {
  return <div className={`rounded-lg border shadow-sm ${className}`}>{children}</div>
}

const CardHeader = ({ children, className = "" }) => {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>
}

const CardTitle = ({ children, className = "" }) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm mt-1.5 ${className}`}>{children}</p>
}

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { email, subject, message } = formData
      const response = await fetch(
        `https://portfolio-website-server-gilt.vercel.app/?email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`,
      )

      if (response.ok) {
        setFormData({ email: "", subject: "", message: "" })
        setShowSuccess(true)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  return (
    <div className="min-h-screen bg-nightfall ">
      {/* Success Popup */}
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-500 transform ${
          showSuccess ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 load-hero ">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge software solutions? Let&apos;s discuss how we can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 hero-stats-load ">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Why Choose Our Software Solutions?</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                We specialize in delivering innovative software solutions that drive business growth. Our team of expert
                developers creates scalable, secure, and user-friendly applications tailored to your specific needs.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-8 transition-all duration-300 ">
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg backdrop-blur-sm cursor-pointer
               hover:bg-purple-500/60 night-fall-stats transition-all duration-300 shadow-2xl hover:shadow-sm group "
              style={{animationDelay: '0s'}}>
                <Code className="w-8 h-8 text-purple-400 mt-1 group-hover:text-white " />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
                  <p className="text-gray-300">
                    Tailored software solutions built from the ground up to match your business requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-500/30 rounded-lg backdrop-blur-sm cursor-pointer
               hover:bg-blue-500/60 transition-all duration-300 shadow-2xl hover:shadow-sm night-fall-stats " 
              style={{animationDelay: '0.25s'}}>
                <Zap className="w-8 h-8 text-yellow-500/80 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
                  <p className="text-gray-300">
                    Optimized applications that deliver exceptional speed and reliability for your users.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-500/30 rounded-lg backdrop-blur-sm cursor-pointer
               hover:bg-blue-500/60 transition-all duration-300 shadow-2xl hover:shadow-sm night-fall-stats "
              style={{animationDelay: '0.5s'}}>
                <Shield className="w-8 h-8 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300">
                    Bank-level security measures to protect your data and ensure compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <Card className="bg-blue-800/20 border-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">Contact Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-200">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>nightfallwebworks@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Tech Street, Innovation City, IC 12345</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="main-hero-load mt-10 ">
            <Card className="bg-blue-800/20 border-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 ">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="bg-blue-900/50 border-white text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                      className="bg-blue-900/50 border-white text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                      required
                      className="min-h-[150px] bg-blue-900/50 border-white text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-400/80 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-800/20 rounded-lg backdrop-blur-sm border border-white">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  We&apos;ll review your message within 2-4 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Schedule a consultation call to discuss your needs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Provide a detailed proposal with timeline and pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
