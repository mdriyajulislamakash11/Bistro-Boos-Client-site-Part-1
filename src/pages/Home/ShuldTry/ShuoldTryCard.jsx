import React from "react";

const ShuoldTryCard = ({ item }) => {
  const { name, image, recipe, price } = item;

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
          <button className="btn text-yellow-600 border-b-2 border-b-yellow-500 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShuoldTryCard;
