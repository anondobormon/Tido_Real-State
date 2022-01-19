import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MyProperties = () => {
  const [infoData, setInfoData] = useState([]);
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    fetch("http://localhost:5000/userinfo")
      .then((res) => res.json())
      .then((data) => {
        let userData = data.find((user) => user.uid === userId);
        setInfoData(userData);
      });
  }, []);

  const { buyProperty, username, _id } = infoData ? infoData : {};

  return (
    <div className="border p-4 mx-auto w-full md:w-9/12 bg-white">
      <h1 className="font-bold mb-8 text-2xl "> My Properties</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {buyProperty?.map((property) => (
                    <tr key={property ? property.email : ""}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://i.ibb.co/BfLNrxt/undraw-profile-pic-ic5t.png"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {username ? username : ""}
                            </div>
                            <div className="text-sm text-gray-500">
                              {property.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {property ? property.title : ""}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property ? property.status : ""}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $ {property ? property.price : ""}
                      </td>
                      <td className="px-6 py-4 relative whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to={`/property/${property._id}`}
                          className="cursor-pointer p-1 px-2 rounded bg-red-500 text-white"
                        >
                          View
                        </Link>
                        {/* <select className="px-2 ml-2 border rounded py-1">
                          <option value="Active">Active</option>
                          <option value="Done">Done</option>
                        </select> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border overflow-hidden rounded max-h-72 grid grid-cols-1 md:grid-cols-2.xl xl:grid-cols-3">
        <img
          src="https://i.ibb.co/10XWRs6/pexels-rachel-claire-5490341.jpg"
          className="w-full rounded"
        />
        <div className="p-4">
          <h1 className="font-bold text-2xl">Title of Properties</h1>
          <p className="text-lg font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </p>
          <p className="font-bold text-xl">Property Price : $ 500</p>
        </div>
      </div> */}
    </div>
  );
};
