import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Zap, Globe, FileCheck, Users, Award, Menu, X, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function BlockVerifyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Dr. Sarah Chen", role: "Registrar, MIT", content: "BlockVerify transformed our credential verification process. We've eliminated fraud and reduced processing time by 95%." },
    { name: "Michael Rodriguez", role: "HR Director, Google", content: "Instant verification of candidates' credentials has streamlined our hiring process significantly." },
    { name: "Emma Thompson", role: "Graduate Student", content: "My employers could verify my degree instantly. No more waiting weeks for official transcripts!" }
  ];

  const stats = [
    { number: "500K+", label: "Documents Verified" },
    { number: "1,200+", label: "Institutions" },
    { number: "99.9%", label: "Uptime" },
    { number: "< 5 sec", label: "Avg. Verification Time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        {}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-[1000ms]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">BlockVerify</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors duration-200">How It Works</a>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors duration-200">Testimonials</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-4">
              <a href="#how-it-works" className="block text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors">Testimonials</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="text-green-400 text-sm font-medium">🔥 Trusted by 1,200+ institutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Verify Credentials
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Instantly & Securely
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              End credential fraud forever. Our blockchain-powered platform provides instant, tamper-proof verification for degrees, certificates, and professional credentials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <FileCheck className="w-5 h-5" />
                <span>Verify Document</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-slate-800/50 border border-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three simple steps to revolutionize how credentials are issued, stored, and verified globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Institution Issues", 
                desc: "Educational institutions and certification bodies upload credentials to our secure blockchain network.",
                icon: <Users className="w-8 h-8" />
              },
              { 
                step: "02", 
                title: "Blockchain Records", 
                desc: "Each credential receives a unique, immutable digital fingerprint stored on the blockchain.",
                icon: <Shield className="w-8 h-8" />
              },
              { 
                step: "03", 
                title: "Instant Verification", 
                desc: "Employers and verifiers can authenticate any credential in under 5 seconds, anywhere in the world.",
                icon: <Zap className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                      {item.icon}
                    </div>
                    <span className="text-6xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose BlockVerify?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built for the future of credential verification with enterprise-grade security and consumer-friendly experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "Tamper-Proof Security", desc: "Blockchain technology ensures credentials cannot be altered or forged" },
              { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Verify any document in under 5 seconds, 24/7 globally" },
              { icon: <Globe className="w-6 h-6" />, title: "Global Recognition", desc: "Accepted worldwide by employers, institutions, and governments" },
              { icon: <Award className="w-6 h-6" />, title: "Industry Standard", desc: "Compliant with international verification standards and regulations" },
              { icon: <Users className="w-6 h-6" />, title: "Multi-Stakeholder", desc: "Serves students, institutions, employers, and verification agencies" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "99.9% Uptime", desc: "Enterprise-grade infrastructure with guaranteed availability" }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted Globally</h2>
            <p className="text-xl text-slate-300">See what our users say about BlockVerify</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="text-lg font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-400">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-slate-600'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Credential Verification?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of institutions and millions of students already using BlockVerify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="bg-blue-700/50 border border-blue-400/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600/50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BlockVerify</span>
              </div>
              <p className="text-slate-400">
                Secure, instant credential verification powered by blockchain technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 BlockVerify. All rights reserved. Built with ❤️ for the future of credentials.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}