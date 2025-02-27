import { Sidebar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiUser, HiArrowSmLeft } from "react-icons/hi";

const DashboardSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    setTab(urlParams.get("tab"));
  }, [location.search]);

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to={"/dashboard?tab=profile"}
            active={tab === "profile"}
            icon={HiUser}
            label="User"
            labelColor={"dark"}
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmLeft} className={"cursor-pointer"}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;
