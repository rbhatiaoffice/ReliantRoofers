'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Using local images from the gallery folder, categorized by their names
const galleryItems = [
  // Pitched Roofing (3 images)
  { 
    id: 1, 
    title: 'Pitched Roof Installation', 
    category: 'Pitched Roofing', 
    image: '/images/gallery/pitched roof.jpeg'
  },
  { 
    id: 2, 
    title: 'Pitched Roof Extension', 
    category: 'Pitched Roofing', 
    image: '/images/gallery/picted roof extension.jpeg'
  },
  { 
    id: 3, 
    title: 'Pitched Roof Project', 
    category: 'Pitched Roofing', 
    image: '/images/gallery/pitched roof (2).jpeg'
  },
  // Flat Roofing (2 images)
  { 
    id: 4, 
    title: 'Flat Roof Installation', 
    category: 'Flat Roofing', 
    image: '/images/gallery/flat roof.jpeg'
  },
  { 
    id: 5, 
    title: 'Flat Roof Project', 
    category: 'Flat Roofing', 
    image: '/images/gallery/flat roof (2).jpeg'
  },
  // Loft Conversions - Dormer and Loft images (10 images)
  { 
    id: 6, 
    title: 'Dormer Construction', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer.jpeg'
  },
  { 
    id: 7, 
    title: 'Dormer Installation', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (2).jpeg'
  },
  { 
    id: 8, 
    title: 'Dormer Project', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (3).jpeg'
  },
  { 
    id: 9, 
    title: 'Dormer Work', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (4).jpeg'
  },
  { 
    id: 10, 
    title: 'Dormer Construction Project', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (5).jpeg'
  },
  { 
    id: 11, 
    title: 'Dormer Installation Work', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (6).jpeg'
  },
  { 
    id: 12, 
    title: 'Dormer Build', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (7).jpeg'
  },
  { 
    id: 13, 
    title: 'Dormer Extension', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (8).jpeg'
  },
  { 
    id: 14, 
    title: 'Dormer Project Work', 
    category: 'Loft Conversions', 
    image: '/images/gallery/dormer (9).jpeg'
  },
  { 
    id: 15, 
    title: 'Loft Conversion Project', 
    category: 'Loft Conversions', 
    image: '/images/gallery/loft.jpeg'
  },
  // Additional Services / Repairs
  { 
    id: 16, 
    title: 'Gutter & Fascia Installation', 
    category: 'Repairs', 
    image: '/images/gallery/gutter fascia.jpeg'
  },
  { 
    id: 17, 
    title: 'Lead Valley Work', 
    category: 'Repairs', 
    image: '/images/gallery/lead valley.jpeg'
  },
];

const categories = ['All', 'Pitched Roofing', 'Flat Roofing', 'Loft Conversions', 'Repairs'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
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
                    ? 'bg-orange-600 text-white shadow-md hover:shadow-lg transform hover:scale-105'
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
                className="relative rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all aspect-[4/3] group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
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
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                alt={galleryItems.find(item => item.id === selectedImage)?.title || ''}
                fill
                className="object-cover"
                sizes="100vw"
              />
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

