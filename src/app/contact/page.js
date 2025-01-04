'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm';

// Dynamically import the map component with ssr disabled
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
);

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>İletişim</PageTitle>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
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

      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Bize Ulaşın</h2>
        <p className="text-gray-600 mb-8 text-center">
          Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
        </p>
        <ContactForm />
      </div>
    </main>
  );
} 