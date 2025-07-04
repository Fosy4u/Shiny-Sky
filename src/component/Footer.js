import React from "react";
import { Link } from "react-router-dom";

import LogoLight from "../assets/images/Shiny-Sky-White.png";

export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <Link to="#" className="logo-footer">
                <img src={LogoLight} className="md:ms-0 mx-auto w-32" alt="" />
              </Link>
            </div>

            <div className="md:col-span-5 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Design & Develop with{" "}
                  <i className="mdi mdi-heart text-orange-700"></i> by{" "}
                  <Link
                    to="https://fosterogwudu.com/"
                    target="_blank"
                    className="text-reset"
                  >
                    Foster Ogwudu
                  </Link>
                  .{" "}
                  <Link
                    to="https://www.linkedin.com/in/foster-ogwudu-781208174"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i className="uil uil-linkedin" title="Linkedin"></i>
                  </Link>
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <!-- Back to top --> */}
      <Link
        to="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-orange-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* <!-- Back to top --> */}
    </>
  );
}
