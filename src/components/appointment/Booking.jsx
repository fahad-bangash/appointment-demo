import React from "react";

const Booking = () => {
  const Products = [
    {
      id: 1,
      title: "Japanese lessons",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays.With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "1h",
      price: "Rp 350.00",
    },
    {
      id: 2,
      title: "English lessons with students",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays.With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "3h",
      price: "Rp 350.00",
    },
    {
      id: 3,
      title: "Japanese lessons",
      text: "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays.With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "2h",
      price: "Rp 350.00",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <h5 className="text-2xl font-bold">Appointment Booking</h5>

      {Products.map((item) => (
        <div
          key={item.id}
          className="w-full p-4 bg-white border border-gray-200 rounded-lg mt-2 shadow md:mt-3 dark:bg-gray-800 dark:border-gray-700 flex flex-wrap"
        >
          <div className="w-full md:w-10/12">
            <h1 className="text-lg font-bold mb-5 text-gray-900 dark:text-white">
              {item.title}
            </h1>
            <p className="-mt-5 text-sm text-neutral-500">{item.text}</p>
          </div>

          <div className="w-full md:w-2/12 mt-4 md:mt-0 md:ml-auto flex">
            <div className="md:ml-auto">
              <h1 className="text-lg font-bold   text-gray-900 dark:text-white">
                {item.price}
              </h1>
              <span className=" px-2 py-0.5  text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Appointment
              </span>
            </div>
          </div>

          <div className="w-full md:w-10/12">
            <p className="mt-4 text-xs text-neutral-500">{item.time}</p>
          </div>

          <div className="w-full md:w-2/12 mt-4 md:mt-0 md:ml-auto flex">
            <div className="md:ml-auto ml-auto">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{ marginLeft: "auto" }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
