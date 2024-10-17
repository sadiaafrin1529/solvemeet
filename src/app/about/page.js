import Image from "next/image";
import React from "react";
import doctorImage from "@/app/images/doctorBanner.png"; // Assuming you have uploaded the image correctly
import Link from "next/link";
import person from "@/app/images/person1.jpg";
import person1 from "@/app/images/person2.jpg";
export default function Aboutpage() {
  return (
    <main className="container mx-auto">
      {/* Title Section */}
      <h1 className="text-6xl font-bold text-center text-blue-500 mb-4 drop-shadow-lg">
        SOLVEMEET
      </h1>
      {/* First div */}
      <div className="flex flex-col items-center text-center mt-10">
        {/* Description Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image src={doctorImage} alt="Doctor" className="rounded-full" />
          </div>
          <div className="max-w-lg">
            <p className="text-gray-600 text-lg leading-relaxed font-serif font-light">
              <span className="text-blue-500 font-bold text-2xl">
                Solve Meet
              </span>{" "}
              is an online Universal Support platform that provides
              comprehensive guidance for every aspect of life. No matter where
              you are, you can get our help from anywhere in the world. We are
              dedicated to offering a one-stop solution for all your needs. We
              cover everything from medical support and business consultancy to
              IT assistance, education guidance, and more. Our commitment lies
              in delivering exceptional online solutions through live chat,
              email, and phone to help you lead a better life. We have a team of
              professionals who meet strict quality guidelines. They are ready
              to assist you whenever you need them with genuine care.
            </p>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="flex flex-col items-center  text-center mt-10">
        {/* Description Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-y-9 space-x-0 md:space-x-32">
          <div className="max-w-lg">
            <h1 className="underline text-3xl py-4 text-blue-500 font-semibold">
              Our Mission
            </h1>
            <p className="text-gray-600 text-lg leading-7 font-serif font-light">
              <span className="text-blue-500 font-bold text-2xl">
                Our mission
              </span>{" "}
              at Solve Meet is to empower individuals and businesses by offering
              accessible, reliable, and professional support across various
              services. We aim to make finding help easier, ensuring everyone
              can access the expertise they need to succeed.
            </p>
          </div>
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image
              src={doctorImage}
              alt="Doctor"
              className="rounded-full"
              width={350} /* Set smaller width */
              height={150} /* Set smaller height */
            />
          </div>
        </div>
      </div>

      {/* thired div */}
      <div className="flex flex-col items-center  text-center mt-10">
        {/* Description Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-y-9 md:space-x-32">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image
              src={doctorImage}
              alt="Doctor"
              className="rounded-full"
              width={350} /* Set smaller width */
              height={150} /* Set smaller height */
            />
          </div>
          <div className="max-w-lg">
            <h1 className="underline text-3xl py-4 text-blue-500 font-semibold">
              Our Vision
            </h1>
            <p className="text-gray-600 text-lg leading-7 font-serif font-light">
              <span className="text-blue-500 font-bold text-2xl">
                Our Vision
              </span>{" "}
              is to create a globally recognized platform that serves ultimate
              support resource for all aspects of life. We dream of a world
              where anyone, anywhere, can effortlessly access the help they need
              to overcome challenges and reach their goals.
            </p>
          </div>
        </div>
      </div>

      {/* fourth div */}
      <div className="flex flex-col md:flex-row justify-between items-start  py-24">
        {/* Left Column with Timeline */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {/* Medical Support */}
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Medical Support
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              You can connect with healthcare professionals for consultations,
              advice, and treatment plans.
            </p>
          </li>

          {/* Business Support */}
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Business Support
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get expert guidance to help you start, manage, and grow your
              business.
            </p>
          </li>

          {/* Education Consultancy */}
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Education Consultancy
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Receive personalized advice for navigating educational pathways
              and opportunities.
            </p>
          </li>
        </ol>

        {/* Center Image */}
        <div className="w-full md:w-auto my-6 md:my-0">
          <Image
            src={doctorImage}
            alt="Doctor"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>

        {/* Right Column with Timeline */}
        <ol className="relative border-r border-gray-200 dark:border-gray-700 ml-6">
          {/* Vet Support */}
          <li className="mb-10 mr-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Vet Support
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get expert care and advice for your pets from qualified
              veterinarians.
            </p>
          </li>

          {/* Child Support */}
          <li className="mb-10 mr-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Child Support
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get expert advice and resources to ensure the well-being of your
              children.
            </p>
          </li>

          {/* IT Support */}
          <li className="mb-10 mr-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              IT Support
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Utilize a range of services to enhance your online presence and
              business operations.
            </p>
          </li>
        </ol>
      </div>

      {/* fifth div */}
      <div className="flex flex-col justify-center items-center ">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white mb-4">
          <p>
            "Solve Meet helped me launch my startup by providing excellent
            business guidance!"
          </p>
        </blockquote>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoid"
          title="Company Introduction"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* sixth div */}
      <div className="about-page">
        {/* Introduction */}
        <section className="intro text-center py-12 px-6">
          <h1 className="text-4xl font-bold text-blue-500">Who We Are</h1>
          <p className="py-5 text-3xl font-serif text-gray-500">
            We are committed to providing expert guidance and support for all of
            life's challenges.
          </p>
        </section>

        {/* Company Story */}
        <section className="story my-16 bg-gray-100 dark:bg-gray-800 py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-6 text-blue-500">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-10">
            Founded in 2021, Solve Meet was born from the belief that everyone
            deserves easy access to expert advice. Our mission is to make
            professional guidance available at the click of a button.
          </p>

          {/* Timeline */}
          <ol className="relative border-l border-blue-500 max-w-2xl mx-auto">
            {/* First event */}
            <li className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                2021
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Company founded
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Solve Meet was officially launched, bringing expert advice to
                those in need.
              </p>
            </li>

            {/* Second event */}
            <li className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                2022
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Expanded services
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Expanded our offerings to include 5 consulting services,
                covering medical, business, education, and more.
              </p>
            </li>
          </ol>
        </section>

        {/* Team */}

        {/* Vision & Values */}

        {/* Vision & Values Section */}
        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-6">
            Our Vision & Values
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-10">
            We envision a world where expert help is accessible to everyone, no
            matter their location or situation. Our core values are centered
            around trust, integrity, and a relentless commitment to quality
            service.
          </p>

          {/* Call to Action (CTA) Section */}
          <section className="cta text-center">
            <Link
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
            >
              Explore Our Services
            </Link>
          </section>
        </section>
      </div>
      {/* <p>
        Thank you for choosing Solve Meet. We look forward to assisting you on
        your journey.
      </p> */}
    </main>
  );
}
