export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-2xl text-slate-600 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
