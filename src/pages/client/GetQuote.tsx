import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, Code, PenTool, Video, CircleDollarSign
} from 'lucide-react';

const GetQuote: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web',
    budget: '',
    timeline: '',
    description: '',
    hearAbout: ''
  });

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Quote form submitted:', formData);
    alert('Thanks for your quote request! We will get back to you with a detailed proposal within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'web',
      budget: '',
      timeline: '',
      description: '',
      hearAbout: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-700 py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get a Free Quote</h1>
            <p className="text-xl text-accent-100">
              Tell us about your project, and we'll provide you with a detailed proposal and pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Options */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="space-y-6">
                {/* Web Development */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                  <div className="flex items-center mb-3">
                    <Code className="text-primary-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Web Development</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Responsive websites, e-commerce platforms, web applications, and more.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Starting at ₹50,000
                  </p>
                </div>

                {/* Thumbnail Design */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-600">
                  <div className="flex items-center mb-3">
                    <PenTool className="text-secondary-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Thumbnail Design</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Eye-catching thumbnails for YouTube, blogs, social media, and more.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Starting at ₹2,000 per design
                  </p>
                </div>

                {/* Video Editing */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-500">
                  <div className="flex items-center mb-3">
                    <Video className="text-accent-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Video Editing</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Professional video editing for promotional content, social media, and more.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Starting at ₹15,000 per video
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CircleDollarSign className="text-accent-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Competitive, transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDollarSign className="text-accent-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Fast turnaround times</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDollarSign className="text-accent-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Experienced, dedicated team</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDollarSign className="text-accent-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Unlimited revisions</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDollarSign className="text-accent-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Exceptional customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <FileCheck className="text-accent-500 mr-3" size={24} />
                  <h2 className="text-2xl font-bold">Request a Quote</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Service Interest */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Required*
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        required
                      >
                        <option value="web">Web Development</option>
                        <option value="thumbnail">Thumbnail Design</option>
                        <option value="video">Video Editing</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="below-50k">Below ₹50,000</option>
                        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k-200k">₹1,00,000 - ₹2,00,000</option>
                        <option value="200k-500k">₹2,00,000 - ₹5,00,000</option>
                        <option value="above-500k">Above ₹5,00,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">Select Timeline</option>
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="short">Short Term (1-2 weeks)</option>
                      <option value="medium">Medium Term (2-4 weeks)</option>
                      <option value="long">Long Term (1-3 months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="Please provide details about your project requirements, goals, and any specific features you need."
                      required
                    ></textarea>
                  </div>

                  {/* How did you hear about us */}
                  <div className="mb-6">
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-accent w-full">
                    Submit Quote Request
                  </button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We'll respond to your request within 24 hours with a detailed proposal.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is delivered on time and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your project requirements, goals, and expectations in detail.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proposal</h3>
              <p className="text-gray-600">
                We provide a detailed proposal including timeline, deliverables, and pricing.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">
                Our team works on your project, providing regular updates on progress.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-gray-600">
                We deliver the final product along with documentation and support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">How long does it take to complete a project?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.
              </p>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods including bank transfers, UPI, and major credit cards. We typically require a 50% advance payment to begin work, with the remaining 50% due upon project completion.
              </p>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Do you offer maintenance services after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer ongoing maintenance and support services for all our projects. We provide various maintenance packages tailored to your specific needs, ensuring your website or application remains up-to-date and secure.
              </p>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">How many revisions do you offer?</h3>
              <p className="text-gray-600">
                We offer unlimited revisions during the development process to ensure you're completely satisfied with the final product. Our goal is to deliver exactly what you envision, and we'll work closely with you until we achieve that.
              </p>
            </motion.div>

            {/* FAQ Item 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2">Do you work with clients outside of India?</h3>
              <p className="text-gray-600">
                Yes, we work with clients globally. Our team is equipped to handle remote collaboration effectively, and we adjust our working hours to accommodate different time zones when necessary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;