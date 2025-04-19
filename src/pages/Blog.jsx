import React, { useState } from 'react';

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
          {/* <span className="mx-1">|</span> */}
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
    <div className="min-h-screen flex items-start justify-center bg-white px-4 pt-4">
      {/* Main Centered Container shifted upwards */}
      <div className="w-full max-w-7xl text-center">
        {/* Blog Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-black">MY</span> <span className="text-orange-800">BLOG</span>
          </h1>
          {/* <div className="h-1 w-16 bg-orange-500 mx-auto mt-2"></div> */}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <BlogPost
            title="Best Services"
            date="Jan 20, 2025"
            // category="Branding"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmet incidunt quidem illum repellat, nemo quam exercitationem voluptas."
            image="/images/blo1.jpg"
          />
          <BlogPost
            title="Top Hotel"
            date="feb 14, 2024"
            // category="Branding"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum voluptatem blanditiis voluptatum, delectus tempora consequatur eveniet quas."
            image="/images/blo2.webp"
          />
          <BlogPost
            title="Our culture"
            date="July 4, 2023"
            // category="Branding"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilis accusantium repellat dignissimos tempore quisquam reiciendis labore!"
            image="/images/blo3.jpg"
          />
          
        </div>
        
      </div>
      
    </div>
    
    
  );
};

export default Blog;
