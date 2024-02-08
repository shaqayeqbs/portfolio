import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#ff5100] via-[#ff8400] to-[#ffaa00] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-6">Page Not Found!</p>
        <p className="text-lg">
          The page you are looking for might be in another universe.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
