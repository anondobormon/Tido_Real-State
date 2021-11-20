import React from "react";
import { Dashboard } from "../Dashboard";
import { UserDashboardContent } from "../UserDashboardContent";

export const DashSection = () => {
  return (
    <div>
      <Dashboard
        component={
          <UserDashboardContent component={"This page is build in process!!"} />
        }
      />
    </div>
  );
};
