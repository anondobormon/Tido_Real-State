import React from "react";

export const Loading = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <div class="rounded-md p-4  w-3/6 mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-md bg-pink-400 h-16 w-16"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-pink-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-pink-200 rounded"></div>
              <div class="h-4 bg-pink-200 rounded w-5/6"></div>
              <div class="h-4 bg-pink-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
