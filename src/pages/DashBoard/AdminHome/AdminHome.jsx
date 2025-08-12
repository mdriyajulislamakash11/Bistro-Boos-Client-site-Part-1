import React from "react";
import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaCreativeCommonsNcEu, FaUsers, FaUtensils, FaShoppingCart } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // safely formatted values
  const revenue = stats.revenue ? stats.revenue.toFixed(2) : "0.00";
  const users = stats.users || 0;
  const menuItems = stats.menuItems || 0;
  const orders = stats.orders || 0;

  return (
    <div className="p-10">
      <h2 className="text-3xl my-6">
        <span>Hi, Welcome </span>
        {user?.displayName || "Back"}
      </h2>

      {/* Stats admin */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Revenue */}
        <div className="h-36 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center gap-4 p-4 text-white">
          <FaCreativeCommonsNcEu size={40} />
          <div>
            <h2 className="text-3xl font-bold">${revenue}</h2>
            <p>Revenue</p>
          </div>
        </div>

        {/* Users */}
        <div className="h-36 rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center gap-4 p-4 text-white">
          <FaUsers size={40} />
          <div>
            <h2 className="text-3xl font-bold">{users}</h2>
            <p>Users</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="h-36 rounded-lg shadow-lg bg-gradient-to-r from-red-500 to-red-300 flex items-center justify-center gap-4 p-4 text-white">
          <FaUtensils size={40} />
          <div>
            <h2 className="text-3xl font-bold">{menuItems}</h2>
            <p>Menu Items</p>
          </div>
        </div>

        {/* Orders */}
        <div className="h-36 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center gap-4 p-4 text-white">
          <FaShoppingCart size={40} />
          <div>
            <h2 className="text-3xl font-bold">{orders}</h2>
            <p>Orders</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
