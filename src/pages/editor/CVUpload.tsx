import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, FileText, Award, Briefcase, GraduationCap,
  Languages, Palette, Code, Video, CheckCircle
} from 'lucide-react';

const CVUpload: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '',
    education: '',
    skills: '',
    specialization: 'web',
    availability: 'full-time',
    expectedSalary: '',
    location: '',
    relocate: false,
    about: ''
  });

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(selectedFile.type)) {
        setFileError('Please upload a PDF or Word document');
        setFile(null);
        return;
      }
      
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB');
        setFile(null);
        return;
      }
      
      setFileError('');
      setFile(selectedFile);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', formData);
    console.log('File uploaded:', file);
    alert('Your CV and profile have been successfully uploaded!');
    // Reset form (in a real app, you might redirect the user)
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Upload Your CV</h1>
            <p className="text-xl text-primary-100">
              Share your skills and experience to find opportunities that match your creative expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Why Upload Your CV?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                      <Briefcase className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Access Exclusive Jobs</h3>
                      <p className="text-gray-600 text-sm">
                        Get matched with jobs that aren't advertised on public job boards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                      <Award className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Showcase Your Skills</h3>
                      <p className="text-gray-600 text-sm">
                        Highlight your expertise and stand out to potential employers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                      <CheckCircle className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Faster Application Process</h3>
                      <p className="text-gray-600 text-sm">
                        Apply to jobs with a single click once your profile is complete.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-2 text-center">CV Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Keep your CV concise and relevant (1-2 pages)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Include links to your portfolio or work samples
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Highlight specific skills relevant to your field
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Quantify achievements where possible
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Proofread carefully before uploading
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Upload Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <FileText className="text-primary-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold">Your Professional Profile</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Palette className="mr-2 text-primary-600" size={20} />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>

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
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                          Portfolio URL
                        </label>
                        <input
                          type="url"
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Briefcase className="mr-2 text-primary-600" size={20} />
                      Professional Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                          Specialization*
                        </label>
                        <select
                          id="specialization"
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          <option value="web">Web Development</option>
                          <option value="thumbnail">Thumbnail Design</option>
                          <option value="video">Video Editing</option>
                          <option value="multiple">Multiple Specializations</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                          Availability*
                        </label>
                        <select
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="freelance">Freelance</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Years of Experience*
                        </label>
                        <input
                          type="text"
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                          Expected Salary/Rate
                        </label>
                        <input
                          type="text"
                          id="expectedSalary"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleChange}
                          placeholder="e.g., ₹60,000/month or ₹500/hour"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                        Key Skills*
                      </label>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="e.g., React, Photoshop, After Effects, etc."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
                    </div>
                  </div>

                  {/* Education & Location */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <GraduationCap className="mr-2 text-primary-600" size={20} />
                      Education & Location
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                          Highest Education*
                        </label>
                        <input
                          type="text"
                          id="education"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder="e.g., B.Tech in Computer Science"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Location*
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g., Mumbai, Maharashtra"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="relocate"
                          name="relocate"
                          checked={formData.relocate}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="relocate" className="ml-2 block text-sm text-gray-700">
                          I am willing to relocate for the right opportunity
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* About */}
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                      About You*
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      rows={5}
                      value={formData.about}
                      onChange={handleChange}
                      placeholder="Briefly describe your professional background, achievements, and what you're looking for in your next role."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">Max 500 characters</p>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Upload className="mr-2 text-primary-600" size={20} />
                      Upload Your CV
                    </h3>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      
                      {!file ? (
                        <div>
                          <FileText className="mx-auto text-gray-400 mb-3\" size={36} />
                          <p className="text-gray-600 mb-2">Drag and drop your CV here or</p>
                          <label htmlFor="cv" className="btn btn-outline inline-block cursor-pointer">
                            Browse Files
                          </label>
                          <p className="text-xs text-gray-500 mt-2">
                            Accepted formats: PDF, DOC, DOCX (max 5MB)
                          </p>
                          {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
                        </div>
                      ) : (
                        <div>
                          <FileText className="mx-auto text-primary-600 mb-3" size={36} />
                          <p className="text-gray-800 font-medium mb-2">{file.name}</p>
                          <p className="text-gray-500 text-sm mb-3">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <button
                            type="button"
                            onClick={() => setFile(null)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove file
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button type="submit" className="btn btn-primary w-full">
                      Submit Profile & CV
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about our CV upload and job matching process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-2">How does the job matching process work?</h3>
              <p className="text-gray-600">
                Our system analyzes your CV and profile information to match you with relevant job opportunities. When a potential match is found, you'll receive a notification by email. You can then review the job details and express your interest.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-2">Who can see my CV and profile information?</h3>
              <p className="text-gray-600">
                Your information is only visible to verified employers who are actively searching for candidates with your skills and experience. We prioritize your privacy and do not share your data with third parties without your consent.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2">Can I update my CV and profile after submission?</h3>
              <p className="text-gray-600">
                Yes, you can update your CV and profile information at any time by logging into your account. We recommend keeping your information current to ensure you receive the most relevant job matches.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-2">What types of jobs can I expect to be matched with?</h3>
              <p className="text-gray-600">
                You'll be matched with jobs in your specified field (web development, thumbnail design, or video editing) that align with your experience level, skills, and preferences. This includes full-time positions, contract work, and freelance opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVUpload;