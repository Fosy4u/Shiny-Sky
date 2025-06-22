// import { Link as Link2 } from "react-router-dom";
// import AboutVideo from "../assets/videos/about.MOV";
// import { ModalVideo, useToggle } from "@baskvava/react-video-modal";

import AboutImage from "../assets/images/cleaner1.jpg";
//  import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  // const { isOpen, toggle, close } = useToggle();

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={AboutImage}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                />
                {/* <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link2
                    to="#"
                    onClick={toggle}
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link2>
                </div> */}
                {/* <ModalVideo
                  title="video"
                  header="Correct Canvassing"
                  width={800}
                  isOpen={isOpen}
                  onClosed={close}
                  url={AboutVideo}
                /> */}
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>

                <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                  At Shiny Sky Window Cleaning Limited, we’re committed to
                  providing top-quality window cleaning with a perfect blend of
                  tradition and innovation.
                </p>
                <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                  We proudly use both the trusted, old-fashioned mop and
                  squeegee method for that personal touch, as well as modern,
                  high-reach water-fed pole systems for efficient and
                  streak-free results.
                </p>
                <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-2">
                  Serving both residential and commercial clients, our reliable
                  local team is here to make your windows shine—enhancing the
                  beauty and brightness of every property we work on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      /> */}
      {/* {isOpen && <video src={AboutVideo} controls autoPlay />} */}
    </>
  );
}
