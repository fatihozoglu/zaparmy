import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="w-auto h-10 object-contain"
              priority
            />
          </Link>
          <p className="text-sm text-gray-600">
            <span className="mr-1">©</span>2025 Zaparmy SAP Danışmanlık. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 