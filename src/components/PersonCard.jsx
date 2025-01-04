import Image from 'next/image';

export default function PersonCard({ name, title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-blue-600 mb-3">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
} 