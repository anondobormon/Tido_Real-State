import React from "react";
import { Dashboard } from "../Dashboard";
import { UserDashboardContent } from "../UserDashboardContent";
import { UserProfile } from "../UserProfile";

export const DashboardUserProfile = () => {
  return (
    <div>
      <Dashboard
        component={<UserDashboardContent component={<UserProfile />} />}
      />
    </div>
  );
};
