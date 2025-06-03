import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, Globe, MapPin, Briefcase, Pencil,
  Save, Camera, Code, PenTool, Video, Trash, Plus, Award
} from 'lucide-react';

const EditorProfile: React.FC = () => {
  // Demo profile data (in a real app, this would come from an API)
  const [profile, setProfile] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    phone: '+91 9876543210',
    location: 'Bangalore, Karnataka',
    website: 'https://priyasharma.dev',
    about: "Creative web developer with 5+ years of experience specializing in React and modern front-end technologies. Passionate about creating intuitive user interfaces and optimized web experiences.",
    specialization: 'web',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Figma', 'UI/UX'],
    experience: [
      {
        id: 1,
        company: 'TechNova Solutions',
        position: 'Senior Frontend Developer',
        duration: 'Jan 2021 - Present',
        description: 'Leading front-end development for multiple client projects, mentoring junior developers, and implementing best practices.'
      },
      {
        id: 2,
        company: 'Digital Crafters',
        position: 'Web Developer',
        duration: 'Jun 2018 - Dec 2020',
        description: 'Developed responsive websites and web applications for clients across various industries.'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'Indian Institute of Technology, Delhi',
        degree: 'B.Tech in Computer Science',
        year: '2014 - 2018'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured online store with product management and payment integration.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 2,
        title: 'Travel Blog',
        description: 'A responsive blog site with content management system for a travel influencer.',
        image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 3,
        title: 'Dashboard UI',
        description: 'An analytics dashboard with data visualization and reporting features.',
        image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    certifications: [
      {
        id: 1,
        name: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        year: '2022'
      },
      {
        id: 2,
        name: 'UI/UX Design Fundamentals',
        issuer: 'DesignLab',
        year: '2021'
      }
    ]
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);

  // Form state (for editing)
  const [formData, setFormData] = useState(profile);

  // Toggle edit mode
  const toggleEditMode = () => {
    if (isEditing) {
      // Save changes
      setProfile(formData);
      setIsEditing(false);
    } else {
      // Enter edit mode
      setFormData(profile);
      setIsEditing(true);
    }
  };

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle skills change (comma-separated input)
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsString = e.target.value;
    const skillsArray = skillsString.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    setFormData(prev => ({ ...prev, skills: skillsArray }));
  };

  // Add new experience
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  // Update experience
  const updateExperience = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  // Remove experience
  const removeExperience = (id: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  // Add new education
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      year: ''
    };
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  // Update education
  const updateEducation = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  // Remove education
  const removeEducation = (id: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  // Add new certification
  const addCertification = () => {
    const newCertification = {
      id: Date.now(),
      name: '',
      issuer: '',
      year: ''
    };
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }));
  };

  // Update certification
  const updateCertification = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  // Remove certification
  const removeCertification = (id: number) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  // Get specialization icon
  const getSpecializationIcon = () => {
    switch (profile.specialization) {
      case 'web':
        return <Code className="text-primary-600\" size={24} />;
      case 'thumbnail':
        return <PenTool className="text-secondary-600" size={24} />;
      case 'video':
        return <Video className="text-accent-500" size={24} />;
      default:
        return <Briefcase className="text-gray-600" size={24} />;
    }
  };

  return (
    <div className="pt-20">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="flex items-center mb-6 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mr-6">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <User className="text-primary-600" size={48} />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <Camera size={16} className="text-primary-600" />
                  </button>
                )}
              </div>
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white text-white text-2xl md:text-3xl font-bold mb-1 px-2 py-1 focus:outline-none focus:border-white"
                  />
                ) : (
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{profile.name}</h1>
                )}
                <div className="flex items-center text-primary-100">
                  {getSpecializationIcon()}
                  {isEditing ? (
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="bg-transparent border-b border-primary-200 text-primary-100 ml-2 px-2 py-1 focus:outline-none focus:border-white"
                    >
                      <option value="web">Web Developer</option>
                      <option value="thumbnail">Thumbnail Designer</option>
                      <option value="video">Video Editor</option>
                    </select>
                  ) : (
                    <span className="ml-2">
                      {profile.specialization === 'web' && 'Web Developer'}
                      {profile.specialization === 'thumbnail' && 'Thumbnail Designer'}
                      {profile.specialization === 'video' && 'Video Editor'}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            
            <motion.button 
              onClick={toggleEditMode}
              className={`btn ${isEditing ? 'bg-white text-primary-600' : 'border-2 border-white text-white'} flex items-center`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isEditing ? (
                <>
                  <Save size={18} className="mr-2" />
                  Save Profile
                </>
              ) : (
                <>
                  <Pencil size={18} className="mr-2" />
                  Edit Profile
                </>
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info & Skills */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                        />
                      ) : (
                        <p>{profile.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                        />
                      ) : (
                        <p>{profile.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                        />
                      ) : (
                        <p>{profile.location}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Website</p>
                      {isEditing ? (
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                        />
                      ) : (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                          {profile.website}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Skills</h2>
                </div>
                <div className="p-6">
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={formData.skills.join(', ')}
                        onChange={handleSkillsChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Add skills separated by commas"
                      />
                      <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Certifications</h2>
                  {isEditing && (
                    <button 
                      onClick={addCertification}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>
                <div className="p-6">
                  {formData.certifications.length > 0 ? (
                    <div className="space-y-4">
                      {formData.certifications.map((cert) => (
                        <div key={cert.id} className="flex items-start">
                          <Award className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                          {isEditing ? (
                            <div className="w-full">
                              <div className="flex justify-between">
                                <input
                                  type="text"
                                  value={cert.name}
                                  onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                                  className="w-full font-medium border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Certification name"
                                />
                                <button 
                                  onClick={() => removeCertification(cert.id)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <Trash size={16} />
                                </button>
                              </div>
                              <div className="flex gap-2 mt-2">
                                <input
                                  type="text"
                                  value={cert.issuer}
                                  onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                                  className="flex-1 text-sm border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Issuing organization"
                                />
                                <input
                                  type="text"
                                  value={cert.year}
                                  onChange={(e) => updateCertification(cert.id, 'year', e.target.value)}
                                  className="w-20 text-sm border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Year"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-gray-600">
                                {cert.issuer} • {cert.year}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-2">No certifications added yet</p>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - About, Experience, Education, Portfolio */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">About</h2>
                </div>
                <div className="p-6">
                  {isEditing ? (
                    <textarea
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  ) : (
                    <p className="text-gray-700">{profile.about}</p>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Experience</h2>
                  {isEditing && (
                    <button 
                      onClick={addExperience}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>
                <div className="p-6">
                  {formData.experience.length > 0 ? (
                    <div className="space-y-6">
                      {formData.experience.map((exp) => (
                        <div key={exp.id} className="border-l-2 border-primary-200 pl-4 ml-2">
                          {isEditing ? (
                            <div>
                              <div className="flex justify-between">
                                <input
                                  type="text"
                                  value={exp.position}
                                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                  className="w-full font-bold text-lg border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Job title"
                                />
                                <button 
                                  onClick={() => removeExperience(exp.id)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <Trash size={16} />
                                </button>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 my-2">
                                <input
                                  type="text"
                                  value={exp.company}
                                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                  className="flex-1 border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Company name"
                                />
                                <input
                                  type="text"
                                  value={exp.duration}
                                  onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                                  className="sm:w-40 border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Duration (e.g., 2020-2022)"
                                />
                              </div>
                              
                              <textarea
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                rows={3}
                                className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Job description"
                              ></textarea>
                            </div>
                          ) : (
                            <div>
                              <h3 className="font-bold text-lg">{exp.position}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-2">
                                <span>{exp.company}</span>
                                <span className="hidden sm:block mx-2">•</span>
                                <span>{exp.duration}</span>
                              </div>
                              <p className="text-gray-700">{exp.description}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-2">No experience added yet</p>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">Education</h2>
                  {isEditing && (
                    <button 
                      onClick={addEducation}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>
                <div className="p-6">
                  {formData.education.length > 0 ? (
                    <div className="space-y-6">
                      {formData.education.map((edu) => (
                        <div key={edu.id} className="border-l-2 border-primary-200 pl-4 ml-2">
                          {isEditing ? (
                            <div>
                              <div className="flex justify-between">
                                <input
                                  type="text"
                                  value={edu.degree}
                                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                  className="w-full font-bold text-lg border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Degree"
                                />
                                <button 
                                  onClick={() => removeEducation(edu.id)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <Trash size={16} />
                                </button>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 my-2">
                                <input
                                  type="text"
                                  value={edu.institution}
                                  onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                                  className="flex-1 border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Institution name"
                                />
                                <input
                                  type="text"
                                  value={edu.year}
                                  onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                                  className="sm:w-40 border-b border-gray-300 px-0 py-1 focus:outline-none focus:border-primary-500"
                                  placeholder="Years (e.g., 2016-2020)"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <h3 className="font-bold text-lg">{edu.degree}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600">
                                <span>{edu.institution}</span>
                                <span className="hidden sm:block mx-2">•</span>
                                <span>{edu.year}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-2">No education added yet</p>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-primary-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">Portfolio</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {profile.portfolio.map((item) => (
                      <div key={item.id} className="group relative rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isEditing && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center cursor-pointer hover:border-primary-500 transition-colors">
                        <div className="text-center">
                          <Plus size={24} className="mx-auto text-gray-400 mb-2" />
                          <p className="text-gray-500">Add Project</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Find Your Next Creative Opportunity?</h2>
            <p className="text-xl text-secondary-100 mb-6 max-w-3xl mx-auto">
              Browse our job listings to find positions that match your skills and experience.
            </p>
            <a href="/editor" className="btn bg-white text-secondary-700 hover:bg-gray-100 shadow-lg">
              View Job Listings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorProfile;