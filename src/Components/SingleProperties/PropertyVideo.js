import { XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import ReactPlayer from "react-player";

export const PropertyVideo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalImage = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="video-section relative overflow-hidden my-2 rounded">
      <div className="py-12 absolute h-full flex justify-center items-center w-full md:py-64">
        <a class="play-btn2" onClick={handleModalImage} href="#"></a>
      </div>
      <img
        id="myImg"
        className=" w-full"
        onClick={handleModalImage}
        src="https://i.ibb.co/gZJZJyq/pexels-curtis-adams-3935350.jpg"
        alt=""
      />

      {/* <!-- The Modal --> */}
      {showModal ? (
        <div id="myModal" className="modal">
          <span className="close" onClick={handleClose}>
            <XCircleIcon className="w-10" />
          </span>
          <ReactPlayer
            controls
            id="img01"
            className="modal-content"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
