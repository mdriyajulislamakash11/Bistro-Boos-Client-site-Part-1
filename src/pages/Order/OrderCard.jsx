import React from "react";
import ShuoldTryCard from "../Home/ShuldTry/ShuoldTryCard";

const OrderCard = ({items}) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {items.map((item) => (
          <ShuoldTryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
