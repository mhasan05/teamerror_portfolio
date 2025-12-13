import { useState } from 'react';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('openings');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user-facing features using React, Vue.js, and modern JavaScript.',
      requirements: [
        '5+ years of experience with React or Vue.js',
        'Strong knowledge of modern JavaScript (ES6+)',
        'Experience with state management (Redux, Vuex)',
        'Familiarity with testing frameworks (Jest, Cypress)',
        'Understanding of responsive design principles'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible working hours',
        'Remote work options',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Join our backend team to build scalable APIs and microservices. You will work with Node.js, Python, and cloud technologies.',
      requirements: [
        '3+ years of backend development experience',
        'Proficiency in Node.js, Python, or Go',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of RESTful APIs and GraphQL',
        'Understanding of cloud platforms (AWS, GCP)'
      ],
      benefits: [
        'Competitive compensation package',
        'Comprehensive health coverage',
        'Generous PTO and holidays',
        'Learning and conference budget',
        'Stock options'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'We are seeking a creative UI/UX Designer to create beautiful and intuitive user experiences for our products.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating design process',
        'Understanding of user research and testing',
        'Experience with design systems'
      ],
      benefits: [
        'Creative and collaborative environment',
        'Health and wellness benefits',
        'Flexible schedule',
        'Home office stipend',
        'Career growth opportunities'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$95,000 - $130,000',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Help us build and maintain our cloud infrastructure. You will work with Kubernetes, Docker, and CI/CD pipelines.',
      requirements: [
        '4+ years of DevOps experience',
        'Experience with Kubernetes and Docker',
        'Knowledge of CI/CD tools (GitHub Actions, Jenkins)',
        'Familiarity with cloud providers (AWS, GCP)',
        'Scripting skills (Python, Bash)'
      ],
      benefits: [
        'Excellent compensation and bonuses',
        'Top-tier medical coverage',
        'Unlimited PTO',
        'Equipment allowance',
        'Conference speaking opportunities'
      ]
    }
  ];

  const cultureValues = [
    {
      icon: UserGroupIcon,
      title: 'Collaborative Environment',
      description: 'We believe in the power of teamwork and open communication. Every voice matters in our inclusive workplace.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation First',
      description: 'We encourage experimentation and creative problem-solving. Innovation drives everything we do.'
    },
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'We value our team members as whole people. Flexible schedules and remote work options support your well-being.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Continuous Learning',
      description: 'We invest in your growth with learning budgets, conferences, and mentorship programs.'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer market-leading salaries and equity packages.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.'
    },
    {
      title: 'Flexible Work',
      description: 'Work from anywhere with our remote-first policy and flexible schedules.'
    },
    {
      title: 'Professional Growth',
      description: 'Learning budgets, conferences, and mentorship to advance your career.'
    },
    {
      title: 'Time Off',
      description: 'Generous PTO, sick leave, and paid holidays to recharge.'
    },
    {
      title: 'Unique Perks',
      description: 'Home office stipend, wellness programs, and team retreats.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build the <span style={{color: 'rgb(0, 100, 92)'}}>Future</span> With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a team of passionate developers, designers, and innovators who are transforming businesses through technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('openings')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'openings' 
                  ? 'bg-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Job Openings
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'culture' 
                  ? 'bg-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Culture & Benefits
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'openings' ? (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>30+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>7+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>99%</div>
                <div className="text-gray-600">Employee Satisfaction</div>
              </div>
            </div>

            {/* Job Openings */}
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Posted {job.posted}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{backgroundColor: 'rgb(0, 100, 92)', color: 'white'}}
                  >
                    Apply Now
                    <BriefcaseIcon className="h-5 w-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Culture & Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Culture & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cultureValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(0, 100, 92, 0.1)'}}>
                        <Icon className="h-8 w-8" style={{color: 'rgb(0, 100, 92)'}} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Employee Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Life at TeamError */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Life at TeamError</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
                    <p className="text-white/90">We work together to solve complex challenges</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" 
                    alt="Office environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">Flexible Environment</h3>
                    <p className="text-white/90">Work from anywhere, anytime</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Team events"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">Team Events</h3>
                    <p className="text-white/90">Regular meetups and celebrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            <BriefcaseIcon className="h-5 w-5 mr-2" />
            View Open Positions
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Careers;
