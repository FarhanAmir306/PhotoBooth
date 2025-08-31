import { Outlet } from "react-router";
import SideBar from "../components/common/SideBar";
import PostProvider from "../provider/PostProvider";

export default function PrivateRoutes() {
  return (
    <>
      <SideBar />
      <div>
        <PostProvider>
          <Outlet />
        </PostProvider>
      </div>
    </>
  );
}
