// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Anderson's Website!</h1>
        <p className="mt-4 text-lg text-gray-600">Under construction...</p>
        <div className="flex justify-center mt-8">
          <div className="relative w-24 h-24">
            {/* Construction worker animation */}
            <div className="absolute w-full h-full bg-center bg-no-repeat bg-contain animate-hammer" style={{ backgroundImage: 'url("/hammer.svg")' }} />
          </div>
        </div>
      </div>
    </div> );
};