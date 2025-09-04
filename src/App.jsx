import { Route, Routes } from "react-router";
import SuccessDialog from "./components/common/SuccessDialog";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Notification from "./components/page/Notification";
import Register from "./components/page/Register";
import PostDetails from "./components/post/PostDetails";
import EditProfile from "./components/profile/EditProfile";
import Profile from "./components/profile/Profile";
import PrivateRoutes from "./router/PrivateRoutes";
import CreatePost from "./components/page/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/create-post" element={<CreatePost/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dialog" element={<SuccessDialog />} />
      </Routes>
    </>
  );
}

export default App;
