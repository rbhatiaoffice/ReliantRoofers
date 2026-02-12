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
        // Center point between London, Croydon, and Swindon to show all service areas
        const mapCenter = { lat: 51.5, lng: -0.5 }; // Central point for London and surrounding areas
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: mapCenter,
          zoom: 9, // Zoom level to show London and surrounding areas
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

        // Wait for map to be fully ready before adding markers
        window.google.maps.event.addListenerOnce(map, 'idle', () => {
          // Service area locations
          const serviceAreas = [
            { lat: 51.5074, lng: -0.1278, label: 'London' },
            { lat: 51.3762, lng: -0.0982, label: 'Croydon' },
            { lat: 51.5584, lng: -1.7812, label: 'Swindon' },
          ];

          // Add markers for each service area
          serviceAreas.forEach((area) => {
            const marker = new window.google.maps.Marker({
              position: { lat: area.lat, lng: area.lng },
              map: map,
              title: `Reliant Roofers - ${area.label}`,
              label: {
                text: area.label,
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 'bold',
              },
            });

            // Add info window for each marker
            const infoWindow = new window.google.maps.InfoWindow({
              content: `<div style="padding: 8px;"><strong>Reliant Roofers</strong><br/>${area.label}</div>`,
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });
          });

          // Fit bounds to show all service areas
          const bounds = new window.google.maps.LatLngBounds();
          serviceAreas.forEach((area) => {
            bounds.extend(new window.google.maps.LatLng(area.lat, area.lng));
          });
          map.fitBounds(bounds);
          
          // Add some padding to the bounds
          const padding = 50;
          map.fitBounds(bounds, padding);
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

