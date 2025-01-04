'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import PageTitle from '@/components/PageTitle';

export default function ContactPage() {
  // This fixes the missing icon issue in Next.js
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
    });
  }, []);

  const position = [40.9361448493572, 29.13474372963872];

  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>İletişim</PageTitle>
      
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <h2 className="text-xl font-semibold mb-2">Adres</h2>
          <p className="mb-1">Altayçeşme Mah. Çamlı Sk. No:16</p>
          <p className="mb-1">DAP Royal Center D Blok D86</p>
          <p className="mb-1">Maltepe/İstanbul</p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Çalışma Saatleri</h2>
          <p className="mb-1">Pzt-Cum: 9:00 - 18:00</p>
        </div>

        <div className="h-[400px] col-span-2 w-full rounded-lg overflow-hidden relative z-0">
          <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                DAP Royal Center D Blok D86
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
} 