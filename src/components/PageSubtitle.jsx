export default function PageSubtitle({ children, className = '' }) {
  return (
    <h2 className={`text-xl font-medium mb-6 text-gray-900 border-b border-gray-200 pb-2 ${className}`}>
      {children}
    </h2>
  );
} 