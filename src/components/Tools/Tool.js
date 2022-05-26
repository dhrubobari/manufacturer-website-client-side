import React from "react";

const Tool = ({ tool }) => {
  const { img, name, description, quantity, price } = tool;

  return (
    <div class="card card-compact w-9/12 bg-base-100 shadow-2xl my-28 ml-12">
      <figure>
        <img
          src={img}
          alt="Tool"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p class="font-medium">Available Quantity: {quantity}</p>
        <p class="font-medium">Minimum Order Quantity: {quantity}</p>
        <p class="font-semibold">Price: ${price}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
