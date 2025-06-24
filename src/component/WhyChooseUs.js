const WhyChooseUs = () => {
  return (
    <div>
      {" "}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-blue-500 font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 dark:text-slate-300 mb-1">
            We are committed to delivering high-quality window cleaning services
            with an emphasis on professionalism and customer satisfaction.
          </p>
          <p className="text-gray-700 dark:text-slate-300 mb-6">
            In the unlikely event that our service does not meet your
            expectations, we offer a 48-hour re-clean guarantee to ensure your
            complete peace of mind.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
