import React from "react";
import "@styles/globals.css";

const Hero3 = () => {
  return (
    <>
      <div className="bg-[#F7F7FA] p-4 md:p-7">
        <div className="flex flex-col pb-10 md:pb-[81px] pt-5 md:pt-[45px] items-center justify-center">
          <div className="w-16 md:w-[69px] h-2 md:h-[5px] bg-gradient-to-br from-[#F76680] to-[#57007B]" />
          <p className="text-gray-900 font-inter text-3xl md:text-5xl font-normal pt-10 text-center">
            Our recent{" "}
            <span className="text-gray-900 font-inter text-3xl md:text-5xl font-bold">
              Case studies
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col">
          {/* Card 1 */}
          <div className="flex flex-row py-5 px-4 mx-4  rounded-lg max-lg:flex-col">
            <img src="/assests/Case-study__image.png" alt="" />
            <div className="bg-[#F1F2FF]  rounded-tr-3xl rounded-br-3xl px-4 md:px-5 lg:px-8 pt-6 md:pt-9 pb-8 md:pb-8">
              <h3 className="text-gray-800 text-center font-inter mt-4 md:mt-9 pb-4 md:pb-8 text-2xl md:text-3xl font-semibold">
                Website Design for SCFC Canada
              </h3>
              <p className="text-gray-700 font-feature-salt font-inter text-base md:text-sm mx-2 md:mx-8 font-normal">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex gap-2 pt-4 md:pt-6 justify-end">
                <p className="hover:cursor-pointer">Read More</p>
                <img
                  className="hover:cursor-pointer"
                  src="/assests/Group (1).svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-row py-5 px-4 mx-4  rounded-lg max-lg:flex-col">
            <img src="/assests/Case-study__image (1).png" alt="" />
            <div className="bg-[#F0FFF7]  rounded-tr-3xl rounded-br-3xl px-4 md:px-5 lg:px-8 pt-6 md:pt-9 pb-8 md:pb-8">
              <h3 className="text-gray-800 text-center font-inter mt-4 md:mt-9 pb-4 md:pb-8 text-2xl md:text-3xl font-semibold">
                Website Design for SCFC Canada
              </h3>
              <p className="text-gray-700 font-feature-salt font-inter text-base md:text-sm mx-2 md:mx-8 font-normal">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex gap-2 pt-4 md:pt-6 justify-end">
                <p className="hover:cursor-pointer">Read More</p>
                <img
                  className="hover:cursor-pointer"
                  src="/assests/Group (1).svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-row py-5 px-4 mx-4  rounded-lg max-lg:flex-col">
            <img src="/assests/Case-study__image (2).png" alt="" />
            <div className="bg-[#FFF4F4]  rounded-tr-3xl rounded-br-3xl px-4 md:px-5 lg:px-8 pt-6 md:pt-9 pb-8 md:pb-8">
              <h3 className="text-gray-800 text-center font-inter mt-4 md:mt-9 pb-4 md:pb-8 text-2xl md:text-3xl font-semibold">
                Website Design for SCFC Canada
              </h3>
              <p className="text-gray-700 font-feature-salt font-inter text-base md:text-sm mx-2 md:mx-8 font-normal">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex gap-2 pt-4 md:pt-6 justify-end">
                <p className="hover:cursor-pointer">Read More</p>
                <img
                  className="hover:cursor-pointer"
                  src="/assests/Group (1).svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-4 md:pt-8 justify-center md:justify-end">
          <p className="hover:cursor-pointer">Read more case studies</p>
          <img
            className="hover:cursor-pointer"
            src="/assests/Group (1).svg"
            alt=""
          />
        </div>
      </div>

      {/* Way of building */}
      <div className="bg-[#fff] p-4 md:p-10">
        <div className="flex flex-col pb-5 md:pb-[81px] pt-5 md:pt-[50px] items-center justify-center">
          <div className="w-16 md:w-[69px] h-2 md:h-[5px] bg-gradient-to-br from-[#F76680] to-[#57007B]" />
          <p className="text-gray-900 font-inter text-3xl md:text-5xl font-normal pt-10 text-center">
            Way of building{" "}
            <span className="text-gray-900 font-inter text-3xl md:text-5xl font-bold">
              Great Software
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:p-10 m-4 md:m-9 gap-5">
        {/* Left Content */}
        <div className="flex flex-col flex-1 md:flex-none py-5 px-4 md:px-9 mx-4 md:mx-10">
          <h2 className="text-gray-900 mb-6 text-center md:text-left font-inter text-2xl md:text-3xl font-semibold">
            Build the right team to scale
          </h2>
          <p className="text-gray-800 font-inter mb-8 text-base md:text-sm max-w-md text-center md:text-left font-normal">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>
          <p className="text-gray-800 pb-6 md:pb-9 font-inter text-base  md:text-sm max-w-md  text-center md:text-left font-normal">
            Our{" "}
            <span className="bg-gradient-text text-gray-900 font-inter text-base md:text-sm font-normal">
              delivery model
            </span>{" "}
            helps you cut costs and deliver within budget.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-10 bg-gradient-to-br from-[#F76680] to-[#57007B]" />
            <p className="font-inter text-base italic font-light max-w-xl bg-gradient-text">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </p>
          </div>
          <div className="flex items-center mt-2">
            <img src="/assests/Ellipse 185.svg" alt="" />
            <div className="ml-2">
              <p className="text-gray-900 font-inter text-base font-normal">
                Jeewa markram
              </p>
              <p className="text-gray-600 font-inter text-xs font-normal">
                CEO
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="max-lg:hidden">
          <img src="/assests/Rectangle 17.png" alt="" />
        </div>
      </div>

      {/* Way of building (second section) */}
      <div className="bg-[#fff] p-4 md:p-10">
        <div className="flex flex-col md:flex-row p-4 md:p-10 m-4 md:m-9 gap-5">
          {/* Left Image */}
          <div className="max-lg:hidden">
            <img src="/assests/Rectangle 18.png" alt="" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 md:flex-none py-5 px-4 md:px-10 mx-4 md:mx-10">
            <h2 className="text-gray-900 mb-6 text-center md:text-left font-inter text-2xl md:text-3xl font-semibold">
              Build the right team to scale
            </h2>
            <p className="text-gray-800 font-inter text-base md:text-sm max-w-md text-center md:text-left font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers)
            </p>
            <p className="text-gray-800 pb-6 md:pb-9 font-inter text-base md:text-sm max-w-lg text-center md:text-left font-normal">
              Our{" "}
              <span className="bg-gradient-text text-gray-900 font-inter text-base md:text-sm font-normal">
                delivery model
              </span>{" "}
              helps you cut costs and deliver within budget.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-10 bg-gradient-to-br from-[#F76680] to-[#57007B]" />
              <p className="font-inter text-base italic font-light max-w-md bg-gradient-text">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex items-center mt-2">
              <img src="/assests/Ellipse 185 (2).svg" alt="" />
              <div className="ml-2">
                <p className="text-gray-900 font-inter text-base font-normal">
                  Jeewa markram
                </p>
                <p className="text-gray-600 font-inter text-xs font-normal">
                  CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Way of building (third section) */}
      <div className="bg-[#fff] p-4 md:p-10">
        <div className="flex flex-col md:flex-row p-4 md:p-10 m-4 md:m-9 gap-5">
          {/* Left Content */}
          <div className="flex flex-col flex-1 md:flex-none py-5 px-4 md:px-10 mx-4 md:mx-10">
            <h2 className="text-gray-900 mb-6 text-center md:text-left font-inter text-2xl md:text-3xl font-semibold">
              Build the right team to scale
            </h2>
            <p className="text-gray-800 font-inter text-base md:text-sm max-w-md text-center md:text-left font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers)
            </p>
            <p className="text-gray-800 pb-6 md:pb-9 font-inter text-base md:text-sm max-w-md text-center md:text-left font-normal">
              Our{" "}
              <span className="bg-gradient-text text-gray-900 font-inter text-base md:text-sm font-normal">
                delivery model
              </span>{" "}
              helps you cut costs and deliver within budget.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-10 bg-gradient-to-br from-[#F76680] to-[#57007B]" />
              <p className="font-inter text-base italic font-light max-w-xl bg-gradient-text">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex items-center mt-2">
              <img src="/assests/Ellipse 185 (1).svg" alt="" />
              <div className="ml-2">
                <p className="text-gray-900 font-inter text-base font-normal">
                  Jeewa markram
                </p>
                <p className="text-gray-600 font-inter text-xs font-normal">
                  CEO
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="max-lg:hidden">
            {/* Apply CSS classes to hide the image on small screens */}
            <img
            
              src="/assests/Rectangle 19.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
