import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardProfile from "../Components/DashboardProfile";
import DashboardSidebar from "../Components/DashboardSidebar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    setTab(urlParams.get("tab"));
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sideBar */}
        <DashboardSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashboardProfile />}
    </div>
  );
};

export default Dashboard;
