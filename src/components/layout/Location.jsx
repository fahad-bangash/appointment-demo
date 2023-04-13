import React from "react";
import { Link } from "react-router-dom";
const Location = () => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <h5 className="text-2xl font-bold ">Location</h5>

      <Link
        to="#"
        className="flex flex-col items-center bg-white border mt-3 border-gray-200 rounded-lg shadow md:flex-row md:w-full"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 p-4 m-5  md:order-1">
            <h1 className="text-lg font-bold mb-5 text-gray-900 dark:text-white">
              Address
            </h1>
            <p className="mt-4 text-sm m-1 text-neutral-500">
              M7J4+VR8, Unnamed Road, Alangga, Kec. Andoolo, Kabupaten Konawe
              Selatan, Sulawesi Tenggara 93811, Indonesia.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-7/12 p-4   md:order-2">
            Location Map
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Location;
