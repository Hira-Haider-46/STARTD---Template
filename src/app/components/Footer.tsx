import Image from "next/image";
import logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-400 py-10 mt-16">
      <div className="flex items-center space-x-2 mb-8 px-8 lg:px-16">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-blue-600">STARTD</h1>
      </div>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/2 flex flex-wrap space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 px-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Product
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>Features</li>
              <li>Customers</li>
              <li>Platform</li>
              <li>Pricing</li>
              <li>Enterprise</li>
              <li>What's new?</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Resources
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>Get started</li>
              <li>Guides</li>
              <li>Tools</li>
              <li>Case studies</li>
              <li>Solutions</li>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Training</li>
              <li>Other resources</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              About Us
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Leadership</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="w-full max-w-lg px-4">
            <h3 className="font-semibold text-lg mb-4 text-center lg:text-left text-gray-800">
              Subscribe to our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;