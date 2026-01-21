import React from "react";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";
import img10 from "../../images/img10.png";
import img11 from "../../images/img11.png";
import img12 from "../../images/img12.png";
import img13 from "../../images/img13.png";
import img14 from "../../images/img14.png";
import img15 from "../../images/img15.png";
import img16 from "../../images/img16.png";
import img17 from "../../images/img17.png";
import img18 from "../../images/img18.png";
import img19 from "../../images/img19.png";

const About = () => {
  return (
    <div className="mt-20 px-4">
      <div className="max-w-7xl mx-auto mb-10">
        <span className="text-gray-400">Home / </span>
        <span>About</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-3xl md:text-5xl font-bold mb-6">
            Our Story
          </p>

          <p className="text-gray-600 mb-4 leading-6">
            Launched in 2015, Exclusive is South Asia’s premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data and
            service solutions.
          </p>

          <p className="text-gray-600 leading-6">
            Exclusive has more than 1 Million products to offer,
            growing very fast across the region.
          </p>
        </div>

        <img src={img8} className="w-full" alt="" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {[
          { img: img12, value: "10.5k", text: "Sellers active our site" },
          { img: img9, value: "33k", text: "Monthly Product Sale", red: true },
          { img: img10, value: "45.5k", text: "Customers active" },
          { img: img11, value: "25k", text: "Annual gross sale" },
        ].map((e, i) => (
          <div
            key={i}
            className={`rounded-md p-5 text-center border ${e.red ? "bg-[#DB4444] text-white" : ""
              }`}
          >
            <img src={e.img} className="mx-auto mb-3" />
            <p className="text-xl font-bold">{e.value}</p>
            <p className="text-sm mt-2">{e.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20">
        {[
          { img: img13, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: img14, name: "Emma Watson", role: "Managing Director" },
          { img: img15, name: "Will Smith", role: "Product Designer" },
        ].map((e, i) => (
          <div key={i} className="text-center">
            <img src={e.img} className="mx-auto" />
            <p className="text-xl font-bold mt-4">{e.name}</p>
            <p className="text-gray-500 mt-1">{e.role}</p>
            <img src={img16} className="mx-auto mt-2" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 mb-20 text-center">
        {[
          { img: img19, title: "FREE AND FAST DELIVERY" },
          { img: img18, title: "24/7 CUSTOMER SERVICE" },
          { img: img17, title: "MONEY BACK GUARANTEE" },
        ].map((e, i) => (
          <div key={i}>
            <img src={e.img} className="mx-auto mb-4" />
            <p className="text-xl font-bold">{e.title}</p>
            <p className="text-gray-600 mt-2">
              Free delivery for all orders over $140
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
