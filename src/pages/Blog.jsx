import React, { useState } from 'react';
import Footer from "../Components/Footer";

const BlogPost = ({ title, date, category, excerpt, fullText, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
      <div className="relative h-48 w-full">
        <img src={image} alt="Blog post" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-blue-900 text-sm mb-2">
          <span className="mr-1">•</span>
          <span>{date}</span>
          <span>{category}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {isExpanded ? fullText : excerpt}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-lightblue-500 font-medium text-sm hover:underline focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="min-h-screen flex items-start justify-center bg-white px-4 pt-4">
        <div className="w-full max-w-7xl text-center">
          <div className="mb-12">
            <h1 className="text-4xl font-bold">
              <span className="text-black">MY</span> <span className="text-orange-800">BLOG</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <BlogPost
              title="Best Services"
              date="Jan 20, 2025"
              excerpt="At FirstHomeStay, we pride ourselves on warm hospitality and personalized service..."
              fullText="At FirstHomeStay, we pride ourselves on warm hospitality and personalized service. From seamless check-ins to curated local experiences, our staff is dedicated to making your stay unforgettable. Whether it's breakfast in bed or a sunset rooftop dinner, your comfort is our top priority."
              image="/images/blo1.jpg"
            />
            <BlogPost
              title="Top Hotel"
              date="Feb 14, 2024"
              excerpt="Discover why FirstHomeStay is consistently rated among the top boutique hotels..."
              fullText="Discover why FirstHomeStay is consistently rated among the top boutique hotels. With thoughtfully designed rooms, eco-conscious amenities, and an inviting ambiance that feels like home, we redefine what a luxury stay means for the modern traveler."
              image="/images/blo2.webp"
            />
            <BlogPost
              title="Our Culture"
              date="July 4, 2023"
              excerpt="Experience the soul of FirstHomeStay through our people, stories, and local charm..."
              fullText="Experience the soul of FirstHomeStay through our people, stories, and local charm. Our team reflects the warmth and culture of our region, offering guests an authentic connection to the community, cuisine, and traditions that make every visit special."
              image="/images/blo3.jpg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default Blog;
