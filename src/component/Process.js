import React from "react";

const steps = [
  {
    title: "Contact Us for Quote",
    description:
      "Reach out to us via phone or email to get a personalized quote for your window cleaning needs.",
    direction: "left",
  },
  {
    title: "Join Our 4, 6 or 8 Weekly Schedule",
    description:
      "Choose a convenient schedule for regular window cleaning services, whether it's every 4, 6, or 8 weeks.",
    direction: "right",
  },
  {
    title: "Text Reminder",
    description:
      "Receive a text reminder evening before your scheduled window cleaning service.",
    direction: "left",
  },
  {
    title: "Enjoy Clean Windows",
    description:
      "Sit back and relax while we take care of your window cleaning, leaving your windows spotless and sparkling.",
    direction: "right",
  },
  {
    title: "Payment",
    description:
      "Payment is due on the day of service, ensuring a hassle-free experience.",
    direction: "left",
  },
];

const Process = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 dark:bg-slate-800" id="process">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              {steps.map((step, index) => (
                <div className="timeline-item mt-5 pt-4" key={index}>
                  {step.direction === "left" ? (
                    <div className="grid sm:grid-cols-2">
                      <div className="md:order-1 order-2">
                        <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                          <h5 className="text-lg dark:text-white mb-1 font-medium">
                            {step.title}
                          </h5>
                          <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2">
                      <div className="mt-4 mt-sm-0">
                        {/* <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={launchImage} className="h-64 w-64" alt="" />
                    </div> */}
                      </div>
                      <div className="mt-4 mt-sm-0">
                        <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                          <h5 className="text-lg dark:text-white mb-1 font-medium">
                            {step.title}
                          </h5>
                          <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
