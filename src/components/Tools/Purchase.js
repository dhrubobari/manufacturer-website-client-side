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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>{tool.name}</td>
              <td>{tool.description}</td>
              <td>{tool.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase;
