'use client';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm';
import { Card } from '@radix-ui/themes';
import { 
  HomeIcon, 
  ClockIcon, 
  GlobeIcon, 
  EnvelopeClosedIcon, 
  MobileIcon 
} from '@radix-ui/react-icons';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>İletişim</PageTitle>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Left Column - Address and Working Hours */}
        <div className="space-y-8">
          <Card size="3" style={{ padding: '24px' }}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-blue-600">
                <HomeIcon className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Adres</h2>
              </div>
              <div className="space-y-2 text-gray-600">
                <a
                    className="hover:text-blue-600"
                    href="https://maps.app.goo.gl/PU2LKBLLrKzMF8Nh8"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex flex-col">
                    <div className="flex items-center">
                        <GlobeIcon className="w-4 h-4 text-gray-400 flex-shrink-0 mr-2" />
                        <span>Altayçeşme Mah. Çamlı Sk. No:16</span>
                    </div>
                    <span className="ml-6">DAP Royal Center D Blok D86</span>
                    <span className="ml-6">Maltepe/İstanbul</span>
                    </div>
                </a>
                <div className="flex items-center space-x-2">
                  <EnvelopeClosedIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a href="mailto:info@zaparmy.com" className="hover:text-blue-600">info@zaparmy.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MobileIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a href="tel:+905555555555" className="hover:text-blue-600">+90 (555) 555-5555</a>
                </div>
              </div>
            </div>
          </Card>

          <Card size="3" style={{ padding: '24px' }}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-blue-600">
                <ClockIcon className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Çalışma Saatleri</h2>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span>09:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span>Kapalı</span>
                </p>
                <p className="flex justify-between">
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Contact Form */}
        <Card size="3" style={{ padding: '24px' }}>
          <h2 className="text-xl font-semibold mb-6 text-center">Bize Ulaşın</h2>
          <p className="text-gray-600 mb-8">
            Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
          </p>
          <ContactForm />
        </Card>
      </div>

      {/* Full Width Map */}
      <Card style={{ padding: '0', backgroundColor: '#d0d0d0' }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.1360873560138!2d29.134542312132552!3d40.935990108536856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7fa52e2ded9%3A0x2c2ef29261b9747d!2sZAPARMY!5e0!3m2!1str!2str!4v1736032872223!5m2!1str!2str" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>
    </main>
  );
} 