import React from "react";
import { Dashboard } from "../Dashboard";
import { MyProperties } from "../MyProperties";

export const DashboardAllProperty = () => {
  return (
    <div>
      <Dashboard component={<MyProperties />} />
    </div>
  );
};
