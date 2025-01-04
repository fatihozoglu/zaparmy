export default function PageTitle({ children }) {
  return (
    <div className="relative mb-12 text-center">
      <h1 className="text-3xl md:text-4xl font-medium text-gray-900 relative z-10">
        {children}
      </h1>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-60" />
      <div className="mt-4 flex justify-center">
        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-40 -z-10" />
    </div>
  );
} 