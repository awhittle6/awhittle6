// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Anderson's Personal Site!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Under construction...
        </p>
        <div className="flex justify-center mt-8">
          <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};