import React from "react";
import { Link } from "react-router-dom";

function Receiver() {
  const data = [
    {
      name: "Bangalore Server",
      image:
        "https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg?size=626&ext=jpg",
    },
    {
      name: "Delhi Server",
      image:
        "https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg?size=626&ext=jpg",
    },
    {
      name: "Hyderabad Server",
      image:
        "https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg?size=626&ext=jpg",
    },
  ];

  return (
    <div>
      <div className="items-center align-middle cursor-pointer space-x-2 space-y-10">
        <h1 className="text-3xl tracking-wideing ml-44 mt-36">Server Files</h1>
        <div className="flex justify-evenly">
          {data.map((item) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="fly">
                <img
                  class="rounded-t-lg object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </Link>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receiver;
