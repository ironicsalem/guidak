import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with Petra background */}
      <Hero 
        backgroundImage="../../public/petra.jpg"
        title="Wonderful Jordan"
        subtitle="Explore the wonders of Jordan"
      />
      
      {/* Main content area - you can add more sections here */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination cards would go here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">The Dead Sea</h3>
                <p className="text-gray-600">Experience the unique floating sensation in the lowest point on Earth.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Wadi Rum</h3>
                <p className="text-gray-600">Explore the magnificent desert landscape known as the Valley of the Moon.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Jerash</h3>
                <p className="text-gray-600">Discover one of the best-preserved Roman provincial towns in the world.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Jordan brief section */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Visit Jordan?</h2>
            <p className="text-lg mb-4">
              Jordan is a land of mesmerizing beauty and contrasts, from the red sands of Wadi Rum to the 
              healing waters of the Dead Sea. Discover ancient wonders, experience Bedouin hospitality, 
              and explore a country where history comes alive.
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"My trip to Jordan was life-changing. The people are incredibly welcoming, and the sights are breathtaking."</p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"Petra at sunset is something everyone should experience at least once in their lifetime."</p>
              <p className="font-semibold">- Mark Taylor</p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home