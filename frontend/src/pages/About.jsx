import { CheckCircleIcon, UserGroupIcon, LightBulbIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative solutions to solve complex problems.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Quality',
      description: 'Excellence in every line of code. We deliver high-quality, scalable, and maintainable solutions.'
    },
    {
      icon: HeartIcon,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Growth',
      description: 'Continuous learning and improvement drive us to stay ahead in the tech industry.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '80+', label: 'Happy Clients' },
    { number: '7+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the <span style={{color: 'rgb(0, 100, 92)'}}>Future</span> Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators dedicated to transforming businesses through technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2017, TeamError started with a simple mission: to help businesses leverage technology 
                to achieve their goals. What began as a small team of developers has grown into a full-service 
                software development company.
              </p>
              <p>
                Today, we work with startups, SMEs, and enterprises across the globe, delivering custom software 
                solutions that drive real business results. Our expertise spans web development, mobile apps, 
                AI solutions, and more.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their unique challenges, 
                and crafting tailored solutions that exceed expectations.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(0, 100, 92, 0.1)'}}>
                  <UserGroupIcon className="h-6 w-6" style={{color: 'rgb(0, 100, 92)'}} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{color: 'rgb(0, 100, 92)'}}>30+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
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

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The talented people behind TeamError</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <a
            href="mailto:support@teamerror.dev"
            className="inline-block px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
