import React from 'react'

const coveredAreas = [
  "Kent",
  "Essex",
  "Croydon",
  "Purley",
  "Surrey",
];

const Areas = () => {
  return (
    <div>
        <section className="py-16 bg-gray-50 dark:bg-slate-800" id="areas">
            <div className="container mx-auto flex flex-col justify-center items-center">
            <h2 className="text-2xl text-blue-500 font-bold mb-8">Areas We Cover</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-slate-300">
                {coveredAreas.map((area, index) => (
                <li key={index} className="mb-2 ">{area}</li>
                ))}
            </ul>
            <p className="mt-4 text-gray-700 dark:text-slate-300 text-center">
                If your area is not listed, please contact us to see if we can accommodate your needs.
            </p>
            </div>
        </section>
    </div>
  )
}

export default Areas