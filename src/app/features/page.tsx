import features from "./data";

const Features: React.FC = () => {
  return (
    <section className="py-2 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-gray-700">
          How we change the game
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;