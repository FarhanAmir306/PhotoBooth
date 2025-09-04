import { Outlet } from "react-router";
import SideBar from "../components/common/SideBar";
import PostProvider from "../provider/PostProvider";
import ProfileProvider from "../provider/ProfileProvider";

export default function PrivateRoutes() {
  return (
    <>
      <ProfileProvider>
        <SideBar />
        <PostProvider>
          <Outlet />
        </PostProvider>
      </ProfileProvider>
    </>
  );
}
