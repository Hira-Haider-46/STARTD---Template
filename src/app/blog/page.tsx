import Image from "next/image";
import features from "./data";
import person from "../assets/person.png";

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-8 md:px-16">
      <h1 className="text-gray-800 text-4xl md:text-6xl font-bold text-center mb-12">
        Transform your business
      </h1>

      <div className="flex flex-col md:flex-row gap-8">

        <div className="flex-1">
          {features.map((feature) => (
              <div key={feature.id} className="flex gap-6 mb-8 items-start">
                  
              <div className="flex items-center justify-center w-12 h-auto bg-blue-100 rounded-full">
                <span className="text-blue-700 font-bold text-xl">
                  {feature.id}
                </span>
              </div>

              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src={person}
            alt="Transform your business"
            width={500}
            height={500}
            className="w-full h-auto max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;