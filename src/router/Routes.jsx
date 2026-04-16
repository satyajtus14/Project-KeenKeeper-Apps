import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";

import Stats from "../pages/Stats";
import ErrorPage from "../errorPages/ErrorPage";
import FriendsDetails from "../friends/FriendsDetails";
import Timeline from "../pages/Timeline";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
            path: "/friends/:fnd_id",
            element: <FriendsDetails />
        },
        {
          path: "/timeline",
          element: <Timeline />
        },
        {
          path: "/stats",
          element: <Stats />
        }
      ],
      errorElement: <ErrorPage />,
    },
  ]);