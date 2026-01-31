import { createBrowserRouter } from "react-router";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Root from "./pages/Root";
import UserProfile from "./pages/UserProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "profile/:id", Component: Profile },
      { path: "admin", Component: AdminPage },
      { path: "my-profile", Component: UserProfile },
      { path: "feed", Component: Feed },
      { path: "*", Component: NotFound },
    ],
  },
]);