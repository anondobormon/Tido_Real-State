import axios from "axios";
import React, { useState } from "react";

export const AddProperty = () => {
  const [formData, setFormData] = useState({});
  const [features, setFeatures] = useState({});
  const [imageURL, setImageURL] = useState();

  const handleBlur = (e) => {
    let newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  const handleFeature = (e) => {
    let featuresData = { ...features };
    featuresData[e.target.name] = e.target.checked;
    setFeatures(featuresData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...formData };
    data["otherFeatures"] = features;
    data["image"] = imageURL;
    setFormData(data);
    fetch("https://calm-garden-61691.herokuapp.com/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      alert("Success");
      window.location.reload();
    });
  };

  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "54f8ad2746e4238bf47c906854d1de16");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (res) {
        setImageURL(res.data.data.display_url);
        console.log(res.data.data.display_url);
      });
  };

  console.log(formData);

  return (
    <div className="p-4 border rounded">
      <h1 className="text-3xl my-2 font-bold">Basic Information</h1>
      <div className="w-full">
        <p className="text-base font-bold py-2">Property Title</p>
        <input
          type="text"
          onBlur={handleBlur}
          required
          className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          placeholder="Title of Property"
          name="title"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Status</p>
          <select
            name="status"
            id="status"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          >
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
          </select>
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Type</p>
          <select
            name="type"
            id="type"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          >
            <option value="Houses">Apartment</option>
            <option value="Village">Village</option>
            <option value="Commercial">Commercial </option>
            <option value="Offices">offices</option>
            <option value="Garage">Garage</option>
          </select>
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Price</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Property Price"
            name="price"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Area</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Property Area"
            name="area"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Bedrooms</p>
          <input
            type="number"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Property Bedrooms"
            name="bedroom"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Bathrooms</p>
          <input
            type="number"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Property Bathrooms"
            name="bathroom"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-base font-bold py-2">Property Images</p>
        <input
          type="file"
          onChange={handleImgUpload}
          required
          className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          placeholder="Property Image"
          name="image"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <p className="text-base font-bold py-2">Address</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Address"
            name="address"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">City</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="City"
            name="city"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">State</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="State"
            name="state"
          />
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Zip Code</p>
          <input
            type="text"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
            placeholder="Zip Code"
            name="zip"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-base font-bold py-2">Description</p>
        <textarea
          type="text"
          onBlur={handleBlur}
          required
          className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          placeholder="Write about your property"
          name="description"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Age (Optional)</p>
          <select
            name="buildingAge"
            id="buildingAge"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          >
            <option value="0 - 5">0 - 5 Years</option>
            <option value="0 - 10">0 - 10 Years</option>
            <option value="0 - 15">0 - 15 Years</option>
            <option value="0 - 20">0 - 20 Years</option>
            <option value="0 - 25">0 - 25 Years</option>
            <option value="0 - 30 +">0 - 30+ Years</option>
          </select>
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">Property Garage (Optional)</p>
          <select
            name="garage"
            id="garage"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="w-full">
          <p className="text-base font-bold py-2">
            Additional Rooms (Optional)
          </p>
          <select
            name="additionalRoom"
            id="additionalRoom"
            onBlur={handleBlur}
            required
            className="py-3 px-4 w-full rounded border text-lg bg-gray-50 focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      {/* Others Features */}

      <p className="text-base mt-4 font-bold py-2">Features</p>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3">
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="airCondition"
            />
            <p className="text-base font-bold py-2">Air Condition</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="bedding"
            />
            <p className="text-base font-bold py-2">Bedding</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="heating"
            />
            <p className="text-base font-bold py-2">Heating</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="internet"
            />
            <p className="text-base font-bold py-2">Internet</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="microwave"
            />
            <p className="text-base font-bold py-2">Microwave</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="smoking"
            />
            <p className="text-base font-bold py-2">Smoking Allows</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="treeace"
            />
            <p className="text-base font-bold py-2">Treeace</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="balcony"
            />
            <p className="text-base font-bold py-2">Balcony</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="iron"
            />
            <p className="text-base font-bold py-2">Iron</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="wifi"
            />
            <p className="text-base font-bold py-2">Wi-Fi</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="beach"
            />
            <p className="text-base font-bold py-2">Beach</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <input
              onChange={handleFeature}
              type="checkbox"
              className="w-6 h-6 mr-2 checked:bg-pink-600"
              placeholder="Zip Code"
              name="parking"
            />
            <p className="text-base font-bold py-2">Parking</p>
          </div>
        </div>
      </div>
      <p className="text-lg mt-4 font-bold py-2">Trams & Conditions</p>
      <div className="flex items-center">
        <input
          onChange={handleFeature}
          type="checkbox"
          className="w-6 h-6 mr-2 checked:bg-pink-600"
          placeholder="Zip Code"
          name="agree"
        />
        <p className="text-base font-bold py-2">
          I consent to having this website store my submitted information so
          they can respond to my inquiry.
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="px-8 rounded py-4 my-3 font-bold text-lg bg-pink-500 text-white"
      >
        Submit
      </button>
    </div>
  );
};
