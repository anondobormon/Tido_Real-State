import axios from "axios";
import React, { useState } from "react";

export const PropertyForm = () => {
  const [formData, setFormData] = useState({});
  const [imageURL, setImageURL] = useState();

  const handleBlur = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = { ...formData };
    newData["image"] = imageURL;

    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(newData);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          onBlur={handleBlur}
          required
          placeholder="Title"
        />
        <br />
        <select onBlur={handleBlur} required name="status" id="status">
          <br />
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <br />
        <select onBlur={handleBlur} required name="type" id="status">
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="village">Village</option>
          <option value="commercial">Commercial</option>
          <option value="office">Office</option>
          <option value="garage">Garage</option>
        </select>
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="price"
          placeholder="Price"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="area"
          placeholder="Area"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
        />
        <br />
        <input
          onChange={handleImgUpload}
          type="file"
          name="photo"
          placeholder="Upload Photos"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="address"
          placeholder="Address"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="description"
          placeholder="Description"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="buildingAge"
          placeholder="Building Age"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="buildingGarage"
          placeholder="Chose Garage"
        />
        <br />
        <input
          onBlur={handleBlur}
          required
          type="text"
          name="otherFeatures"
          placeholder="Other Features"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
      </form>
    </div>
  );
};
