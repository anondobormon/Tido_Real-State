import React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
// import { UserDashboardContent } from "./UserDashboardContent";

export const Dashboard = ({ component }) => {
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
