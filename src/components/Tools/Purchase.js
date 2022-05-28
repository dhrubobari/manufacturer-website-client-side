import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  });

  return (
    <div>
      <h2 class="text-2xl my-12">Info of Your Equipment</h2>
      <div class="overflow-x-auto border">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Description</th>
              <th>Price $</th>
              <th>Minimum Order Quantity</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>{tool.name}</td>
              <td>{tool.description}</td>
              <td>{tool.price}</td>
              <td>{tool.quantity} <button class="btn btn-success btn-sm text-xl m-5">-</button><button class="btn btn-error btn-sm text-xl">+</button></td>
              <td>{tool.quantity}  <button class="btn btn-success btn-sm text-xl m-5">-</button><button class="btn btn-error btn-sm text-xl">+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 border shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-600">To Order</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="email"
                placeholder="Your Address"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="email"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <input className="btn bg-cyan-400 w-full border-0 mt-1 max-w-xs" value="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Purchase;
