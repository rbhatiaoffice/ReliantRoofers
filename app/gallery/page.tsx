'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

// Note: In a real application, this would come from a CMS or database
const galleryItems = [
  { id: 1, title: 'Pitched Roof Installation', category: 'Pitched Roofing', image: '/images/gallery/1.jpg' },
  { id: 2, title: 'Flat Roof Replacement', category: 'Flat Roofing', image: '/images/gallery/2.jpg' },
  { id: 3, title: 'Loft Conversion Roofing', category: 'Loft Conversions', image: '/images/gallery/3.jpg' },
  { id: 4, title: 'Roof Repair Work', category: 'Repairs', image: '/images/gallery/4.jpg' },
  { id: 5, title: 'New Build Roofing', category: 'New Construction', image: '/images/gallery/5.jpg' },
  { id: 6, title: 'Slate Roof Installation', category: 'Pitched Roofing', image: '/images/gallery/6.jpg' },
  { id: 7, title: 'GRP Flat Roof', category: 'Flat Roofing', image: '/images/gallery/7.jpg' },
  { id: 8, title: 'Dormer Construction', category: 'Loft Conversions', image: '/images/gallery/8.jpg' },
  { id: 9, title: 'Chimney Repairs', category: 'Repairs', image: '/images/gallery/9.jpg' },
];

const categories = ['All', 'Pitched Roofing', 'Flat Roofing', 'Loft Conversions', 'Repairs', 'New Construction'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Browse our portfolio of completed projects showcasing quality craftsmanship
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow aspect-[4/3] flex items-center justify-center group"
              >
                <div className="text-center">
                  <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <span className="text-gray-400">
                {galleryItems.find(item => item.id === selectedImage)?.title}
              </span>
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">
                {galleryItems.find(item => item.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-300">
                {galleryItems.find(item => item.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

