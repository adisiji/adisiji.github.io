const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent/10 rounded-full filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team collaboration" 
                className="relative z-10 rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, DevCraft Solutions began with a simple mission: to create exceptional mobile experiences that solve real-world problems. What started as a small team of passionate developers has grown into a comprehensive digital agency specializing in mobile application development.
            </p>
            <p className="text-gray-600 mb-6">
              Our team combines technical expertise with creative design thinking to deliver innovative solutions that exceed client expectations. We pride ourselves on staying at the forefront of mobile technology, constantly exploring new frameworks and methodologies to enhance our development process.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've successfully delivered hundreds of projects across various industries, building lasting relationships with our clients through our commitment to quality, transparency, and exceptional service.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">8+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
