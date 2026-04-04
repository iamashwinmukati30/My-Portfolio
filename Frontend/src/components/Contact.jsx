import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // REPLACE THIS URL WITH YOUR ACTUAL BACKEND ENDPOINT
      const BACKEND_URL = 'http://127.0.0.1:8000/api/contact/';

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-5 tracking-tight">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent dark:from-blue-400 dark:to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left Info Panel — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Intro Card */}
            <div className="bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-7 border border-gray-100 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Let's work together!</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:mukatiashwin30@gmail.com"
              className="group flex items-center gap-5 bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm font-bold text-gray-800 dark:text-white truncate">mukatiashwin30@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">Indore, India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/iamashwinmukati30/"
                  target="_blank" rel="noreferrer"
                  className="w-11 h-11 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://github.com/iamashwinmukati30"
                  target="_blank" rel="noreferrer"
                  className="w-11 h-11 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                >
                  <FaGithub className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700/50 relative overflow-hidden">
              
              {/* Submission Feedback Overlay */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4 animate-bounce">
                      <FaCheckCircle className="text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setStatus({ ...status, success: false })}
                      className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
              
              {status.error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm">
                  <FaExclamationCircle className="shrink-0" />
                  <p>{status.error}</p>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-600 dark:text-gray-400">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ashwin Mukati"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white text-sm transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-600 dark:text-gray-400">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white text-sm transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-600 dark:text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white text-sm transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-600 dark:text-gray-400">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white text-sm resize-none transition-all placeholder:text-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`group w-full py-3.5 flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 shadow-lg ${
                    status.submitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5'
                  }`}
                >
                  {status.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
