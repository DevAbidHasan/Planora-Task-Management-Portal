import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-lg w-full text-center bg-white shadow-xl rounded-2xl p-10">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-amber-500 opacity-90">
          404
        </h1>

        {/* Error Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Error Message */}
        <p className="mt-3 text-gray-500 leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Action Button */}
        <Link to="/">
          <button className="mt-8 px-8 py-3 bg-amber-500 text-white font-medium rounded-xl shadow-md hover:bg-amber-600 transition duration-300">
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
}

export default ErrorPage;
