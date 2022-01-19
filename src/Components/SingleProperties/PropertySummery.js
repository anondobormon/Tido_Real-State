import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Features } from "./Features";

export const PropertySummery = ({ property }) => {
  const handleBuy = async (id) => {
    console.log(id);
    try {
      const userId = localStorage.getItem("uid");
      const userData = {
        uid: userId,
        propertyId: id,
      };

      // show toast
      await toast.success("Buy Successful !", {
        position: toast.POSITION.TOP_RIGHT,
      });

      // http://localhost:5000

      // Send data to database
      await fetch("http://localhost:5000/addbuy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      // show toast
      await toast.error("Buy Failed !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="my-4 mb-6">
      <div className="text-3xl font-bold">
        <p>Property Summery</p>

        <div className="w-24 h-1 my-2 bg-primary"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-xl font-bold text-black">
            Property Id: <span className="font-normal">{property._id}</span>
          </p>
          <p className="text-xl font-bold text-black">
            Bedrooms: <span className="font-normal">{property.bedroom}</span>
          </p>
          <p className="text-xl font-bold text-black">
            Bathrooms: <span className="font-normal">{property.bathroom}</span>
          </p>
          <p className="text-xl font-bold text-black">
            Building Age:{" "}
            <span className="font-normal">{property.buildingAge}</span>
          </p>
          <p className="text-xl font-bold text-black">
            City: <span className="font-normal">{property.city}</span>
          </p>
          <p className="text-xl font-bold text-black">
            Area (SFT): <span className="font-normal">{property.area} </span>
          </p>
          <p className="text-xl font-bold text-black">
            Garage: <span className="font-normal">{property.garage}</span>
          </p>
          <p className="text-xl font-bold text-black">
            Type: <span className="font-normal">{property.type}</span>
          </p>
        </div>
        <p className="mt-4 md:mt-8">Other's Features</p>
        <div className="w-24 h-1 my-2 bg-primary"></div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3">
          {property?.otherFeatures.airCondition ? (
            <Features title={"Air Condition"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.balcony ? (
            <Features title={"Balcony"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.bedding ? (
            <Features title={"Bedding"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.heating ? (
            <Features title={"Heating"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.internet ? (
            <Features title={"Internet"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.microwave ? (
            <Features title={"Microwave"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.smoking ? (
            <Features title={"Smoking"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.treeace ? (
            <Features title={"Treeace"} />
          ) : (
            ""
          )}
          {property?.otherFeatures.wifi ? <Features title={"Wi-Fi"} /> : ""}
        </div>
        <button
          onClick={() => handleBuy(property._id)}
          className="px-4 py-2 text-center bg-primary w-36 text-lg text-white mx-auto flex font-bold items-center my-2 lg:my-5 hover-letter-space"
        >
          Buy Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
