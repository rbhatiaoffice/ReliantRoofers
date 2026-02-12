'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  apiKey?: string;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

export default function GoogleMap({ 
  center = { lat: 51.5074, lng: -0.1278 }, // Default to London
  zoom = 12,
  apiKey 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || !apiKey) return;

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      // Load Google Maps script with async and defer for best performance
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        existingScript.addEventListener('load', initializeMap);
        if (window.google && window.google.maps) {
          initializeMap();
        }
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,marker&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        script.onerror = () => {
          console.error('Failed to load Google Maps. Please check that Maps JavaScript API is enabled in Google Cloud Console.');
        };
        document.head.appendChild(script);
      }
    }

    function initializeMap() {
      if (!mapRef.current || !window.google || !window.google.maps) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
          },
        ],
      });

      // Add marker using AdvancedMarkerElement (recommended) or fallback to Marker
      if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
        // Use AdvancedMarkerElement (recommended)
        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: center,
          title: 'Reliant Roofers',
        });
      } else {
        // Fallback to classic Marker (deprecated but still works)
        new window.google.maps.Marker({
          position: center,
          map,
          title: 'Reliant Roofers',
        });
      }

      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup if needed
    };
  }, [center, zoom, apiKey]);

  if (!apiKey) {
    return (
      <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">Google Maps API key is required</p>
          <p className="text-sm text-gray-500">
            Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}

