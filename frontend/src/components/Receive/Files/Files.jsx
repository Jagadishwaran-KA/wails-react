import React from "react";

function Files() {
  const files = [
    {
      fileName: "Video.mp4",
      filesize: "1gb",
      status: "transfered",
    },
    {
      fileName: "Audio.mp3",
      filesize: "150mb",
      status: "inactive",
    },
    {
      fileName: "rockyou.doc",
      filesize: "30mb",
      status: "transfered",
    },
    {
      fileName: "pdf.zip",
      filesize: "500mb",
      status: "inactive",
    },
  ];

  return (
    <div className="mt-52 ml-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                File name
              </th>
              <th scope="col" class="px-6 py-3">
                File Size
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((item) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.fileName}
                </th>
                <td class="px-6 py-4">{item.filesize}</td>
                <td class="px-6 py-4">{item.status}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Files;
