import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value grom the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard menu */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 w-full space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600 text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookins"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600 text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600 text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* _______________________________ user ________________________________________ */}

              <div className="divider"></div>
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
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaCalendar />
                  My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaAd />
                  My Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) =>
                    isActive
                      ? " text-start bg-blue-600  text-white font-bold border-none"
                      : " text-start btn-ghost"
                  }
                >
                  <FaList />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

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
