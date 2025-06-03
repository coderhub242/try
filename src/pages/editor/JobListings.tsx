import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Filter, Search, Code, PenTool, Video,
  MapPin, CalendarClock, Banknote, ExternalLink
} from 'lucide-react';

// Job type definition
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  category: 'web' | 'thumbnail' | 'video';
  salary: string;
  postedAt: string;
  description: string;
  requirements: string[];
  isRemote: boolean;
}

const JobListings: React.FC = () => {
  // Jobs data
  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "TechSphere Solutions",
      location: "Bangalore, Karnataka",
      type: "full-time",
      category: "web",
      salary: "₹12,00,000 - ₹18,00,000 / year",
      postedAt: "2 days ago",
      description: "We are looking for an experienced web developer to join our team and help build responsive, user-friendly websites and web applications for our clients.",
      requirements: [
        "5+ years of experience in web development",
        "Proficient in React, Node.js, and TypeScript",
        "Experience with RESTful APIs and GraphQL",
        "Strong understanding of UI/UX principles",
        "Portfolio of previous work"
      ],
      isRemote: false
    },
    {
      id: 2,
      title: "Thumbnail Designer",
      company: "ContentCraft Media",
      location: "Mumbai, Maharashtra",
      type: "freelance",
      category: "thumbnail",
      salary: "₹5,000 - ₹10,000 / project",
      postedAt: "1 week ago",
      description: "We're seeking a creative thumbnail designer to create eye-catching thumbnails for YouTube channels and social media content.",
      requirements: [
        "3+ years of experience in graphic design",
        "Proficient in Adobe Photoshop and Illustrator",
        "Understanding of YouTube algorithms and trends",
        "Ability to create attention-grabbing designs",
        "Portfolio of previous thumbnail work"
      ],
      isRemote: true
    },
    {
      id: 3,
      title: "Video Editor",
      company: "VisualStory Productions",
      location: "Delhi, NCR",
      type: "contract",
      category: "video",
      salary: "₹40,000 - ₹60,000 / month",
      postedAt: "3 days ago",
      description: "Looking for a skilled video editor to join our team for a 6-month project creating corporate training videos and promotional content.",
      requirements: [
        "4+ years of experience in video editing",
        "Proficient in Adobe Premiere Pro and After Effects",
        "Experience with color grading and audio editing",
        "Ability to work under tight deadlines",
        "Portfolio of previous video work"
      ],
      isRemote: false
    },
    {
      id: 4,
      title: "Front-End Developer",
      company: "InnovateX",
      location: "Hyderabad, Telangana",
      type: "full-time",
      category: "web",
      salary: "₹8,00,000 - ₹12,00,000 / year",
      postedAt: "5 days ago",
      description: "Join our team to build beautiful, interactive user interfaces for our SaaS products using modern JavaScript frameworks.",
      requirements: [
        "3+ years of experience in front-end development",
        "Proficient in React, Vue, or Angular",
        "Strong CSS and responsive design skills",
        "Experience with state management libraries",
        "Portfolio of previous work"
      ],
      isRemote: true
    },
    {
      id: 5,
      title: "YouTube Thumbnail Specialist",
      company: "ViralVision Media",
      location: "Pune, Maharashtra",
      type: "part-time",
      category: "thumbnail",
      salary: "₹20,000 - ₹30,000 / month",
      postedAt: "1 day ago",
      description: "Create compelling thumbnails for our growing network of YouTube channels in the tech and lifestyle niches.",
      requirements: [
        "2+ years of experience creating thumbnails",
        "Proficient in Photoshop and Canva",
        "Understanding of click-through rates and optimization",
        "Ability to work on multiple projects simultaneously",
        "Portfolio of previous thumbnail work"
      ],
      isRemote: true
    },
    {
      id: 6,
      title: "Motion Graphics Designer",
      company: "AnimateNow",
      location: "Chennai, Tamil Nadu",
      type: "full-time",
      category: "video",
      salary: "₹6,00,000 - ₹9,00,000 / year",
      postedAt: "2 weeks ago",
      description: "We're looking for a creative motion graphics designer to create engaging animations for digital marketing campaigns and explainer videos.",
      requirements: [
        "3+ years of experience in motion graphics",
        "Proficient in After Effects and Cinema 4D",
        "Strong understanding of animation principles",
        "Experience with character animation",
        "Portfolio of previous motion graphics work"
      ],
      isRemote: false
    }
  ];

  // Filter and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');

  // Filtered jobs
  const filteredJobs = jobs.filter(job => {
    // Search term filter
    const searchMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const categoryMatch = categoryFilter === 'all' || job.category === categoryFilter;
    
    // Type filter
    const typeMatch = typeFilter === 'all' || job.type === typeFilter;
    
    // Location filter
    const locationMatch = locationFilter === 'all' || 
                         (locationFilter === 'remote' && job.isRemote) ||
                         job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return searchMatch && categoryMatch && typeMatch && locationMatch;
  });

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setTypeFilter('all');
    setLocationFilter('all');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Find Your Dream Creative Job</h1>
            <p className="text-xl text-secondary-100 mb-8">
              Discover opportunities in web development, thumbnail design, and video editing.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs by title, company, or keywords..."
                className="w-full px-4 py-3 pl-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <Search className="absolute left-4 top-3.5 text-secondary-500" size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.div 
              className="lg:w-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center">
                    <Filter className="mr-2" size={20} />
                    Filters
                  </h2>
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-secondary-600 hover:text-secondary-800 font-medium"
                  >
                    Reset All
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Job Category</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cat-all"
                        name="category"
                        value="all"
                        checked={categoryFilter === 'all'}
                        onChange={() => setCategoryFilter('all')}
                        className="mr-2"
                      />
                      <label htmlFor="cat-all">All Categories</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cat-web"
                        name="category"
                        value="web"
                        checked={categoryFilter === 'web'}
                        onChange={() => setCategoryFilter('web')}
                        className="mr-2"
                      />
                      <label htmlFor="cat-web" className="flex items-center">
                        <Code size={16} className="mr-1 text-primary-600" />
                        Web Development
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cat-thumbnail"
                        name="category"
                        value="thumbnail"
                        checked={categoryFilter === 'thumbnail'}
                        onChange={() => setCategoryFilter('thumbnail')}
                        className="mr-2"
                      />
                      <label htmlFor="cat-thumbnail" className="flex items-center">
                        <PenTool size={16} className="mr-1 text-secondary-600" />
                        Thumbnail Design
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cat-video"
                        name="category"
                        value="video"
                        checked={categoryFilter === 'video'}
                        onChange={() => setCategoryFilter('video')}
                        className="mr-2"
                      />
                      <label htmlFor="cat-video" className="flex items-center">
                        <Video size={16} className="mr-1 text-accent-500" />
                        Video Editing
                      </label>
                    </div>
                  </div>
                </div>

                {/* Job Type Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="type-all"
                        name="type"
                        value="all"
                        checked={typeFilter === 'all'}
                        onChange={() => setTypeFilter('all')}
                        className="mr-2"
                      />
                      <label htmlFor="type-all">All Types</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="type-full-time"
                        name="type"
                        value="full-time"
                        checked={typeFilter === 'full-time'}
                        onChange={() => setTypeFilter('full-time')}
                        className="mr-2"
                      />
                      <label htmlFor="type-full-time">Full-time</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="type-part-time"
                        name="type"
                        value="part-time"
                        checked={typeFilter === 'part-time'}
                        onChange={() => setTypeFilter('part-time')}
                        className="mr-2"
                      />
                      <label htmlFor="type-part-time">Part-time</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="type-contract"
                        name="type"
                        value="contract"
                        checked={typeFilter === 'contract'}
                        onChange={() => setTypeFilter('contract')}
                        className="mr-2"
                      />
                      <label htmlFor="type-contract">Contract</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="type-freelance"
                        name="type"
                        value="freelance"
                        checked={typeFilter === 'freelance'}
                        onChange={() => setTypeFilter('freelance')}
                        className="mr-2"
                      />
                      <label htmlFor="type-freelance">Freelance</label>
                    </div>
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="loc-all"
                        name="location"
                        value="all"
                        checked={locationFilter === 'all'}
                        onChange={() => setLocationFilter('all')}
                        className="mr-2"
                      />
                      <label htmlFor="loc-all">All Locations</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="loc-remote"
                        name="location"
                        value="remote"
                        checked={locationFilter === 'remote'}
                        onChange={() => setLocationFilter('remote')}
                        className="mr-2"
                      />
                      <label htmlFor="loc-remote">Remote Only</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="loc-bangalore"
                        name="location"
                        value="Bangalore"
                        checked={locationFilter === 'Bangalore'}
                        onChange={() => setLocationFilter('Bangalore')}
                        className="mr-2"
                      />
                      <label htmlFor="loc-bangalore">Bangalore</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="loc-mumbai"
                        name="location"
                        value="Mumbai"
                        checked={locationFilter === 'Mumbai'}
                        onChange={() => setLocationFilter('Mumbai')}
                        className="mr-2"
                      />
                      <label htmlFor="loc-mumbai">Mumbai</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="loc-delhi"
                        name="location"
                        value="Delhi"
                        checked={locationFilter === 'Delhi'}
                        onChange={() => setLocationFilter('Delhi')}
                        className="mr-2"
                      />
                      <label htmlFor="loc-delhi">Delhi</label>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <motion.div 
              className="lg:w-3/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center">
                  <Briefcase className="mr-2 text-secondary-600" size={24} />
                  Available Jobs
                </h2>
                <p className="text-gray-600">
                  Showing {filteredJobs.length} of {jobs.length} jobs
                </p>
              </div>

              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <motion.div 
                      key={job.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1 hover:text-secondary-600 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className="flex items-center text-gray-500">
                                <MapPin size={14} className="mr-1" />
                                {job.location} {job.isRemote && <span className="ml-1 text-green-600">(Remote)</span>}
                              </span>
                              <span className="flex items-center text-gray-500">
                                <CalendarClock size={14} className="mr-1" />
                                Posted {job.postedAt}
                              </span>
                              <span className="flex items-center text-gray-500">
                                <Banknote size={14} className="mr-1" />
                                {job.salary}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex items-center gap-3">
                            {job.category === 'web' && (
                              <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                                Web Development
                              </span>
                            )}
                            {job.category === 'thumbnail' && (
                              <span className="bg-secondary-100 text-secondary-700 text-xs px-3 py-1 rounded-full">
                                Thumbnail Design
                              </span>
                            )}
                            {job.category === 'video' && (
                              <span className="bg-accent-100 text-accent-700 text-xs px-3 py-1 rounded-full">
                                Video Editing
                              </span>
                            )}
                            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full capitalize">
                              {job.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {job.requirements.slice(0, 3).map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                            {job.requirements.length > 3 && (
                              <li>And {job.requirements.length - 3} more requirements...</li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex justify-end">
                          <a href="#" className="btn btn-secondary inline-flex items-center">
                            Apply Now
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-600 text-lg mb-4">No jobs match your current filters.</p>
                  <button 
                    onClick={resetFilters}
                    className="btn btn-secondary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Boost Your Career Prospects</h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Upload your CV to our database and let companies find you for their creative projects.
            </p>
            <Link to="/editor/upload-cv" className="btn bg-white text-secondary-700 hover:bg-gray-100 shadow-lg">
              Upload Your CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;