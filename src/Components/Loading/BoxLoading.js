import React from "react";
import "./Loading.css";

export const BoxLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3>Loading...</h3>
      </div>
    </div>
  );
};
