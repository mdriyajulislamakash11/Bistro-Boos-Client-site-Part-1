import React from "react";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";


const ShuoldTryCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database

      const cartItems = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItems)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added yto your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refatch cart to the item count
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page

          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-6 rounded-xl bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn text-yellow-600 border-b-2 border-b-yellow-500 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShuoldTryCard;
