import { Outlet } from "react-router";
import AppNavigation from "./AppNavigation";

export default function AppLayout() {

  return (
    <AppNavigation>
        <Outlet />
    </AppNavigation>
  )
}
