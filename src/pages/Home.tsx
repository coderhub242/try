import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, Code, Video, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Visionary Studios
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              India's premier creative agency specializing in web development, 
              thumbnail design, and video editing.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/client" className="btn btn-accent">
                I'm a Client
                <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link to="/editor" className="btn bg-white text-gray-900 hover:bg-gray-100">
                I'm an Editor
                <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">Our Creative Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive creative solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <motion.div 
              className="card p-8 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Code className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Responsive, modern websites that drive engagement and conversions.
              </p>
              <Link to="/client/services" className="text-primary-600 font-medium inline-flex items-center">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            {/* Thumbnail Design */}
            <motion.div 
              className="card p-8 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <PenTool className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Thumbnail Design</h3>
              <p className="text-gray-600 mb-6">
                Eye-catching thumbnails that boost click-through rates for your content.
              </p>
              <Link to="/client/services" className="text-secondary-600 font-medium inline-flex items-center">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            {/* Video Editing */}
            <motion.div 
              className="card p-8 flex flex-col items-center text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <Video className="text-accent-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Editing</h3>
              <p className="text-gray-600 mb-6">
                Professional video editing that tells your story with impact.
              </p>
              <Link to="/client/services" className="text-accent-500 font-medium inline-flex items-center">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to bring your vision to life?</h2>
              <p className="text-primary-100 text-lg">
                Choose your path to either work with us or join our creative team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/client" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Hire Our Services
              </Link>
              <Link to="/editor" className="btn border-2 border-white text-white hover:bg-primary-700">
                Join as an Editor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;