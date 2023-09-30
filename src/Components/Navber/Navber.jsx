import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import StarApplying from "./StarApplying";


const NavBer = () => {
  return (
    <div className="flex justify-between  ">
        <Logo></Logo>
      <nav >
        <ul className=" flex gap-10">
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline text-xl" : ""
              }
            >
              statistics
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/appliedJobs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline text-xl" : ""
              }
            >
             AppliedJobs
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline text-xl" : ""
              }
            >
               Blog
            </NavLink>
            
          </li>
        </ul>
      </nav>

      <div>
        <StarApplying></StarApplying>
      </div>
    </div>
  );
};

export default NavBer;
