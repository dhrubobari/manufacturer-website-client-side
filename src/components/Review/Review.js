import React from "react";
import company from "../../company.png";

const Review = () => {
  return (
    <div>
      <h2 class="text-4xl text-gray-600 font-medium my-16">
        Our Business Reviews
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="card w-9/12 bg-base-200 shadow-lg ml-16">
          <div class="card-body">
          <div class="w-24 rounded border border-silver-400">
              <img src={company} />
          </div>
            <p class="text-left text-sm">Review from: <span class="font-semibold">Mendin Manufacturing</span></p>
            <p class="text-left py-8">The tools and equipments are very good quality products.</p>
          </div>
        </div>
        <div class="card w-9/12 bg-base-200 shadow-xl ml-12">
          <div class="card-body">
          <div class="w-24 rounded border border-silver-400">
              <img src={company} />
          </div>
            <p class="text-left text-sm">Review from: <span class="font-semibold">Mendin Manufacturing</span></p>
            <p class="text-left py-8">The tools and equipments are very good quality products.</p>
          </div>
        </div>
        <div class="card w-9/12 bg-base-200 shadow-xl ml-8">
          <div class="card-body">
          <div class="w-24 rounded border border-silver-400">
              <img src={company} />
          </div>
            <p class="text-left text-sm">Review from: <span class="font-semibold">Mendin Manufacturing</span></p>
            <p class="text-left py-8">The tools and equipments are very good quality products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
