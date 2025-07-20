import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterByData = data.filter((item) => item.category === "popular");
        setMenu(filterByData);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Populer Items"}
      ></SectionTitle>

      {/*  */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      {/* btn */}
      <div className="flex justify-center mb-10">
        <button className="btn border">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopulerMenu;
