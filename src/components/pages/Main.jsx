import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";
import Booking from "../appointment/Booking";
import Plan from "../appointment/Plan";
import Location from "../layout/Location";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link
          to="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full"
        >
          <img
            className="object-cover p-6 w-40 h-40 md:h-40 md:w-40 rounded-full"
            src="https://fahadbangash.com/assets/front/img/profile_image_16749795611937761179.png"
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PapaBill Super Store
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  With digital payments your customers will be able to pay for
                  your services and plans early, reducing delays. With digital
                  payments your customers will be able to pay for your services
                  and plans early, reducing delays.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start md:items-center md:mr-10 mb-1 ">
            <img
              className="w-10 h-10 md:w-20 md:h-15 max-w-10 max-h-10"
              src={whatsapp}
              alt="whatsapp"
            />
          </div>
        </Link>
      </div>
      <Booking />
      <Plan />
      <Location />
      <Footer />
    </>
  );
};

export default Main;
