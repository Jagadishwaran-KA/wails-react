import React from "react";

function Upload() {
  const date = new Date();

  const sent_data = [
    {
      filename: "Image.png",
      size: "101mb",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "MP4",
      url: "https://cdn-icons-png.flaticon.com/128/3342/3342137.png",
    },
    {
      filename: "word.doc",
      size: "1.1GB",
      date:
        date.getDate().toString() +
        "/" +
        date.getMonth().toString() +
        "/" +
        date.getFullYear().toString(),
      format: "txt",
      url: "data:image/png;base64,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",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <h1 className="text-3xl tracking-wideing">Upload Files to IPFS Node</h1>
      <div className="mt-10">
        <div className="space-x-4">
          <label className="text-lg font-mono tracking-tight">Sent to</label>
          <select className="border-0 border-b-2 border-solid border-gray-500 p-1">
            <option>Delhi Server</option>
            <option>Bangalore Server</option>
            <option>Server C</option>
          </select>
        </div>

        <div className="space-x-1 space-y-2 mt-3 align-middle items-center">
          <h1 className="text-lg font-mono tracking-tight ">Message</h1>
          <textarea
            rows="3"
            cols="50"
            placeholder="Description"
            className="border-2  border-black text-black tracking-wider text-sm"
          />
        </div>

        <div className="space-x-2 mt-3">
          <input type="checkbox" />
          <label>Protect these Files with an access code</label>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex space-x-32">
          <h1 className="text-2xl font-mono">Selected Files</h1>

          <button className="bg-gray-600 text-white p-2  rounded-md  tracking-wider ">
            Select File
          </button>
        </div>

        <p className="border border-black mt-5"></p>

        <div className="mt-3 space-y-3">
          {sent_data.map((item) => (
            <div className="flex space-x-4">
              <img
                className="w-10 object-contain"
                alt={item.filename}
                src={item.url}
              />
              <div>
                <h1>{item.filename}</h1>
                <p>
                  File Size {item.size}| {item.format} | {item.date}
                </p>
              </div>
            </div>
          ))}
          <input type="file" placeholder="Choose File" />
          <button className="bg-green-600 text-white p-3 w-28 rounded-md font-semibold ">
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
