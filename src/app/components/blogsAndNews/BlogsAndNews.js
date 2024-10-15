import React from "react";
import Image from "next/image";
import booking from "@/app/images/booking.jpg";
import brain from "@/app/images/brain.jpg";
import orthopedy from "@/app/images/orthopedy.jpg";
import Title from "../title/Title";

export default function BlogsAndNews() {
  const blogs = [
    {
      id: 1,
      category: "Urology",
      title: "Revolutionizing Healthcare: The Rise of Online Doctor Booking",
      description:
        "Explore how online doctor booking is revolutionizing access to healthcare efficiency.",
      image: booking,
      date: "03 Apr 2024",
      authorImage:
        "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip", // External URL
    },
    {
      id: 2,
      category: "Neurology",
      title: "Neurology and Technology: A New Frontier in Brain Health",
      description:
        "Discover the intersection of technology and neurology, transforming treatments.",
      image: brain,
      date: "10 Apr 2024",
      authorImage:
        "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip", // External URL
    },
    {
      id: 3,
      category: "Orthopedic",
      title: "Beating Strong: The Digital Revolution in Cardiac Care",
      description:
        "Discover how digital advancements are transforming cardiac care, making heart health.",
      image: orthopedy,
      date: "15 Apr 2024",
      authorImage:
        "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip", // External URL
    },
  ];

  return (
    <div className="py-10">
      <Title
        title={"Blogs and News"}
        description={"Read Professional Articles and Latest Articles"}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {blog.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-500">{blog.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Use img for external URLs */}
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={blog.authorImage}
                      alt="Author"
                    />
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="block">{blog.date}</span>
                  </div>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
