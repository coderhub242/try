import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, PenTool, Video, Layout, Monitor, Smartphone, 
  Youtube, Instagram, FileImage, CheckCircle, ChevronRight
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-secondary-100">
              Comprehensive creative solutions tailored to elevate your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Code className="text-primary-600 mr-3" size={32} />
                <h2 className="heading-lg">Web Development</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                We create stunning, responsive websites that engage your audience and drive conversions. Our development process combines cutting-edge technology with intuitive design to deliver seamless user experiences.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Web Development Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Responsive website design and development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Custom web applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Website maintenance and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/client/quote" className="btn btn-primary">
                Get a Quote
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
                  <Layout className="text-primary-600 mb-3" size={32} />
                  <h3 className="font-bold">Custom Websites</h3>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <Monitor className="text-primary-600 mb-3" size={32} />
                  <h3 className="font-bold">Web Applications</h3>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="bg-primary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <Smartphone className="text-primary-600 mb-3" size={32} />
                  <h3 className="font-bold">Responsive Design</h3>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
                  <Code className="text-primary-600 mb-3" size={32} />
                  <h3 className="font-bold">E-commerce</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thumbnail Design */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
                  <Youtube className="text-secondary-600 mb-3" size={32} />
                  <h3 className="font-bold">YouTube Thumbnails</h3>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <Instagram className="text-secondary-600 mb-3" size={32} />
                  <h3 className="font-bold">Social Media</h3>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="bg-secondary-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FileImage className="text-secondary-600 mb-3" size={32} />
                  <h3 className="font-bold">Blog Graphics</h3>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
                  <PenTool className="text-secondary-600 mb-3" size={32} />
                  <h3 className="font-bold">Custom Design</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <PenTool className="text-secondary-600 mr-3" size={32} />
                <h2 className="heading-lg">Thumbnail Design</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Eye-catching thumbnails are essential for standing out in today's content-saturated digital landscape. Our designs capture attention, communicate your message, and drive higher click-through rates.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Thumbnail Design Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>YouTube video thumbnails</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Social media post graphics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Blog and article featured images</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>E-commerce product thumbnails</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Thumbnail design strategy</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/client/quote" className="btn btn-secondary">
                Get a Quote
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Editing */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Video className="text-accent-500 mr-3" size={32} />
                <h2 className="heading-lg">Video Editing</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Powerful video content can tell your story like nothing else. Our video editing team combines technical expertise with creative storytelling to produce videos that engage, inform, and inspire action.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Video Editing Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Corporate video editing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Social media video content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>YouTube channel content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Motion graphics and animations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Video color grading and enhancement</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/client/quote" className="btn btn-accent">
                Get a Quote
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2542183/pexels-photo-2542183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Video Editing Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Professional Video Editing</h3>
                  <p className="text-white/80">Transform raw footage into compelling stories</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-700 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's bring your vision to life with our creative expertise.
            </p>
            <Link to="/client/quote" className="btn bg-white text-accent-600 hover:bg-gray-100 shadow-lg">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;