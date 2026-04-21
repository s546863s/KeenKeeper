import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
            {/* 404 Icon/Text */}
            <div className="space-y-4">
                <h1 className="text-9xl font-extrabold text-[#1a432e]">404</h1>
                <h2 className="text-3xl font-bold text-gray-700">Page Not Found</h2>
                <p className="text-gray-500 max-w-sm mx-auto">
                    Oops! The page you are looking for doesn't exist or has been moved.
                </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-8">
                <Link to="/">
                    <button className="btn bg-[#1a432e] text-white hover:bg-[#153525] border-none px-8 py-3 rounded-lg">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;