import { createBrowserRouter } from "react-router-dom";
import Sidenav from "../shared/components/Sidenav";
import Home from "../pages/home";
import Appointments from "../pages/appointments";
import Profile from "../pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Sidenav>
        <Home />
      </Sidenav>
    ),
  },
  {
    path: "/marcacoes",
    element: (
      <Sidenav>
        <Appointments />
      </Sidenav>
    ),
  },
  {
    path: "/perfil",
    element: (
      <Sidenav>
        <Profile />
      </Sidenav>
    ),
  },
]);

export default router;