import React from "react";
import { Link } from "react-router-dom";
const Plan = () => {
  const planProducts = [
    {
      id: 1,
      title: "235 purchase",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays, defaults, absences and reschedules",
      time: "Unlimited · 3 months",
      price: "Rp 350.00",
      month: "6 months",
      subscription: "One time",
    },
    {
      id: 2,
      title: "Super plan 3/w",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays, defaults, absences and reschedules",
      time: "8 sessions · 1 month",
      price: "Rp 350.00",
      month: "6 months",
      subscription: "Recurring",
    },
    {
      id: 3,
      title: "235 purchase",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays, defaults, absences and reschedules",
      time: "Unlimited · 3 months",
      price: "Rp 350.00",
      month: "6 months",
      subscription: "Recurring",
    },
    {
      id: 4,
      title: "Super Plan 4/w",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays, defaults, absences and reschedules",
      time: "Unlimited · 3 months",
      price: "Rp 350.00",
      month: "6 months",
      subscription: "One time",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <h5 className="text-2xl font-bold">Plans</h5>

      <div className="flex flex-wrap">
        {planProducts.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="-m4-5 text-sm font-normal text-gray-700 dark:text-gray-400">
                {item.text}
              </p>

              <p className="mt-4 text-xs font-normal text-gray-700 dark:text-gray-400">
                {item.time}
                <span className="px-2 py-0.5 float-right text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  {item.subscription}
                </span>
              </p>

              <h1 className="text-lg  mt-3 font-bold text-gray-900 dark:text-white">
                {item.price}/
                <span className="px-2 py-0.5  text-xs font-medium text-gray-500  rounded">
                  {item.month}
                </span>
              </h1>

              <button
                type="button"
                className=" w-full text-white block inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span className="mx-auto">Purchase</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
