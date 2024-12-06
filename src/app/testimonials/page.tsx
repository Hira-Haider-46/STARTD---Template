import testimonials from "./data.js";

const Testimonials: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-gray-700 text-2xl font-bold text-center my-2">Testimonials</h1>
      <div className="mx-auto space-y-12 md:py-4 w-4/5">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="text-gray-700 text-5xl">&ldquo;</div>
            <div className="flex flex-col items-start">
              <p className="text-gray-700 text-lg leading-relaxed">
                {testimonial.text}
              </p>
            </div>

            <div className="mt-4 flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-gray-700 font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;