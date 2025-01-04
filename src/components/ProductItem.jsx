import Image from 'next/image';

export default function ProductItem({ title, description, imageUrl, reverse = false }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:translate-y-[-4px]"
         style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
        <div className="w-full md:w-2/5">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h3 className="text-2xl font-medium mb-4 text-gray-900">{title}</h3>
          <div className="prose max-w-none text-gray-600">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
} 