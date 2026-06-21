import React from "react";

const faqs = [
  {
    question: "Do you offer window cleaning in Gravesend?",
    answer:
      "Yes. Shiny Sky Window Cleaning is registered in Gravesend and provides local residential and commercial window cleaning across Gravesend, DA12, Dartford, Kent, and nearby areas.",
  },
  {
    question: "What services do you clean?",
    answer:
      "We clean interior and exterior windows, frames, sills and tracks, plus gutters, fascias, soffits, conservatories and solar panels.",
  },
  {
    question: "How often can I book regular cleans?",
    answer:
      "We can set up regular 4, 6 or 8 weekly window cleaning schedules depending on your property and preference.",
  },
];

export default function SeoFaq() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800" id="faq">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-blue-500 text-2xl font-bold mb-4">
            Local Window Cleaning FAQs
          </h2>
          <p className="text-center text-gray-700 dark:text-slate-300 mb-10">
            Helpful answers for customers looking for a trusted window cleaner
            in Gravesend, Kent and surrounding areas.
          </p>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-slate-900 rounded-lg shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
