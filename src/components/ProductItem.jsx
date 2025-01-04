import Image from 'next/image';
import { Card } from '@radix-ui/themes';

export default function ProductItem({ title, description, imageUrl, reverse = false }) {
  return (
    <Card className="p-8 transition-all duration-300 hover:translate-y-[-4px] shadow-md">
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
    </Card>
  );
} 