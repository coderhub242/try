import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, PenTool, Video, ArrowUpRight
} from 'lucide-react';

// Portfolio item type
interface PortfolioItem {
  id: number;
  title: string;
  category: 'web' | 'thumbnail' | 'video';
  image: string;
  client: string;
  description: string;
}

const Portfolio: React.FC = () => {
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "GreenEarth Foundation Website",
      category: "web",
      image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "GreenEarth Foundation",
      description: "A responsive website for an environmental NGO featuring donation integration and event management."
    },
    {
      id: 2,
      title: "TechSphere E-commerce Platform",
      category: "web",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "TechSphere Ltd.",
      description: "A complete e-commerce solution with product management, payment gateway, and customer portal."
    },
    {
      id: 3,
      title: "Culinary Masters YouTube Channel",
      category: "thumbnail",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Chef Anand Kapoor",
      description: "A series of eye-catching thumbnails for a popular cooking channel, increasing CTR by 45%."
    },
    {
      id: 4,
      title: "Wanderlust Travel Blog",
      category: "thumbnail",
      image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Wanderlust Adventures",
      description: "Consistent thumbnail designs for a travel blog, creating a recognizable brand identity."
    },
    {
      id: 5,
      title: "Sunrise Yoga Promotional Video",
      category: "video",
      image: "https://images.pexels.com/photos/4325484/pexels-photo-4325484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Sunrise Yoga Studio",
      description: "A serene promotional video showcasing yoga sessions and wellness activities."
    },
    {
      id: 6,
      title: "NextGen Smartphone Launch",
      category: "video",
      image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "TechGiant Mobile",
      description: "A dynamic product launch video featuring 3D animations and cinematic sequences."
    },
    {
      id: 7,
      title: "Mountain Finance Dashboard",
      category: "web",
      image: "https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Mountain Finance Ltd.",
      description: "An intuitive financial dashboard with real-time data visualization and reporting tools."
    },
    {
      id: 8,
      title: "Fitness Journey Podcast Thumbnails",
      category: "thumbnail",
      image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "FitLife Podcast",
      description: "A collection of engaging thumbnails for a fitness podcast, contributing to a 60% increase in listenership."
    },
    {
      id: 9,
      title: "Organic Beauty Product Showcase",
      category: "video",
      image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      client: "Natura Organics",
      description: "A series of product showcase videos highlighting natural ingredients and application methods."
    }
  ];

  // Filter state
  const [filter, setFilter] = useState<string>('all');

  // Filtered items
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-accent-100">
              Showcasing our creative excellence across web development, thumbnail design, and video editing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Work
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-6 py-2 rounded-full transition-all flex items-center ${filter === 'web' 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <Code size={18} className="mr-2" />
              Web Development
            </button>
            <button 
              onClick={() => setFilter('thumbnail')}
              className={`px-6 py-2 rounded-full transition-all flex items-center ${filter === 'thumbnail' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <PenTool size={18} className="mr-2" />
              Thumbnail Design
            </button>
            <button 
              onClick={() => setFilter('video')}
              className={`px-6 py-2 rounded-full transition-all flex items-center ${filter === 'video' 
                ? 'bg-accent-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <Video size={18} className="mr-2" />
              Video Editing
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="group card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <p className="text-white/80 text-sm mb-1">{item.client}</p>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    {item.category === 'web' && (
                      <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">Web</span>
                    )}
                    {item.category === 'thumbnail' && (
                      <span className="bg-secondary-600 text-white text-xs px-3 py-1 rounded-full">Thumbnail</span>
                    )}
                    {item.category === 'video' && (
                      <span className="bg-accent-500 text-white text-xs px-3 py-1 rounded-full">Video</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors">
                    View Details <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No portfolio items found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ravi Mehta" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">Ravi Mehta</h3>
                  <p className="text-primary-600 text-sm">GreenEarth Foundation</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Visionary Studios transformed our online presence with a stunning website that perfectly captures our mission. Their team was responsive, creative, and delivered beyond our expectations."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Neha Sharma" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">Neha Sharma</h3>
                  <p className="text-secondary-600 text-sm">FitLife Podcast</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The thumbnail designs created by Visionary Studios completely transformed our podcast's visual identity. We've seen a 60% increase in new listeners since implementing their designs."
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Arjun Kapoor" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">Arjun Kapoor</h3>
                  <p className="text-accent-500 text-sm">TechGiant Mobile</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The product launch video exceeded our expectations. The team's attention to detail and creative approach helped us create a memorable launch that resonated with our audience."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
              <p className="text-primary-100 text-lg">
                Let's create something amazing together. Reach out for a free consultation.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="/client/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Contact Us
              </a>
              <a href="/client/quote" className="btn border-2 border-white text-white hover:bg-primary-700">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;