import React from "react";

export const Loading = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="rounded-md p-4  w-3/6 mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-md bg-pink-400 h-16 w-16"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-pink-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-pink-200 rounded"></div>
              <div className="h-4 bg-pink-200 rounded w-5/6"></div>
              <div className="h-4 bg-pink-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
