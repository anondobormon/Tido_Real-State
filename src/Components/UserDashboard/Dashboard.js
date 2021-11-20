import React from "react";
import { useParams } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
// import { UserDashboardContent } from "./UserDashboardContent";

export const Dashboard = ({ component }) => {
  let params = useParams();
  console.log(params);
  return (
    <div className="bg-gray-100 py-8">
      <div className="flex flex-wrap">
        <DashboardSidebar />

        {component}
        {/* <UserDashboardContent /> */}
      </div>
    </div>
  );
};
