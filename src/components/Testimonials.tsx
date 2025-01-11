export default function Testimonial() {
  const testimonials = [
    {
      title: "Mars Explorer is incredible",
      description:
        "First Mars Explorer is an amazing aerospace company founded by John Doe. It is one of the leading private Space agencies around the globe. Mars Explorer rockets are reusable and can re-flight again.",
      name: "Martha Smith",
      location: "California",
      image: "/p1.svg", 
    },
    {
      title: "Changing the future for the better",
      description:
        "Trying to change the future to make it better. Keep pushing forward to make humanity a multi-planetary species. Mars Explorer are such a magnificent aerospace company.",
      name: "Alley Holzer",
      location: "New York",
      image: "/p2.svg",
    },
  ];

  return (
    <div className="flex flex-col  items-center gap-8 py-8 bg-[#F6FBFD] ">
      <h1 className="text-4xl flex-col flex font-bold text-gray-800">
        Testimonials
      </h1>
      <div className="flex flex-col md:flex-row md:justify-evenly  w-[75%]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg p-6 max-w-md text-center mb-[6rem]"
          >
            <h3 className="text-xl font-bold text-gray-800">
              {testimonial.title}
            </h3>
            <p className="text-gray-600 mt-4">{testimonial.description}</p>

            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
            </div>

            <div className="flex items-center justify-center mt-12 absolute bottom-[-80px] left-1/2 transform -translate-x-1/4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div className="ml-4 text-left">
                <p className="text-sm font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
