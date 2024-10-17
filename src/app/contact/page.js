import React from "react";
import Title from "../components/title/Title";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../components/button/Button";

export default function ContactUspage() {
  const items = [
    {
      id: 1,
      icon: <CiLocationOn size={40} className="text-blue-500" />,
      title: "Address",
      address: "8432 Mante Highway, Aminaport, USA.",
    },
    {
      id: 2,
      icon: <CiPhone size={40} className="text-blue-500" />,
      title: "Phone Number",
      address: "+1 315 369 5943",
    },
    {
      id: 3,
      icon: <MdOutlineEmail size={40} className="text-blue-500" />,
      title: "Email Address",
      address: "doccure@example.com",
    },
  ];

  return (
    <main className="container mx-auto my-12 px-4 lg:px-0">
      <div>
        <Title title={"Contact Us"} />
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LeftSide div */}
          <div>
            <p className="text-blue-500 text-lg">Get in touch</p>
            <h1 className="text-4xl font-bold my-4">Have Any Question?</h1>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border py-4 px-6 mb-6 rounded-lg shadow-sm"
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RightSide div */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <form>
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Services</label>
                  <input
                    type="text"
                    placeholder="Enter Services"
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  placeholder="Enter your comments"
                  className="w-full border p-2 rounded h-32"
                ></textarea>
              </div>
              <Button
                title={"Send Message"}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              />
            </form>
          </div>
        </div>
        {/* map */}
      



    <div className="map-container py-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225555!2d-76.1524334!3d36.8517134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bac6d5ddbded5b%3A0xa0139b92b3946570!2sBeachStreet%20USA!5e0!3m2!1sen!2sus!4v1614323895981!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>


      </div>
    </main>
  );
}
