import React from "react";

const ShuoldTryCard = ({ item }) => {

    const {name, image, recipe} = item;

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn text-yellow-600 border-b-2 border-b-yellow-500">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default ShuoldTryCard;
