import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer/NavBer";


const MainLayout = () => {
    return (
        <div  className="max-w-[1200px] mx-auto" >
                <NavBer ></NavBer>
                <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;