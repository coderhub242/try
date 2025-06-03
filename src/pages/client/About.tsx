import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-primary-100">
              We are a creative powerhouse delivering exceptional design solutions across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2018, Visionary Studios began as a small team of passionate designers in Bangalore with a dream to revolutionize digital creativity in India. 
              </p>
              <p className="text-gray-700 mb-6">
                Today, we've grown into a full-service creative agency with a nationwide clientele, from startups to established brands. Our journey has been defined by our commitment to excellence, innovation, and client satisfaction.
              </p>
              <p className="text-gray-700">
                We believe in the power of visual storytelling and its ability to transform businesses. Our team combines technical expertise with creative flair to deliver solutions that not only look stunning but also drive real results.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Visionary Studios Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, paying attention to the smallest details to deliver work that exceeds expectations.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-secondary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and innovative thinking, constantly exploring new techniques and approaches to deliver fresh solutions.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-accent-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust through ethical practices and open communication.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, collaborating closely with our clients to understand their vision and bring it to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our talented professionals bring diverse skills and perspectives to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Arjun Sharma" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Arjun Sharma</h3>
              <p className="text-primary-600 mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">
                With over 10 years of experience in design and creative direction.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Priya Patel" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Priya Patel</h3>
              <p className="text-primary-600 mb-2">Lead Web Developer</p>
              <p className="text-gray-600 text-sm">
                A coding wizard who transforms designs into seamless web experiences.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Vikram Singh" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vikram Singh</h3>
              <p className="text-primary-600 mb-2">Video Production Lead</p>
              <p className="text-gray-600 text-sm">
                A storyteller who brings narratives to life through visual media.
              </p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ananya Reddy" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ananya Reddy</h3>
              <p className="text-primary-600 mb-2">Design Specialist</p>
              <p className="text-gray-600 text-sm">
                An artist who creates captivating visuals that resonate with audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;