import React from "react";
import equipments from "../../equipments.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={equipments}
          class="max-w-lg rounded-lg shadow-xl"
        />
        <div>
          <h1 class="text-4xl font-medium">INNOVATIVE EQUIPMENTS</h1>
          <p class="py-6 italic">
          Tools and equipment are two words that are often used synonymously, mainly due to the similarities of their meanings. Because of this factor, they can be used interchangeably in most instances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
