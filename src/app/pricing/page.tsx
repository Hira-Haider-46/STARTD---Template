const Pricing: React.FC = () => {
  return (
    <div className="px-16 my-16">
      <h1 className="text-gray-800 text-6xl font-bold">Are you ready?</h1>

      <div className="flex flex-col md:flex-row md:justify-between mt-12 gap-8">
        <div className="w-8/10">
          <p className="text-gray-500 text-lg font-normal mb-8 mr-4">
            Lorem id ullamco pariatur eiusmod labore qui deserunt incididunt
            deserunt nostrud. Tempor duis in adipisicing exercitation ipsum
            nostrud esse. Reprehenderit cupidatat sint est deserunt id eiusmod
            amet aliqua officia.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-blue-700 text-sm font-bold">
              WHAT IS INCLUDED
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center w-1/2">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Laboris nulla</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Id aute amet pariatur</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Nostrud duis tempor</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Reprehenderit</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Laboris nulla</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Id aute amet pariatur</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Nostrud duis tempor</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-700 text-xl mr-4">✔</span>
                <span className="text-gray-700">Reprehenderit</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-2/10 flex flex-col text-center">
          <p className="text-gray-800 font-medium text-lg mb-2">
            If you order now...
          </p>
          <h2 className="text-gray-800 text-6xl font-bold mb-4">$99/mo</h2>
          <button className="font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Contact sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;