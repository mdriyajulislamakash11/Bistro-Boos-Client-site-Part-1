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
      <div>
        {
            menu.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
    </section>
  );
};

export default PopulerMenu;
