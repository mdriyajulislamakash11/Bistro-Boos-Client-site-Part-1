
import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaVoicemail,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard menu */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 w-full space-y-2">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600  text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600 text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaShoppingCart className="mr-2" />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600 text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaCalendar />
              My Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600 text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaAd />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600 text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaList />
              My Bookings
            </NavLink>
          </li>

          {/* _______________________________ user ________________________________________ */}

          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600  text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600  text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaSearch />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/contact"
              className={({ isActive }) =>
                isActive
                  ? " text-start bg-blue-600  text-white font-bold border-none"
                  : " text-start btn-ghost"
              }
            >
              <FaEnvelope />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>

      {/* left side dashboard */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
