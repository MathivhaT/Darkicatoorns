import { CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
export default function Home() {
  return (
<div className="flex flex-wrap ">
  <div>
     <Sidebar />
  </div>
     
      <div className="flex-wrap pl-28 pt-2 pb-12 ">
        <Dashboard />
      </div>
    </div>  );
}
