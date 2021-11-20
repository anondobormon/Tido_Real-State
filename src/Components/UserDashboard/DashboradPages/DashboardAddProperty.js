import React from "react";
import { AddProperty } from "../AddProperty";
import { Dashboard } from "../Dashboard";
import { UserDashboardContent } from "../UserDashboardContent";

export const DashboardAddProperty = () => {
  return (
    <div>
      <Dashboard
        component={<UserDashboardContent component={<AddProperty />} />}
      />
    </div>
  );
};
