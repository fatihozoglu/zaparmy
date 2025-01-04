import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ title, excerpt, date, imageUrl, slug }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-medium mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Devamını Oku →
        </Link>
      </div>
    </div>
  );
} 