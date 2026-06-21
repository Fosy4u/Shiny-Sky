import React from "react";

const coveredAreas = [
  "Gravesend",
  "Northfleet",
  "Dartford",
  "Swanscombe",
  "Stone",
  "Meopham",
  "Shorne",
  "Longfield",
  "Bexley",
  "Bromley",
  "Orpington",
  "Croydon",
  "Purley",
  "Kent",
  "Essex",
  "Surrey",
];

const Areas = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 dark:bg-slate-800" id="areas">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h2 className="text-2xl text-blue-500 font-bold mb-8">
            Areas We Cover
          </h2>
          <p className="mb-6 text-gray-700 dark:text-slate-300 text-center max-w-3xl">
            Based in Gravesend, we provide reliable window cleaning for homes
            and businesses across DA12, Dartford, Northfleet and wider Kent,
            plus parts of London, Surrey and Essex.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-slate-300">
            {coveredAreas.map((area, index) => (
              <li key={index} className="mb-2 ">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700 dark:text-slate-300 text-center">
            If your area is not listed, please contact us to see if we can
            accommodate your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Areas;
