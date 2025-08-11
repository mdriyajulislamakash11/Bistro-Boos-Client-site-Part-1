import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hook/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleUpdateItem = (id) => {
    console.log(id);
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete oparetions:
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>

      {/* table formate */}
      <div className="p-12">
        <h2 className="text-2xl font-bold my-2">TOTAL ITEMS: {menu.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-16" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>

                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="p-4 bg-yellow-500 text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="p-4 bg-red-500 btn-lg"
                    >
                      <FaTrashAlt className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
