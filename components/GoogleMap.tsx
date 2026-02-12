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

    // Function to wait for Google Maps API to be fully loaded
    function waitForGoogleMaps(callback: () => void) {
      if (window.google && window.google.maps && window.google.maps.Map) {
        callback();
      } else {
        setTimeout(() => waitForGoogleMaps(callback), 100);
      }
    }

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps && window.google.maps.Map) {
      initializeMap();
    } else {
      // Load Google Maps script with async and defer for best performance
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          waitForGoogleMaps(initializeMap);
        });
        // Also check if it's already loaded
        waitForGoogleMaps(initializeMap);
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          waitForGoogleMaps(initializeMap);
        };
        script.onerror = () => {
          console.error('Failed to load Google Maps. Please check that Maps JavaScript API is enabled in Google Cloud Console.');
        };
        document.head.appendChild(script);
      }
    }

    function initializeMap() {
      if (!mapRef.current || !window.google || !window.google.maps || !window.google.maps.Map) {
        console.error('Google Maps API not fully loaded');
        return;
      }

      try {
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

        // Use classic Marker (doesn't require Map ID)
        // AdvancedMarkerElement requires a Map ID which needs additional setup
        new window.google.maps.Marker({
          position: center,
          map,
          title: 'Reliant Roofers',
        });

        mapInstanceRef.current = map;
      } catch (error) {
        console.error('Error initializing Google Map:', error);
      }
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

