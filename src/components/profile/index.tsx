import { Outlet } from "react-router-dom";
import ProfileDashboard from "./profile-dashboard";

const ProfileComponent = () => {
  return (
    <div className="w-[90%] m-auto py-5">
      <div className="flex gap-5">
        <ProfileDashboard />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
