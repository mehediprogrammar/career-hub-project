import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import NavBer from "../Components/NavBer/NavBer";

const MainLayout = () => {
  return (
    <div className=" bg-slate-50 ">
      <div className="max-w-[1200px] mx-auto">
        <NavBer></NavBer>
        <Outlet className="w-[80vh] h-screen"></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
     
    </div>
  );
};

export default MainLayout;
