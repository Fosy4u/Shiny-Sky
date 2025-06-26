import React from "react";
import TinySlider from "tiny-slider-react";

import "tiny-slider/dist/tiny-slider.css";

const settings = {
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 10000,
  navPosition: "bottom",
  speed: 400,
  controlsText: [
    '<i class="mdi mdi-chevron-left "></i>',
    '<i class="mdi mdi-chevron-right"></i>',
  ],
  gutter: 0,
  responsive: {
    768: {
      items: 2,
    },
  },
};
export default function Review() {
  const review = [
    {
      id: "1",
      name: "Azu",
      review:
        "I had a fantastic experience with Shiny Sky Window Cleaning! Their team was professional, punctual, and did an amazing job on my windows. I highly recommend them to anyone looking for top-notch window cleaning services.",
    },
    {
      id: "2",
      name: "Tommy",
      review:
        "Just got your number from my neighbour in Portbridge gardens. A very good commendation given by my neighbour, I would like to book you for a window clean please.",
    },
    {
      id: "3",
      name: "Julie",
      review:
        "Hi Foster, I just wanted to say a huge thank you for the window clean you organised for me today. I am so pleased with the results and will definitely be recommending your company to my friends and family.",
    },
    {
      id: "4",
      name: "Sarah",
      review:
        "I am absolutely thrilled with the window cleaning service I received! The team was friendly, efficient, and left my windows sparkling clean. I will definitely be using Shiny Sky Window Cleaning again in the future.",
    },
    {
      id: "5",
      name: "Ola",
      review:
        "My window looks new again. Now, I would want my sofit and fascia cleaned as well. Please book me in for next week.",
    },
    {
      id: "6",
      name: "Tracy",
      review: "Thanks Foster. Lovely job! All paid",
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-50 dark:bg-slate-800" id="testimonial">
        <div className="container mx-auto">
          <h2 className="text-center text-blue-500 text-2xl font-bold mb-8">
            What Our Clients Say
          </h2>
          <TinySlider settings={settings}>
            {review.map((item) => (
              <div key={item.id} className="p-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 ">
                  <p className="text-slate-700 dark:text-slate-300 mb-4 italic h-[8rem]">
                    {item.review}
                  </p>
                  <h5 className="text-blue-600 font-semibold">{item.name}</h5>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </section>
    </>
  );
}
