'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PageTitle from '@/components/PageTitle';

// Dynamically import the map component with ssr disabled
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
);

export default function ContactPage() {
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
          <Map />
        </div>
      </div>
    </main>
  );
} 