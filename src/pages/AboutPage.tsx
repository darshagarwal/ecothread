import React from 'react';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About ECO THREAD</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize fashion by creating beautiful, sustainable clothing 
            that respects both people and the planet.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, ECO THREAD was born from a simple belief: fashion should be beautiful, 
                accessible, and sustainable. We saw an industry that was harming our planet and decided 
                to be part of the solution.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a small team of passionate designers and sustainability experts 
                who shared a vision of creating clothing that tells a positive story. Every piece in 
                our collection is carefully crafted using eco-friendly materials and ethical manufacturing processes.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a certified B-Corp, working with suppliers who share our 
                values and commitment to making fashion a force for good.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our story"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values that shape our approach to sustainable fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We use only eco-friendly materials and processes that minimize our environmental impact.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethics</h3>
              <p className="text-gray-600">
                Fair wages, safe working conditions, and respect for all people in our supply chain.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building strong relationships with our customers, partners, and local communities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Creating timeless pieces that are built to last, reducing waste and consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure our success not just in sales, but in the positive impact we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Plastic Bottles Recycled</div>
              <p className="text-gray-600">
                Converted into sustainable fabric for our clothing line.
              </p>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Fair Trade Workers</div>
              <p className="text-gray-600">
                Supported through our ethical manufacturing partnerships.
              </p>
            </div>

            <div className="text-center bg-purple-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Carbon Reduction</div>
              <p className="text-gray-600">
                Compared to traditional fashion manufacturing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind ECO THREAD who make sustainable fashion possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                Passionate about sustainable fashion and environmental conservation.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Garcia</h3>
              <p className="text-blue-600 font-medium mb-3">Head of Design</p>
              <p className="text-gray-600">
                Creates beautiful, timeless designs that celebrate sustainable materials.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Chen</h3>
              <p className="text-blue-600 font-medium mb-3">Sustainability Director</p>
              <p className="text-gray-600">
                Ensures our supply chain meets the highest environmental and ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Sustainable Fashion Movement
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Every purchase you make supports ethical manufacturing and environmental conservation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Our Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;