import ConservatoryImage from "../assets/images/conservatory.jpg";
import WindowCleaningImage from "../assets/images/cleaner1.jpg";
import FasciaImage from "../assets/images/fascia.jpg";
import GutterImage from "../assets/images/gutter.jpg";
import SolarImage from "../assets/images/solar-panel.jpg";
import InteriorImage from "../assets/images/interior.jpg";

const services = [
  {
    title: "Exterior Window Cleaning",
    description:
      "We offer professional exterior window cleaning services to keep your windows sparkling clean and streak-free.",
    image: WindowCleaningImage,
  },
  {
    title: "Interior Window Cleaning",
    description:
      "We provide thorough interior window cleaning to brighten up your living spaces and improve visibility.",
    image: InteriorImage,
  },
  {
    title: "Conservatory Cleaning",
    description:
      "Our conservatory cleaning service ensures your conservatory is spotless and inviting.",
    image: ConservatoryImage,
  },
  {
    title: "Fascia & Soffit Cleaning",
    description:
      "We clean fascias and soffits to enhance the appearance of your home and protect against weather damage.",
    image: FasciaImage,
  },
  {
    title: "Gutter Cleaning",
    description:
      "Our gutter cleaning service prevents blockages and water damage, ensuring your gutters function properly.",
    image: GutterImage,
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "We provide solar panel cleaning services to maximize the efficiency of your solar energy system.",
    image: SolarImage,
  },
];

const OurServices = () => {
  return (
    <div id="features">
      <section className="py-16 bg-gray-50 dark:bg-slate-800" id="services">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
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
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
