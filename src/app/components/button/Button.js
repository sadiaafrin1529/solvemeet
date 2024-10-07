"use client";
export default function Button({ title, icon }) {
  return (
    <div className="flex justify-center sm:justify-start">
      <button
        className="flex items-center bg-blue-500 text-white text-base sm:text-xs md:text-lg lg:text-sm font-bold rounded-lg 
                   px-3 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:px-3 lg:py-2
                   hover:bg-blue-600 transition-all duration-300 ease-in-out"
        onClick={() => console.log("I have Clicked here")}
      >
        {icon && <span className="mr-1 sm:mr-2 md:mr-3">{icon}</span>}
        {title}
      </button>
    </div>
  );
}
