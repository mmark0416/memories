import { Outlet } from "react-router-dom";
import { Navrbar } from "./Navrbar";

export const Layout = () => {
  return (
    <div>
      <Navrbar />
      <Outlet />
    </div>
  );
};
