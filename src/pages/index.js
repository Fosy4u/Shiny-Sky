import React, { useEffect, useMemo, useRef } from "react";

import { Link } from "react-scroll";
import Typed from "typed.js";

import BackgroudImage from "../assets/images/bg/house-background.jpg";

import About from "../component/About";

// import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
// import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
import Switcher from "../component/Switcher";
import Navbar from "../component/navbar";
import OurServices from "../component/OurServices";
import Areas from "../component/Areas";
import Process from "../component/Process";
import WhyChooseUs from "../component/WhyChooseUs";

/**
 * Index Component
 */
export default function Index() {
  const typrdRef = useRef(null);
  const options = useMemo(
    () => ({
      //window cleaning service
      strings: ["Shiny", "Clean", "Sparkling", "Crystal", "Streak-Free"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    }),
    []
  );

  useEffect(() => {
    if (typrdRef.current) {
      const typed = new Typed(typrdRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, [typrdRef, options]);
  return (
    <>
      <div>
        <Navbar />
        <section
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
          id="home"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
              <h4 className="text-white lg:text-5xl text-2xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                We are here <br />
                To Make your Windows{" "}
                <span
                  ref={typrdRef}
                  className="typewrite relative text-type-element"
                  id="typed"
                  data-period="2000"
                  data-type='["Personal","Secure","Affordable","Accessible","Reliable"]'
                ></span>
              </h4>

              <p className="text-slate-300 mb-0 max-w-2xl text-lg">
                All frames, sills, and tracks are cleaned with every window
                cleaning service.
              </p>
              {/* <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                Our team is dedicated to delivering exceptional results with
                every job, using both the good old-fashioned squeegee and modern
                techniques to achieve a spotless finish. Whether you need
                residential or commercial window cleaning, we have the expertise
                and equipment to handle it all.
              </p> */}

              <div className="relative mt-10">
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="contact"
                  className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-blue-700 text-white rounded-md cursor-pointer px-6 py-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center text-base font-medium"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <About />

        {/* Service section */}
        {/* <Services /> */}
        <OurServices />

        <WhyChooseUs />
        <Areas />
        <Process />
        {/* Portfolio section */}
        {/* <Portfolio /> */}

        {/* Review section */}
        <Review />

        {/* Blog section */}
        {/* <Blog /> */}

        {/* Contact section */}
        <Contact />

        {/* Footer section */}
        <Footer />

        {/* Switcher section */}
        <Switcher />
      </div>
    </>
  );
}
