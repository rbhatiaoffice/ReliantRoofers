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
        // London center coordinates
        const londonCenter = { lat: 51.5074, lng: -0.1278 };
        
        // 30 miles in meters (1 mile = 1609.34 meters)
        const radiusMeters = 30 * 1609.34;
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: londonCenter,
          zoom: 10, // Zoom level to show London and surrounding 30-mile area
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

        // Wait for map to be fully ready before adding coverage area
        window.google.maps.event.addListenerOnce(map, 'idle', () => {
          // Create a circle to show service coverage area (30 miles from London)
          const serviceAreaCircle = new window.google.maps.Circle({
            strokeColor: '#f97316', // Orange color
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#f97316',
            fillOpacity: 0.15,
            map: map,
            center: londonCenter,
            radius: radiusMeters, // 30 miles in meters
          });

          // Fit the map to show the entire coverage circle
          const bounds = serviceAreaCircle.getBounds();
          if (bounds) {
            map.fitBounds(bounds);
            // Add padding to show area around the circle
            const padding = 50;
            map.fitBounds(bounds, padding);
          }

          // Add a center marker for London
          const centerMarker = new window.google.maps.Marker({
            position: londonCenter,
            map: map,
            title: 'Reliant Roofers - Service Area Coverage',
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#f97316',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            },
          });

          // Info window showing service coverage
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 12px; max-width: 250px;">
                <strong style="font-size: 16px; color: #1e293b;">Reliant Roofers</strong>
                <p style="margin: 8px 0 0 0; color: #475569;">
                  Service Coverage Area<br/>
                  London & Surrounding Areas<br/>
                  Up to 30 miles radius
                </p>
              </div>
            `,
          });

          centerMarker.addListener('click', () => {
            infoWindow.open(map, centerMarker);
          });
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

