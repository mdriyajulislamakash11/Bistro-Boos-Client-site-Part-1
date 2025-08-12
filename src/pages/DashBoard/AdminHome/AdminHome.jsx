import useAuth from "../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import {
  FaCreativeCommonsNcEu,
  FaUsers,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

  const { data: chartStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // safely formatted values
  const revenue = stats.revenue ? stats.revenue.toFixed(2) : "0.00";
  const users = stats.users || 0;
  const menuItems = stats.menuItems || 0;
  const orders = stats.orders || 0;

  // custom shape for the bar cart
  const RADIAN = Math.PI / 180;
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  // custom shape for the pie chart
  const renderCustomizedLabel = ({cx,cy,midAngle, innerRadius,outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const pieChatData = chartStats.map(data => {
    return {
        name: data.category,
        value: data.revenue,
    }
  })

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

      {/* bar chart */}
      <div className=" md:flex my-12">
        {/* left bar Chart */}
        <div className="w-full py-6 md:pt-20">
          <BarChart
            width={500}
            height={300}
            data={chartStats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* right pie Chart */}
        <div className="w-full">
             <PieChart width={400} height={400}>
        <Pie
          data={pieChatData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChatData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
