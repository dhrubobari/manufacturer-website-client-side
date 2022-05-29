import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://limitless-depths-35925.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  });

  return (
    <div>
      <h2 class="text-4xl font-medium">Tools Equipments</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
        tools.map(tool => (
            <Tool key={tool._id} tool={tool}></Tool>
        ))
        }
      </div>
    </div>
  );
};

export default Tools;
