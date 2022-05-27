import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {_id, img, name, description, quantity, price } = tool;
  const navigate = useNavigate();

  const navigateToPurchase = id => {
    navigate(`/purchase/${id}`)
  }

  return (
    <div class="card card-compact w-9/12 bg-base-100 shadow-2xl my-20 ml-12">
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
        <div class="card-actions">
          <button class="btn btn-primary" onClick={() => navigateToPurchase(_id)}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
