import React from 'react'

export default function Title({title,icon,description}) {
  return (
    <div className="text-center">
      <h2 className="font-bold text-blue-500 lg:py-5 mt-5  text-4xl  tracking-tight ">
        {icon} {title}
      </h2>
      <p className="text-lg text-gray-500 from-neutral-50">{description}</p>
    </div>
  );
}
