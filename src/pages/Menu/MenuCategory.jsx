import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="p-10">
      {title && <Cover img={coverImg} title={title} description='Authoritatively predominate client-centric products without adaptive ROI. Enthusiastically pursue user friendly alignments via excellent value. Quickly facilitate.' />}

      <div className="grid md:grid-cols-2 gap-4 mb-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}  />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
