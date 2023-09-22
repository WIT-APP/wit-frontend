import SideBarDashboard from "@/components/sidebar/SideBarDashboard";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="flex">
      <SideBarDashboard />
      <Outlet />
    </div>
  );
}

export default Dashboard;
