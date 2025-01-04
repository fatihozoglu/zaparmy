export default function PageTitle({ children }) {
  return (
    <h1 className="text-2xl font-medium mb-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 py-4 rounded-lg shadow-sm">
      {children}
    </h1>
  );
} 